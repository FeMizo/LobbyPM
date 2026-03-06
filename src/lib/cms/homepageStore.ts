import { useSyncExternalStore } from 'react';
import { homepageSeed } from '../../data/homepage';
import type { HomepageContent } from '../../types/homepage';

const STORAGE_KEY = 'lobbypm.homepage-content.v1';
const STORE_EVENT = 'lobbypm:homepage-content-updated';

function cloneSeed() {
  return structuredClone(homepageSeed);
}

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getHomepageContent(): HomepageContent {
  if (!canUseStorage()) {
    return cloneSeed();
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return cloneSeed();
  }

  try {
    return {
      ...cloneSeed(),
      ...JSON.parse(stored),
    } as HomepageContent;
  } catch {
    return cloneSeed();
  }
}

export function saveHomepageContent(content: HomepageContent) {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event(STORE_EVENT));
}

export function resetHomepageContent() {
  if (!canUseStorage()) {
    return;
  }

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
  return useSyncExternalStore(subscribe, getHomepageContent, cloneSeed);
}
