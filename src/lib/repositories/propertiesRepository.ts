import { useSyncExternalStore } from 'react';
import { propertiesSeed } from '../../data/properties';
import type { CreateManagedPropertyInput, ManagedProperty, PropertyAmenity } from '../../types/properties';

// Current persistence strategy:
// 1) Seed data lives in src/data/properties.ts
// 2) Runtime edits are stored in browser localStorage under STORAGE_KEY
// This repository is the single access point so swapping to API/DB later is isolated here.
const STORAGE_KEY = 'lobbypm.properties.v1';
const STORE_EVENT = 'lobbypm:properties-updated';
const defaultSnapshot = structuredClone(propertiesSeed);

let cachedRaw = '';
let cachedSnapshot: ManagedProperty[] = defaultSnapshot;

export interface PropertiesRepository {
  list(): ManagedProperty[];
  listPublished(): ManagedProperty[];
  getById(id: string): ManagedProperty | undefined;
  create(input: CreateManagedPropertyInput): ManagedProperty;
  update(id: string, input: CreateManagedPropertyInput): ManagedProperty | undefined;
  subscribe(listener: () => void): () => void;
}

export const propertiesDataSource = {
  seedFile: 'src/data/properties.ts',
  storageType: 'localStorage',
  storageKey: STORAGE_KEY,
} as const;

function cloneSeed() {
  return structuredClone(propertiesSeed);
}

function normalizeAmenities(rawAmenities: unknown): PropertyAmenity[] {
  if (!Array.isArray(rawAmenities)) {
    return [];
  }

  return rawAmenities
    .map((item, index) => {
      if (typeof item === 'string') {
        return { id: toAmenityId(item), label: item };
      }

      if (
        typeof item === 'object' &&
        item !== null &&
        'label' in item &&
        typeof item.label === 'string'
      ) {
        const id =
          'id' in item && typeof item.id === 'string'
            ? item.id
            : toAmenityId(item.label || `amenity-${index + 1}`);

        return { id, label: item.label };
      }

      return null;
    })
    .filter((item): item is PropertyAmenity => item !== null);
}

function normalizeSnapshot(rawSnapshot: unknown) {
  if (!Array.isArray(rawSnapshot)) {
    return cloneSeed();
  }

  return rawSnapshot
    .map((item) => {
      if (typeof item !== 'object' || item === null) {
        return null;
      }

      const raw = item as Partial<ManagedProperty>;
      const coverImage = raw.coverImage?.src
        ? raw.coverImage
        : {
            src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
            alt: 'Propiedad boutique en Merida',
          };

      const amenities = normalizeAmenities(raw.amenities);
      const externalAmenities = Array.isArray(raw.externalAmenities)
        ? raw.externalAmenities.filter((value): value is string => typeof value === 'string')
        : [];

      return {
        id: typeof raw.id === 'string' ? raw.id : buildPropertyId(raw.name ?? 'property', new Set()),
        slug: typeof raw.slug === 'string' ? raw.slug : slugify(`${raw.name ?? 'property'}-${raw.location ?? ''}`),
        name: typeof raw.name === 'string' ? raw.name : 'Propiedad sin nombre',
        location: typeof raw.location === 'string' ? raw.location : 'Merida, Yucatan',
        shortDescription:
          typeof raw.shortDescription === 'string'
            ? raw.shortDescription
            : 'Propiedad administrada desde el panel de Lobby PM.',
        nightlyRateFrom:
          typeof raw.nightlyRateFrom === 'number' && Number.isFinite(raw.nightlyRateFrom)
            ? raw.nightlyRateFrom
            : 0,
        currency: raw.currency === 'USD' ? 'USD' : 'MXN',
        bedrooms: typeof raw.bedrooms === 'number' && Number.isFinite(raw.bedrooms) ? raw.bedrooms : 1,
        bathrooms: typeof raw.bathrooms === 'number' && Number.isFinite(raw.bathrooms) ? raw.bathrooms : 1,
        guests: typeof raw.guests === 'number' && Number.isFinite(raw.guests) ? raw.guests : 2,
        rating: typeof raw.rating === 'number' && Number.isFinite(raw.rating) ? raw.rating : 4.8,
        featured: typeof raw.featured === 'boolean' ? raw.featured : true,
        status: raw.status === 'draft' ? 'draft' : 'published',
        coverImage,
        gallery: Array.isArray(raw.gallery) && raw.gallery.length > 0 ? raw.gallery : [coverImage],
        amenities,
        externalAmenities,
        externalLink:
          raw.externalLink && typeof raw.externalLink.href === 'string' && raw.externalLink.href.trim()
            ? {
                href: raw.externalLink.href,
                label: raw.externalLink.label?.trim() || 'Ver disponibilidad',
              }
            : undefined,
      } satisfies ManagedProperty;
    })
    .filter((item): item is ManagedProperty => item !== null);
}

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function readSnapshot() {
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
    const parsed = JSON.parse(stored);
    cachedSnapshot = normalizeSnapshot(parsed);
  } catch {
    cachedSnapshot = cloneSeed();
  }

  return cachedSnapshot;
}

function persistSnapshot(snapshot: ManagedProperty[]) {
  if (!canUseStorage()) {
    cachedSnapshot = snapshot;
    return;
  }

  const raw = JSON.stringify(snapshot);
  cachedRaw = raw;
  cachedSnapshot = snapshot;
  window.localStorage.setItem(STORAGE_KEY, raw);
  window.dispatchEvent(new Event(STORE_EVENT));
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function buildPropertyId(name: string, existingIds: Set<string>) {
  const base = slugify(name) || `property-${Date.now()}`;

  if (!existingIds.has(base)) {
    return base;
  }

  let index = 2;
  let next = `${base}-${index}`;

  while (existingIds.has(next)) {
    index += 1;
    next = `${base}-${index}`;
  }

  return next;
}

function toAmenityId(label: string) {
  return slugify(label).slice(0, 30) || `amenity-${Math.random().toString(36).slice(2, 8)}`;
}

function buildAmenities(labels: string[]) {
  const seen = new Set<string>();
  const cleaned = labels
    .map((label) => label.trim())
    .filter(Boolean)
    .filter((label) => {
      const normalized = label.toLowerCase();
      if (seen.has(normalized)) {
        return false;
      }
      seen.add(normalized);
      return true;
    });

  return cleaned.map<PropertyAmenity>((label) => ({ id: toAmenityId(label), label }));
}

class BrowserPropertiesRepository implements PropertiesRepository {
  list() {
    return readSnapshot();
  }

  listPublished() {
    return this.list().filter((item) => item.status === 'published');
  }

  getById(id: string) {
    return this.list().find((item) => item.id === id);
  }

  create(input: CreateManagedPropertyInput) {
    const snapshot = this.list();
    const existingIds = new Set(snapshot.map((item) => item.id));
    const id = buildPropertyId(input.name, existingIds);
    const slugBase = `${input.name}-${input.location}`;

    const nextItem: ManagedProperty = {
      id,
      slug: slugify(slugBase) || id,
      name: input.name,
      location: input.location,
      shortDescription: input.shortDescription,
      nightlyRateFrom: input.nightlyRateFrom,
      currency: input.currency,
      bedrooms: input.bedrooms,
      bathrooms: input.bathrooms,
      guests: input.guests,
      rating: input.rating,
      featured: input.featured,
      status: input.status,
      coverImage: input.coverImage,
      gallery: input.gallery?.length ? input.gallery : [input.coverImage],
      amenities: buildAmenities(input.amenities),
      externalAmenities: input.externalAmenities
        .map((item) => item.trim())
        .filter(Boolean),
      externalLink: input.externalLink,
    };

    const nextSnapshot = [...snapshot, nextItem];
    persistSnapshot(nextSnapshot);

    return nextItem;
  }

  update(id: string, input: CreateManagedPropertyInput) {
    const snapshot = this.list();
    const propertyIndex = snapshot.findIndex((item) => item.id === id);

    if (propertyIndex === -1) {
      return undefined;
    }

    const currentItem = snapshot[propertyIndex];
    const nextItem: ManagedProperty = {
      ...currentItem,
      slug: slugify(`${input.name}-${input.location}`) || currentItem.slug,
      name: input.name,
      location: input.location,
      shortDescription: input.shortDescription,
      nightlyRateFrom: input.nightlyRateFrom,
      currency: input.currency,
      bedrooms: input.bedrooms,
      bathrooms: input.bathrooms,
      guests: input.guests,
      rating: input.rating,
      featured: input.featured,
      status: input.status,
      coverImage: input.coverImage,
      gallery: input.gallery?.length ? input.gallery : [input.coverImage],
      amenities: buildAmenities(input.amenities),
      externalAmenities: input.externalAmenities.map((item) => item.trim()).filter(Boolean),
      externalLink: input.externalLink,
    };

    const nextSnapshot = [...snapshot];
    nextSnapshot[propertyIndex] = nextItem;
    persistSnapshot(nextSnapshot);

    return nextItem;
  }

  subscribe(listener: () => void) {
    if (typeof window === 'undefined') {
      return () => undefined;
    }

    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        listener();
      }
    };

    window.addEventListener(STORE_EVENT, listener);
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener(STORE_EVENT, listener);
      window.removeEventListener('storage', onStorage);
    };
  }
}

export const propertiesRepository: PropertiesRepository = new BrowserPropertiesRepository();

export function useManagedProperties() {
  return useSyncExternalStore(
    (callback) => propertiesRepository.subscribe(callback),
    () => propertiesRepository.list(),
    () => defaultSnapshot,
  );
}
