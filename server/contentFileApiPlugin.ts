import type { IncomingMessage, ServerResponse } from 'node:http';
import type { HomepageContent } from '../src/types/homepage';
import type { ManagedProperty } from '../src/types/properties';
import type { Plugin } from 'vite';
import { isManagedPropertyArray, normalizeHomepageContent } from './contentSchemas.js';
import {
  readHomepageFromFile,
  readPropertiesFromFile,
  writeHomepageToFile,
  writePropertiesToFile,
} from './contentFileStore.js';

function sendJson(response: ServerResponse, statusCode: number, payload: unknown) {
  response.statusCode = statusCode;
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.end(JSON.stringify(payload));
}

async function readJsonBody(request: IncomingMessage) {
  const chunks: Buffer[] = [];

  for await (const chunk of request) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  const raw = Buffer.concat(chunks).toString('utf8').trim();
  if (!raw) {
    return null;
  }

  return JSON.parse(raw);
}

function isHomepageContent(value: unknown): value is HomepageContent {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function createJsonMiddleware<T>({
  read,
  write,
  validate,
  invalidMessage,
}: {
  read: () => Promise<T>;
  write: (value: T) => Promise<T>;
  validate: (value: unknown) => value is T;
  invalidMessage: string;
}) {
  return async (request: IncomingMessage, response: ServerResponse) => {
    const method = request.method ?? 'GET';

    if (method === 'GET') {
      try {
        sendJson(response, 200, await read());
      } catch (error) {
        sendJson(response, 500, { error: 'Unable to read local content.', detail: String(error) });
      }
      return;
    }

    if (method === 'PUT') {
      try {
        const body = await readJsonBody(request);
        if (!validate(body)) {
          sendJson(response, 400, { error: invalidMessage });
          return;
        }

        sendJson(response, 200, await write(body));
      } catch (error) {
        sendJson(response, 500, { error: 'Unable to persist local content.', detail: String(error) });
      }
      return;
    }

    sendJson(response, 405, { error: `Method ${method} not allowed.` });
  };
}

export function contentFileApiPlugin(): Plugin {
  const homepageMiddleware = createJsonMiddleware<HomepageContent>({
    read: readHomepageFromFile,
    write: writeHomepageToFile,
    validate: isHomepageContent,
    invalidMessage: 'Expected a homepage content object.',
  });
  const propertiesMiddleware = createJsonMiddleware<ManagedProperty[]>({
    read: readPropertiesFromFile,
    write: writePropertiesToFile,
    validate: isManagedPropertyArray,
    invalidMessage: 'Expected an array of properties.',
  });

  return {
    name: 'content-file-api',
    configureServer(server) {
      server.middlewares.use('/api/homepage', homepageMiddleware);
      server.middlewares.use('/api/properties', propertiesMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/homepage', homepageMiddleware);
      server.middlewares.use('/api/properties', propertiesMiddleware);
    },
  };
}
