import { useSyncExternalStore } from 'react';
import { homepageSeed } from '../../data/homepage';
import type { HomepageContent } from '../../types/homepage';
import { fetchJsonWithAdminAuth } from '../api/adminApi';

const API_ENDPOINT = '/api/homepage';
const defaultSnapshot = structuredClone(homepageSeed);
let cachedSnapshot: HomepageContent = defaultSnapshot;
const listeners = new Set<() => void>();
let initialSyncStarted = false;

function cloneSeed() {
  return structuredClone(homepageSeed);
}

function emitUpdate() {
  listeners.forEach((listener) => listener());
}

function normalizeHomepageContent(raw: unknown): HomepageContent {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return cloneSeed();
  }

  return {
    ...cloneSeed(),
    ...(raw as Partial<HomepageContent>),
  };
}

function commitSnapshot(snapshot: HomepageContent) {
  cachedSnapshot = snapshot;
  emitUpdate();
}

export function getHomepageContent(): HomepageContent {
  return cachedSnapshot;
}

export async function refreshHomepageContent() {
  try {
    const response = await fetch(API_ENDPOINT, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Unable to fetch homepage content: ${response.status}`);
    }

    const payload = await response.json();
    const nextSnapshot = normalizeHomepageContent(payload);
    commitSnapshot(nextSnapshot);
    return nextSnapshot;
  } catch (error) {
    console.warn('Homepage API unavailable, using in-memory snapshot.', error);
    return cachedSnapshot;
  }
}

export async function saveHomepageContent(content: HomepageContent) {
  const response = await fetchJsonWithAdminAuth(API_ENDPOINT, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(content),
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(payload?.error || `Unable to persist homepage content: ${response.status}`);
  }

  const payload = await response.json();
  const nextSnapshot = normalizeHomepageContent(payload);
  commitSnapshot(nextSnapshot);
  return nextSnapshot;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!initialSyncStarted && typeof window !== 'undefined') {
    initialSyncStarted = true;
    void refreshHomepageContent();
  }

  return () => {
    listeners.delete(listener);
  };
}

export function useHomepageContent() {
  return useSyncExternalStore(subscribe, () => cachedSnapshot, () => defaultSnapshot);
}
