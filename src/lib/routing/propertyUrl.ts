import type { ManagedProperty, PropertyRouteSegments } from '../../types/properties';

const FALLBACK_STATE = 'merida';
const FALLBACK_LOCATION = 'centro';
const FALLBACK_SLUG = 'propiedad';

function slugifySegment(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function hasValue(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function parseDisplayLocation(locationText: string) {
  const [locationPart, statePart] = locationText
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);

  if (!locationPart || !statePart) {
    return null;
  }

  return {
    state: slugifySegment(statePart),
    location: slugifySegment(locationPart),
  };
}

function normalizeSegments(segments: Partial<PropertyRouteSegments>) {
  return {
    state: slugifySegment(segments.state || FALLBACK_STATE) || FALLBACK_STATE,
    location: slugifySegment(segments.location || FALLBACK_LOCATION) || FALLBACK_LOCATION,
    slug: slugifySegment(segments.slug || FALLBACK_SLUG) || FALLBACK_SLUG,
  } satisfies PropertyRouteSegments;
}

export function parseLegacyPropertySlug(legacySlug: string): PropertyRouteSegments | null {
  const normalized = slugifySegment(legacySlug);
  if (!normalized) {
    return null;
  }

  const parts = normalized.split('-').filter(Boolean);
  if (parts.length < 3) {
    return null;
  }

  const state = parts.at(-2);
  const location = parts.at(-1);
  const slug = parts.slice(0, -2).join('-');

  if (!state || !location || !slug) {
    return null;
  }

  return normalizeSegments({ state, location, slug });
}

export function buildLegacyPropertySlug(route: PropertyRouteSegments) {
  const normalized = normalizeSegments(route);
  return `${normalized.slug}-${normalized.state}-${normalized.location}`;
}

export function resolvePropertyRoute(property: Partial<ManagedProperty> & { name?: string }) {
  if (property.route && hasValue(property.route.state) && hasValue(property.route.location) && hasValue(property.route.slug)) {
    return normalizeSegments(property.route);
  }

  const parsedLocation = hasValue(property.location) ? parseDisplayLocation(property.location) : null;
  if (parsedLocation && hasValue(property.name)) {
    return normalizeSegments({
      state: parsedLocation.state,
      location: parsedLocation.location,
      slug: property.name,
    });
  }

  if (hasValue(property.slug)) {
    const parsedLegacy = parseLegacyPropertySlug(property.slug);
    if (parsedLegacy) {
      return parsedLegacy;
    }
  }

  return normalizeSegments({
    state: parsedLocation?.state,
    location: parsedLocation?.location,
    slug: property.name,
  });
}

function isRouteSegments(value: unknown): value is PropertyRouteSegments {
  return (
    typeof value === 'object' &&
    value !== null &&
    'state' in value &&
    'location' in value &&
    'slug' in value
  );
}

export function generatePropertyUrl(property: Pick<ManagedProperty, 'route' | 'slug' | 'location' | 'name'> | PropertyRouteSegments) {
  const segments = isRouteSegments(property) ? normalizeSegments(property) : resolvePropertyRoute(property);
  return `/${segments.state}/${segments.location}/${segments.slug}`;
}

export const PROPERTY_ROUTE_TEMPLATE = '/[estado]/[lugar]/[propiedad]';

export function parsePropertyPath(pathname: string): PropertyRouteSegments | null {
  const [state, location, slug] = pathname.split('/').filter(Boolean);
  if (!state || !location || !slug) {
    return null;
  }

  return normalizeSegments({ state, location, slug });
}

export function isPropertyPath(pathname: string) {
  return parsePropertyPath(pathname) !== null;
}
