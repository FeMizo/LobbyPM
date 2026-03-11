import type { ManagedProperty } from '../types/properties';

export const propertiesSeed: ManagedProperty[] = [
  {
    id: 'casa-allegra',
    slug: 'casa-allegra-merida-centro',
    route: {
      state: 'merida',
      location: 'centro',
      slug: 'casa-allegra',
    },
    name: 'Casa Allegra',
    location: 'Centro, Merida, Yucatan',
    shortDescription:
      'Casa restaurada que combina historia y diseno contemporaneo, con piscina privada y distribucion ideal para parejas o familias pequenas.',
    nightlyRateFrom: 2800,
    currency: 'MXN',
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    rating: 4.9,
    featured: true,
    status: 'published',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      alt: 'Casa Allegra en Merida con interior premium y piscina',
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        alt: 'Interior de Casa Allegra',
      },
    ],
    amenities: [
      { id: 'wifi', label: 'Wifi' },
      { id: 'pool', label: 'Alberca' },
      { id: 'ac', label: 'Aire acondicionado' },
      { id: 'kitchen', label: 'Cocina equipada' },
    ],
    externalAmenities: ['A pasos de Paseo de Montejo', 'Zona cultural caminable', 'Restaurantes y cafes cercanos'],
    externalLink: {
      label: 'Ver en Airbnb',
      href: 'https://www.airbnb.mx/rooms/51852967?preview_for_ml=true&source_impression_id=p3_1683845280_ym8pTpjmepQ6%2Bscp',
    },
  },
  {
    id: 'casa-cocol',
    slug: 'casa-cocol-merida-centro',
    route: {
      state: 'merida',
      location: 'centro',
      slug: 'casa-cocol',
    },
    name: 'Casa Cocol',
    location: 'Centro, Merida, Yucatan',
    shortDescription:
      'Casa renovada en calle tranquila cerca del mercado de Santiago, con terraza, piscina y espacios sociales abiertos llenos de luz.',
    nightlyRateFrom: 3200,
    currency: 'MXN',
    bedrooms: 2,
    bathrooms: 3,
    guests: 4,
    rating: 4.8,
    featured: true,
    status: 'published',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      alt: 'Casa Cocol en Merida con terraza y piscina',
    },
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        alt: 'Exterior de Casa Cocol',
      },
    ],
    amenities: [
      { id: 'pool', label: 'Piscina privada' },
      { id: 'kitchen', label: 'Cocina equipada' },
      { id: 'laundry', label: 'Lavadora/Secadora' },
      { id: 'wifi', label: 'Wifi' },
    ],
    externalAmenities: ['Mercado de Santiago cercano', 'Calles tranquilas', 'Zona historica caminable'],
    externalLink: {
      label: 'Ver en Airbnb',
      href: 'https://www.airbnb.mx/rooms/51708519?guests=1&adults=1&s=67&unique_share_id=79dd7463-bb28-42d6-88b1-5393ee5eb28e',
    },
  },
];
