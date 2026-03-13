import {
  blobConfigErrorResponse,
  isAuthorizedWriteRequest,
  isBlobConfigured,
  isPropertiesPayload,
  jsonResponse,
  parseJsonBody,
  readPropertiesContent,
  unauthorizedWriteResponse,
  writePropertiesContent,
} from '../server/contentApi';

export async function GET() {
  try {
    return jsonResponse(await readPropertiesContent());
  } catch (error) {
    return jsonResponse({ error: 'Unable to read properties content.', detail: String(error) }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!isAuthorizedWriteRequest(request)) {
    return unauthorizedWriteResponse();
  }

  if (!isBlobConfigured()) {
    return blobConfigErrorResponse();
  }

  const body = await parseJsonBody(request);
  if (!isPropertiesPayload(body)) {
    return jsonResponse({ error: 'Expected an array of properties.' }, { status: 400 });
  }

  try {
    return jsonResponse(await writePropertiesContent(body));
  } catch (error) {
    return jsonResponse({ error: 'Unable to persist properties content.', detail: String(error) }, { status: 500 });
  }
}
