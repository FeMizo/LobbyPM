import type { ManagedProperty } from '../types/properties';

export const propertiesSeed: ManagedProperty[] = [
  {
    id: 'coral-loft',
    slug: 'coral-loft-playa-del-carmen',
    name: 'Coral Loft',
    location: 'Gonzalo Guerrero, Playa del Carmen',
    shortDescription: 'Loft boutique cerca de la Quinta Avenida, ideal para parejas y estancias cortas premium.',
    nightlyRateFrom: 145,
    currency: 'USD',
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    status: 'published',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      alt: 'Loft boutique cerca de la Quinta Avenida en Playa del Carmen',
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        alt: 'Interior de Coral Loft',
      },
    ],
    amenities: [
      { id: 'wifi', label: 'Wifi' },
      { id: 'pool', label: 'Alberca' },
      { id: 'ac', label: 'Aire acondicionado' },
    ],
  },
  {
    id: 'marea-residence',
    slug: 'marea-residence-playacar',
    name: 'Marea Residence',
    location: 'Playacar, Playa del Carmen',
    shortDescription: 'Residencia familiar con plunge pool y acceso rápido a beach clubs, golf y traslados.',
    nightlyRateFrom: 280,
    currency: 'USD',
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    status: 'draft',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      alt: 'Residencia familiar en Playacar',
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        alt: 'Exterior de Marea Residence',
      },
    ],
    amenities: [
      { id: 'pool', label: 'Piscina plunge' },
      { id: 'parking', label: 'Estacionamiento' },
      { id: 'kitchen', label: 'Cocina equipada' },
    ],
  },
];
