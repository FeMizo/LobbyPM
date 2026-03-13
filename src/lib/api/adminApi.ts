const ADMIN_API_TOKEN_STORAGE_KEY = 'lobbypm.admin-api-token.v1';
const ADMIN_API_TOKEN_EVENT = 'lobbypm:admin-api-token-updated';

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getAdminApiToken() {
  if (!canUseStorage()) {
    return '';
  }

  return window.localStorage.getItem(ADMIN_API_TOKEN_STORAGE_KEY)?.trim() ?? '';
}

export function setAdminApiToken(token: string) {
  if (!canUseStorage()) {
    return;
  }

  const normalizedToken = token.trim();
  if (normalizedToken) {
    window.localStorage.setItem(ADMIN_API_TOKEN_STORAGE_KEY, normalizedToken);
  } else {
    window.localStorage.removeItem(ADMIN_API_TOKEN_STORAGE_KEY);
  }

  window.dispatchEvent(new Event(ADMIN_API_TOKEN_EVENT));
}

export function clearAdminApiToken() {
  setAdminApiToken('');
}

export function subscribeToAdminApiToken(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  const onStorage = (event: StorageEvent) => {
    if (event.key === ADMIN_API_TOKEN_STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener(ADMIN_API_TOKEN_EVENT, callback);
  window.addEventListener('storage', onStorage);

  return () => {
    window.removeEventListener(ADMIN_API_TOKEN_EVENT, callback);
    window.removeEventListener('storage', onStorage);
  };
}

export async function fetchJsonWithAdminAuth(input: RequestInfo | URL, init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  const token = getAdminApiToken();

  if (token) {
    headers.set('x-admin-token', token);
  }

  return fetch(input, {
    ...init,
    headers,
  });
}

export function getApiErrorMessage(error: unknown, fallback: string) {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return fallback;
}
