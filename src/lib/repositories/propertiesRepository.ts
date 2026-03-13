import { useSyncExternalStore } from 'react';
import { propertiesSeed } from '../../data/properties';
import type { CreateManagedPropertyInput, ManagedProperty, PropertyAmenity } from '../../types/properties';
import { fetchJsonWithAdminAuth } from '../api/adminApi';
import { buildLegacyPropertySlug, resolvePropertyRoute } from '../routing/propertyUrl';

const API_ENDPOINT = '/api/properties';
const defaultSnapshot = structuredClone(propertiesSeed);

let cachedSnapshot: ManagedProperty[] = defaultSnapshot;
const listeners = new Set<() => void>();
let initialSyncStarted = false;

export interface PropertiesRepository {
  list(): ManagedProperty[];
  listPublished(): ManagedProperty[];
  getById(id: string): ManagedProperty | undefined;
  refresh(): Promise<ManagedProperty[]>;
  create(input: CreateManagedPropertyInput): Promise<ManagedProperty>;
  update(id: string, input: CreateManagedPropertyInput): Promise<ManagedProperty | undefined>;
  subscribe(listener: () => void): () => void;
}

export const propertiesDataSource = {
  seedFile: 'src/data/properties.ts',
  persistenceFile: 'storage/properties.json',
  apiEndpoint: API_ENDPOINT,
  mode: 'vercel-blob-via-api',
  routeTemplate: '/[estado]/[lugar]/[propiedad]',
} as const;

function emitUpdate() {
  listeners.forEach((listener) => listener());
}

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

      if (typeof item === 'object' && item !== null && 'label' in item && typeof item.label === 'string') {
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
    .map<ManagedProperty | null>((item) => {
      if (typeof item !== 'object' || item === null) {
        return null;
      }

      const raw = item as Partial<ManagedProperty>;
      const route = resolvePropertyRoute({
        name: typeof raw.name === 'string' ? raw.name : 'property',
        location: typeof raw.location === 'string' ? raw.location : '',
        slug: typeof raw.slug === 'string' ? raw.slug : '',
        route: raw.route,
      });
      const legacySlug = typeof raw.slug === 'string' && raw.slug.trim() ? raw.slug : buildLegacyPropertySlug(route);
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
        slug: legacySlug,
        route,
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
      };
    })
    .filter((item): item is ManagedProperty => item !== null);
}

function commitSnapshot(snapshot: ManagedProperty[]) {
  cachedSnapshot = snapshot;
  emitUpdate();
}

async function persistSnapshotToFile(snapshot: ManagedProperty[]) {
  const response = await fetchJsonWithAdminAuth(API_ENDPOINT, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(snapshot),
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { error?: string } | null;
    throw new Error(payload?.error || `Unable to persist properties: ${response.status}`);
  }

  const payload = await response.json();
  return normalizeSnapshot(payload);
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
    return cachedSnapshot;
  }

  listPublished() {
    return this.list().filter((item) => item.status === 'published');
  }

  getById(id: string) {
    return this.list().find((item) => item.id === id);
  }

  async refresh() {
    try {
      const response = await fetch(API_ENDPOINT, { method: 'GET' });
      if (!response.ok) {
        throw new Error(`Unable to fetch properties: ${response.status}`);
      }
      const payload = await response.json();
      const nextSnapshot = normalizeSnapshot(payload);
      commitSnapshot(nextSnapshot);
      return nextSnapshot;
    } catch (error) {
      console.warn('Properties API unavailable, using in-memory snapshot.', error);
      return this.list();
    }
  }

  async create(input: CreateManagedPropertyInput) {
    const snapshot = this.list();
    const existingIds = new Set(snapshot.map((item) => item.id));
    const id = buildPropertyId(input.name, existingIds);
    const route = resolvePropertyRoute({
      name: input.name,
      location: input.location,
      route: input.route,
      slug: input.legacySlug ?? '',
    });
    const legacySlug = input.legacySlug?.trim() || buildLegacyPropertySlug(route);

    const nextItem: ManagedProperty = {
      id,
      slug: legacySlug,
      route,
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

    const nextSnapshot = [...snapshot, nextItem];
    const persistedSnapshot = await persistSnapshotToFile(nextSnapshot);
    commitSnapshot(persistedSnapshot);
    return nextItem;
  }

  async update(id: string, input: CreateManagedPropertyInput) {
    const snapshot = this.list();
    const propertyIndex = snapshot.findIndex((item) => item.id === id);

    if (propertyIndex === -1) {
      return undefined;
    }

    const currentItem = snapshot[propertyIndex];
    const route = resolvePropertyRoute({
      name: input.name,
      location: input.location,
      route: input.route,
      slug: input.legacySlug || currentItem.slug,
    });
    const legacySlug = input.legacySlug?.trim() || buildLegacyPropertySlug(route);
    const nextItem: ManagedProperty = {
      ...currentItem,
      slug: legacySlug,
      route,
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
    const persistedSnapshot = await persistSnapshotToFile(nextSnapshot);
    commitSnapshot(persistedSnapshot);
    return nextItem;
  }

  subscribe(listener: () => void) {
    listeners.add(listener);
    if (!initialSyncStarted && typeof window !== 'undefined') {
      initialSyncStarted = true;
      void this.refresh();
    }
    return () => {
      listeners.delete(listener);
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
