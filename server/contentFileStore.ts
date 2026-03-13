import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { HomepageContent } from '../src/types/homepage';
import type { ManagedProperty } from '../src/types/properties';
import {
  cloneHomepageSeed,
  clonePropertiesSeed,
  normalizeHomepageContent,
  normalizePropertiesContent,
} from './contentSchemas.js';

const STORAGE_DIR = path.resolve(process.cwd(), 'storage');
const HOMEPAGE_FILE_PATH = path.join(STORAGE_DIR, 'homepage.json');
const PROPERTIES_FILE_PATH = path.join(STORAGE_DIR, 'properties.json');

async function ensureJsonFile(filePath: string, value: unknown) {
  try {
    await readFile(filePath, 'utf8');
  } catch {
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
  }
}

async function readJsonFile<T>(filePath: string, fallback: () => T, normalize: (raw: unknown) => T) {
  await ensureJsonFile(filePath, fallback());

  try {
    const raw = await readFile(filePath, 'utf8');
    return normalize(JSON.parse(raw));
  } catch {
    return fallback();
  }
}

async function writeJsonFile<T>(filePath: string, value: T) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

export async function readHomepageFromFile(): Promise<HomepageContent> {
  return readJsonFile(HOMEPAGE_FILE_PATH, cloneHomepageSeed, normalizeHomepageContent);
}

export async function writeHomepageToFile(content: HomepageContent) {
  const normalized = normalizeHomepageContent(content);
  await writeJsonFile(HOMEPAGE_FILE_PATH, normalized);
  return normalized;
}

export async function readPropertiesFromFile(): Promise<ManagedProperty[]> {
  return readJsonFile(PROPERTIES_FILE_PATH, clonePropertiesSeed, normalizePropertiesContent);
}

export async function writePropertiesToFile(properties: ManagedProperty[]) {
  const normalized = normalizePropertiesContent(properties);
  await writeJsonFile(PROPERTIES_FILE_PATH, normalized);
  return normalized;
}
