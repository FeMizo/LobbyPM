import type { ImageAsset } from './homepage';

export type PropertyStatus = 'draft' | 'published';
export type PropertyCurrency = 'USD' | 'MXN';

export interface PropertyAmenity {
  id: string;
  label: string;
}

export interface PropertyExternalLink {
  label: string;
  href: string;
}

export interface ManagedProperty {
  id: string;
  slug: string;
  name: string;
  location: string;
  shortDescription: string;
  nightlyRateFrom: number;
  currency: PropertyCurrency;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  rating: number;
  featured: boolean;
  status: PropertyStatus;
  coverImage: ImageAsset;
  gallery: ImageAsset[];
  amenities: PropertyAmenity[];
  externalAmenities: string[];
  externalLink?: PropertyExternalLink;
}

export interface CreateManagedPropertyInput {
  name: string;
  location: string;
  shortDescription: string;
  nightlyRateFrom: number;
  currency: PropertyCurrency;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  rating: number;
  featured: boolean;
  status: PropertyStatus;
  coverImage: ImageAsset;
  gallery?: ImageAsset[];
  amenities: string[];
  externalAmenities: string[];
  externalLink?: PropertyExternalLink;
}
