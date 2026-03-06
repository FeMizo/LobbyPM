import { useSyncExternalStore } from 'react';
import { homepageSeed } from '../../data/homepage';
import type { HomepageContent } from '../../types/homepage';

const STORAGE_KEY = 'lobbypm.homepage-content.v1';
const STORE_EVENT = 'lobbypm:homepage-content-updated';
const defaultSnapshot = structuredClone(homepageSeed);

let cachedRaw = '';
let cachedSnapshot: HomepageContent = defaultSnapshot;

function cloneSeed() {
  return structuredClone(homepageSeed);
}

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getHomepageContent(): HomepageContent {
  if (!canUseStorage()) {
    return defaultSnapshot;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  const raw = stored ?? '';

  if (raw === cachedRaw) {
    return cachedSnapshot;
  }

  cachedRaw = raw;

  if (!stored) {
    cachedSnapshot = cloneSeed();
    return cachedSnapshot;
  }

  try {
    cachedSnapshot = {
      ...cloneSeed(),
      ...JSON.parse(stored),
    } as HomepageContent;
  } catch {
    cachedSnapshot = cloneSeed();
  }

  return cachedSnapshot;
}

export function saveHomepageContent(content: HomepageContent) {
  if (!canUseStorage()) {
    return;
  }

  const raw = JSON.stringify(content);
  cachedRaw = raw;
  cachedSnapshot = content;
  window.localStorage.setItem(STORAGE_KEY, raw);
  window.dispatchEvent(new Event(STORE_EVENT));
}

export function resetHomepageContent() {
  if (!canUseStorage()) {
    return;
  }

  cachedRaw = '';
  cachedSnapshot = cloneSeed();
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(STORE_EVENT));
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => undefined;
  }

  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener(STORE_EVENT, callback);
  window.addEventListener('storage', onStorage);

  return () => {
    window.removeEventListener(STORE_EVENT, callback);
    window.removeEventListener('storage', onStorage);
  };
}

export function useHomepageContent() {
  return useSyncExternalStore(subscribe, getHomepageContent, () => defaultSnapshot);
}
