import type { ImageAsset } from './homepage';

export type PropertyStatus = 'draft' | 'published';

export interface PropertyAmenity {
  id: string;
  label: string;
}

export interface ManagedProperty {
  id: string;
  slug: string;
  name: string;
  location: string;
  shortDescription: string;
  nightlyRateFrom: number;
  currency: 'USD' | 'MXN';
  bedrooms: number;
  bathrooms: number;
  guests: number;
  status: PropertyStatus;
  coverImage: ImageAsset;
  gallery: ImageAsset[];
  amenities: PropertyAmenity[];
}
