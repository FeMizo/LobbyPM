import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';
import { propertiesSeed } from '../src/data/properties';
import type { ManagedProperty } from '../src/types/properties';

const DATA_FILE_PATH = path.resolve(process.cwd(), 'storage/properties.json');

async function ensureDataFile() {
  try {
    await readFile(DATA_FILE_PATH, 'utf8');
  } catch {
    await mkdir(path.dirname(DATA_FILE_PATH), { recursive: true });
    await writeFile(DATA_FILE_PATH, `${JSON.stringify(propertiesSeed, null, 2)}\n`, 'utf8');
  }
}

function sendJson(response: ServerResponse, statusCode: number, payload: unknown) {
  response.statusCode = statusCode;
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

function isManagedPropertyArray(value: unknown): value is ManagedProperty[] {
  return Array.isArray(value);
}

async function readPropertiesFromFile() {
  await ensureDataFile();
  try {
    const raw = await readFile(DATA_FILE_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    if (isManagedPropertyArray(parsed)) {
      return parsed;
    }
  } catch {
    return propertiesSeed;
  }

  return propertiesSeed;
}

async function writePropertiesToFile(properties: ManagedProperty[]) {
  await ensureDataFile();
  await writeFile(DATA_FILE_PATH, `${JSON.stringify(properties, null, 2)}\n`, 'utf8');
}

function createPropertiesMiddleware() {
  return async (request: IncomingMessage, response: ServerResponse) => {
    const method = request.method ?? 'GET';

    if (method === 'GET') {
      try {
        const properties = await readPropertiesFromFile();
        sendJson(response, 200, properties);
      } catch (error) {
        sendJson(response, 500, { error: 'Unable to read properties file.', detail: String(error) });
      }
      return;
    }

    if (method === 'PUT') {
      try {
        const body = await readJsonBody(request);
        if (!isManagedPropertyArray(body)) {
          sendJson(response, 400, { error: 'Expected an array of properties.' });
          return;
        }

        await writePropertiesToFile(body);
        sendJson(response, 200, body);
      } catch (error) {
        sendJson(response, 500, { error: 'Unable to persist properties file.', detail: String(error) });
      }
      return;
    }

    sendJson(response, 405, { error: `Method ${method} not allowed.` });
  };
}

export function propertiesFileApiPlugin(): Plugin {
  return {
    name: 'properties-file-api',
    configureServer(server) {
      server.middlewares.use('/api/properties', createPropertiesMiddleware());
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/properties', createPropertiesMiddleware());
    },
  };
}
