import { get, put } from '@vercel/blob';

type BlobAccessMode = 'private' | 'public';

function getBlobAccessMode(): BlobAccessMode {
  return process.env.BLOB_STORE_ACCESS === 'public' ? 'public' : 'private';
}

function getBlobToken() {
  return process.env.BLOB_READ_WRITE_TOKEN?.trim() ?? '';
}

export function isBlobConfigured() {
  return getBlobToken().length > 0;
}

export async function readJsonFromBlob<T>(
  pathname: string,
  fallback: () => T,
  normalize: (raw: unknown) => T,
): Promise<T> {
  if (!isBlobConfigured()) {
    return fallback();
  }

  const result = await get(pathname, {
    access: getBlobAccessMode(),
    token: getBlobToken(),
  });

  if (!result || result.statusCode !== 200 || !result.stream) {
    return fallback();
  }

  const payload = await new Response(result.stream).json();
  return normalize(payload);
}

export async function writeJsonToBlob<T>(pathname: string, value: T) {
  const token = getBlobToken();

  if (!token) {
    throw new Error('Missing BLOB_READ_WRITE_TOKEN. Connect a Vercel Blob store before writing content.');
  }

  await put(pathname, `${JSON.stringify(value, null, 2)}\n`, {
    access: getBlobAccessMode(),
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
    contentType: 'application/json; charset=utf-8',
    token,
  });

  return value;
}
