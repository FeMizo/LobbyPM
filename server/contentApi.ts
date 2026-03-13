import type { HomepageContent } from '../src/types/homepage';
import type { ManagedProperty } from '../src/types/properties';
import {
  HOMEPAGE_BLOB_PATH,
  PROPERTIES_BLOB_PATH,
  cloneHomepageSeed,
  clonePropertiesSeed,
  isManagedPropertyArray,
  normalizeHomepageContent,
  normalizePropertiesContent,
} from './contentSchemas';
import { isBlobConfigured, readJsonFromBlob, writeJsonToBlob } from './vercelBlobStore';

function jsonHeaders() {
  return {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
  };
}

export function jsonResponse(payload: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      ...jsonHeaders(),
      ...(init?.headers ?? {}),
    },
  });
}

export function isAuthorizedWriteRequest(request: Request) {
  const expectedToken = process.env.ADMIN_API_TOKEN?.trim();
  if (!expectedToken) {
    return true;
  }

  const bearer = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '').trim();
  const headerToken = request.headers.get('x-admin-token')?.trim();
  const receivedToken = headerToken || bearer || '';

  return receivedToken === expectedToken;
}

export function unauthorizedWriteResponse() {
  return jsonResponse(
    { error: 'Missing or invalid admin API token. Add ADMIN_API_TOKEN in Vercel and configure it in /admin.' },
    { status: 401 },
  );
}

export async function parseJsonBody(request: Request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export function blobConfigErrorResponse() {
  return jsonResponse(
    {
      error:
        'Blob storage is not configured. Add BLOB_READ_WRITE_TOKEN to this Vercel project and create a Blob store.',
    },
    { status: 500 },
  );
}

export function readHomepageContent(): Promise<HomepageContent> {
  return readJsonFromBlob(HOMEPAGE_BLOB_PATH, cloneHomepageSeed, normalizeHomepageContent);
}

export function readPropertiesContent(): Promise<ManagedProperty[]> {
  return readJsonFromBlob(PROPERTIES_BLOB_PATH, clonePropertiesSeed, normalizePropertiesContent);
}

export async function writeHomepageContent(value: HomepageContent) {
  return writeJsonToBlob(HOMEPAGE_BLOB_PATH, normalizeHomepageContent(value));
}

export async function writePropertiesContent(value: ManagedProperty[]) {
  return writeJsonToBlob(PROPERTIES_BLOB_PATH, normalizePropertiesContent(value));
}

export function isHomepagePayload(value: unknown): value is HomepageContent {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isPropertiesPayload(value: unknown): value is ManagedProperty[] {
  return isManagedPropertyArray(value);
}

export { isBlobConfigured };
