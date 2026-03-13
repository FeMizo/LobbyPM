import { homepageSeed } from '../src/data/homepage.js';
import { propertiesSeed } from '../src/data/properties.js';
import type { HomepageContent } from '../src/types/homepage';
import type { ManagedProperty } from '../src/types/properties';

export const HOMEPAGE_BLOB_PATH = 'cms/homepage.json';
export const PROPERTIES_BLOB_PATH = 'cms/properties.json';

export function cloneHomepageSeed() {
  return structuredClone(homepageSeed);
}

export function clonePropertiesSeed() {
  return structuredClone(propertiesSeed);
}

export function normalizeHomepageContent(raw: unknown): HomepageContent {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return cloneHomepageSeed();
  }

  return {
    ...cloneHomepageSeed(),
    ...(raw as Partial<HomepageContent>),
  };
}

export function isManagedPropertyArray(value: unknown): value is ManagedProperty[] {
  return Array.isArray(value);
}

export function normalizePropertiesContent(raw: unknown): ManagedProperty[] {
  if (!isManagedPropertyArray(raw)) {
    return clonePropertiesSeed();
  }

  return raw;
}
