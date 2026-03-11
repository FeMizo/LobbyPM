import type { PropertySummary } from '../../types/homepage';
import type { ManagedProperty } from '../../types/properties';
import { generatePropertyUrl } from '../routing/propertyUrl';

function formatNightlyRate(currency: ManagedProperty['currency'], amount: number) {
  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  });

  return formatter.format(amount);
}

export function mapManagedPropertyToSummary(property: ManagedProperty): PropertySummary {
  return {
    id: property.id,
    name: property.name,
    location: property.location,
    description: property.shortDescription,
    image: property.coverImage,
    price: `${formatNightlyRate(property.currency, property.nightlyRateFrom)} por noche`,
    rating: property.rating,
    href: generatePropertyUrl(property),
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    guests: property.guests,
    amenities: property.amenities.map((item) => item.label),
    externalAmenities: property.externalAmenities,
    externalLink: property.externalLink,
  };
}

export function mapManagedPropertiesToFeatured(properties: ManagedProperty[]) {
  const featuredPublished = properties.filter((item) => item.status === 'published' && item.featured);
  const published = properties.filter((item) => item.status === 'published');
  const source = featuredPublished.length > 0 ? featuredPublished : published.length > 0 ? published : properties;

  return source.map(mapManagedPropertyToSummary);
}
