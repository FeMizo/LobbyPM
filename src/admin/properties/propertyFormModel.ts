import type {
  CreateManagedPropertyInput,
  ManagedProperty,
  PropertyCurrency,
  PropertyStatus,
} from '../../types/properties';

export interface PropertyFormValues {
  name: string;
  location: string;
  shortDescription: string;
  nightlyRateFrom: string;
  currency: PropertyCurrency;
  bedrooms: string;
  bathrooms: string;
  guests: string;
  rating: string;
  status: PropertyStatus;
  featured: boolean;
  coverImageSrc: string;
  coverImageAlt: string;
  gallerySources: string;
  amenities: string;
  externalAmenities: string;
  externalLinkLabel: string;
  externalLinkHref: string;
}

const defaultPropertyFormValues: PropertyFormValues = {
  name: '',
  location: 'Centro, Merida, Yucatan',
  shortDescription: '',
  nightlyRateFrom: '3500',
  currency: 'MXN',
  bedrooms: '2',
  bathrooms: '2',
  guests: '4',
  rating: '4.9',
  status: 'published',
  featured: true,
  coverImageSrc:
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  coverImageAlt: 'Propiedad boutique en Merida',
  gallerySources:
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  amenities: 'Wifi, Piscina, Aire acondicionado, Cocina equipada',
  externalAmenities: 'Zona caminable, Restaurantes cercanos, Sitios culturales',
  externalLinkLabel: 'Ver en Airbnb',
  externalLinkHref: '',
};

function parseNumber(value: string, fallback: number) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseList(value: string) {
  return value
    .split(/[\n,]/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

function serializeList(items: string[]) {
  return items.join(', ');
}

function parseGallery(sources: string, fallbackAlt: string) {
  const gallerySources = parseList(sources);
  return gallerySources.map((src, index) => ({
    src,
    alt: `${fallbackAlt} ${index + 1}`.trim(),
  }));
}

export function getInitialPropertyFormValues(): PropertyFormValues {
  return { ...defaultPropertyFormValues };
}

export function toPropertyFormValues(property: ManagedProperty): PropertyFormValues {
  return {
    name: property.name,
    location: property.location,
    shortDescription: property.shortDescription,
    nightlyRateFrom: String(property.nightlyRateFrom),
    currency: property.currency,
    bedrooms: String(property.bedrooms),
    bathrooms: String(property.bathrooms),
    guests: String(property.guests),
    rating: String(property.rating),
    status: property.status,
    featured: property.featured,
    coverImageSrc: property.coverImage.src,
    coverImageAlt: property.coverImage.alt,
    gallerySources: property.gallery.map((item) => item.src).join('\n'),
    amenities: serializeList(property.amenities.map((item) => item.label)),
    externalAmenities: serializeList(property.externalAmenities),
    externalLinkLabel: property.externalLink?.label ?? 'Ver disponibilidad',
    externalLinkHref: property.externalLink?.href ?? '',
  };
}

export function toCreateManagedPropertyInput(values: PropertyFormValues): CreateManagedPropertyInput {
  const name = values.name.trim();
  const location = values.location.trim();
  const shortDescription = values.shortDescription.trim();
  const coverImageSrc = values.coverImageSrc.trim();
  const coverImageAlt = values.coverImageAlt.trim() || `Imagen de ${name}`;
  const gallery = parseGallery(values.gallerySources, coverImageAlt);
  const externalLinkHref = values.externalLinkHref.trim();

  return {
    name,
    location,
    shortDescription,
    nightlyRateFrom: parseNumber(values.nightlyRateFrom, 0),
    currency: values.currency,
    bedrooms: parseNumber(values.bedrooms, 1),
    bathrooms: parseNumber(values.bathrooms, 1),
    guests: parseNumber(values.guests, 2),
    rating: parseNumber(values.rating, 4.8),
    featured: values.featured,
    status: values.status,
    coverImage: {
      src: coverImageSrc,
      alt: coverImageAlt,
    },
    gallery: gallery.length > 0 ? gallery : [{ src: coverImageSrc, alt: coverImageAlt }],
    amenities: parseList(values.amenities),
    externalAmenities: parseList(values.externalAmenities),
    externalLink: externalLinkHref
      ? {
          label: values.externalLinkLabel.trim() || 'Ver disponibilidad',
          href: externalLinkHref,
        }
      : undefined,
  };
}
