import {
  blobConfigErrorResponse,
  isAuthorizedWriteRequest,
  isBlobConfigured,
  isHomepagePayload,
  jsonResponse,
  parseJsonBody,
  readHomepageContent,
  unauthorizedWriteResponse,
  writeHomepageContent,
} from '../server/contentApi';

export async function GET() {
  try {
    return jsonResponse(await readHomepageContent());
  } catch (error) {
    return jsonResponse({ error: 'Unable to read homepage content.', detail: String(error) }, { status: 500 });
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
  if (!isHomepagePayload(body)) {
    return jsonResponse({ error: 'Expected a homepage content object.' }, { status: 400 });
  }

  try {
    return jsonResponse(await writeHomepageContent(body));
  } catch (error) {
    return jsonResponse({ error: 'Unable to persist homepage content.', detail: String(error) }, { status: 500 });
  }
}
