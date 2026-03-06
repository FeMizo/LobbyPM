import type { HomepageContent } from '../types/homepage';

export const homepageSeed: HomepageContent = {
  seo: {
    title: 'Luxury vacation rentals in Playa del Carmen | Lobby PM',
    description:
      'Boutique vacation rentals in Playa del Carmen with curated concierge, beach experiences, family stays and premium local recommendations across Riviera Maya.',
    canonicalPath: '/',
    ogImage:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    keywords: [
      'Playa del Carmen vacation rentals',
      'Riviera Maya holiday homes',
      'luxury stays Playa del Carmen',
      'vacation rental management Mexico',
      'Playa del Carmen concierge',
    ],
  },
  site: {
    siteName: 'Lobby PM',
    baseUrl: 'https://lobbypm.com',
    instagram: 'https://www.instagram.com/lobbypm/',
  },
  hero: {
    eyebrow: 'Playa del Carmen hospitality',
    headline: 'Warm, design-led vacation rentals in Playa del Carmen',
    subheadline:
      'Stay near the beach, Fifth Avenue and Riviera Maya experiences with a local team that curates every detail of your arrival, stay and getaway.',
    primaryCta: {
      label: 'Explore stays',
      href: '#properties',
    },
    secondaryCta: {
      label: 'Plan your trip',
      href: '#experiences',
    },
    image: {
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1920&q=80',
      alt: 'Bright premium vacation rental interior in Playa del Carmen with warm hospitality design',
    },
    stats: [
      { value: '20+', label: 'managed homes' },
      { value: '24/7', label: 'guest support' },
      { value: 'Riviera', label: 'local insight' },
    ],
  },
  about: {
    heading: {
      eyebrow: 'About Lobby PM',
      title: 'A warmer way to stay in Playa del Carmen',
      description:
        'We combine premium vacation rental standards with an approachable local team, thoughtful interiors and recommendations that make every stay feel personal.',
    },
    paragraphs: [
      'Lobby PM manages boutique vacation rentals designed for families, couples and remote professionals looking for comfort, privacy and a polished guest experience in Playa del Carmen.',
      'From check-in to concierge planning, we focus on operational consistency, hospitality detail and neighborhood knowledge so guests can enjoy the best of the coast without friction.',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      alt: 'Elegant living area inside a premium Playa del Carmen vacation home',
    },
    stats: [
      { value: '4.9/5', label: 'average guest rating' },
      { value: '1500+', label: 'hosted nights' },
    ],
    cta: {
      label: 'Meet the team',
      href: '#contact',
    },
  },
  featuredProperties: {
    heading: {
      eyebrow: 'Featured stays',
      title: 'Vacation homes curated for beach days, longer stays and effortless arrivals',
      description:
        'Each property is selected for location, comfort and design quality, with fast support and local guidance from our team in Playa del Carmen.',
    },
    cta: {
      label: 'See all properties',
      href: '#contact',
    },
    items: [
      {
        id: 'coral-loft',
        name: 'Coral Loft',
        location: 'Gonzalo Guerrero, Playa del Carmen',
        description:
          'Modern one-bedroom retreat near Fifth Avenue with a rooftop pool, walkable dining and a calm hospitality feel for couples or solo stays.',
        image: {
          src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
          alt: 'Modern loft-style vacation rental in Playa del Carmen',
        },
        price: 'From $145 USD / night',
        rating: 4.9,
        href: '#contact',
      },
      {
        id: 'marea-residence',
        name: 'Marea Residence',
        location: 'Playacar, Playa del Carmen',
        description:
          'Spacious home for families with private plunge pool, shaded terrace and quick access to golf, beach clubs and transfer routes.',
        image: {
          src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
          alt: 'Family vacation residence with pool in Playacar',
        },
        price: 'From $280 USD / night',
        rating: 5,
        href: '#contact',
      },
      {
        id: 'selva-suite',
        name: 'Selva Suite',
        location: 'Aldea Thai, Playa del Carmen',
        description:
          'Premium condo steps from the beach with resort-style amenities, warm finishes and dedicated work-friendly spaces for longer stays.',
        image: {
          src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
          alt: 'Premium condo near the beach in Playa del Carmen',
        },
        price: 'From $190 USD / night',
        rating: 4.8,
        href: '#contact',
      },
      {
        id: 'casa-palma',
        name: 'Casa Palma',
        location: 'Playacar Phase II, Playa del Carmen',
        description:
          'Private villa with indoor-outdoor living, lush garden and concierge-ready layout for groups looking for a polished Riviera Maya base.',
        image: {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          alt: 'Private villa with tropical garden in Playa del Carmen',
        },
        price: 'From $340 USD / night',
        rating: 4.9,
        href: '#contact',
      },
      {
        id: 'azul-studio',
        name: 'Azul Studio',
        location: 'Centro, Playa del Carmen',
        description:
          'Compact boutique stay for short beach escapes, close to cafés, coworking and the rhythm of downtown while staying quiet and refined.',
        image: {
          src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
          alt: 'Boutique studio rental in downtown Playa del Carmen',
        },
        price: 'From $118 USD / night',
        rating: 4.7,
        href: '#contact',
      },
      {
        id: 'oceana-penthouse',
        name: 'Oceana Penthouse',
        location: 'Mamitas Beach, Playa del Carmen',
        description:
          'Top-floor penthouse with private rooftop, ocean breeze and premium finishes tailored to celebratory stays and longer Riviera Maya itineraries.',
        image: {
          src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
          alt: 'Penthouse vacation rental near Mamitas Beach in Playa del Carmen',
        },
        price: 'From $410 USD / night',
        rating: 5,
        href: '#contact',
      },
    ],
  },
  whyChooseUs: {
    heading: {
      eyebrow: 'Why guests book with us',
      title: 'Trusted local operations with a hospitality-first approach',
      description:
        'We manage each stay with the rigor of a premium operator and the warmth of a local host, which keeps guest experience consistent and scalable.',
    },
    cta: {
      label: 'Talk to concierge',
      href: '#contact',
    },
    items: [
      {
        id: 'verified-homes',
        icon: 'home',
        title: 'Verified homes',
        description: 'Every stay is quality-checked for arrival readiness, comfort, amenities and design consistency.',
      },
      {
        id: 'prime-locations',
        icon: 'map-pin',
        title: 'Prime locations',
        description: 'Stay close to the beach, Fifth Avenue, beach clubs and curated local spots across Playa del Carmen.',
      },
      {
        id: 'guest-care',
        icon: 'user-check',
        title: 'Guest support',
        description: 'Our team stays available before arrival, during the stay and for tailored recommendations.',
      },
      {
        id: 'curated-experiences',
        icon: 'sparkles',
        title: 'Curated experiences',
        description: 'We connect guests with activities, transport and local planning that fit the pace of their trip.',
      },
    ],
  },
  experiences: {
    heading: {
      eyebrow: 'Beyond the stay',
      title: 'Experiences, tours and local plans across Riviera Maya',
      description:
        'From beach clubs and cenotes to wellness, dining and family outings, we help guests unlock the best version of Playa del Carmen.',
    },
    cta: {
      label: 'Request concierge help',
      href: '#contact',
    },
    items: [
      {
        id: 'beach-clubs',
        title: 'Beach clubs and seaside days',
        description: 'Reserve effortless oceanfront days with the best match for couples, groups or family itineraries.',
        image: {
          src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
          alt: 'Beach club style experience in Playa del Carmen',
        },
        href: '#contact',
      },
      {
        id: 'cenote-tours',
        title: 'Cenotes and private tours',
        description: 'Plan nature escapes, guided routes and Riviera Maya day trips without coordinating multiple vendors.',
        image: {
          src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
          alt: 'Cenote and adventure tour near Playa del Carmen',
        },
        href: '#contact',
      },
      {
        id: 'dining',
        title: 'Dining and local flavor',
        description: 'Discover warm restaurants, elevated Mexican dining and casual local favorites near your stay.',
        image: {
          src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
          alt: 'Dining experience near Playa del Carmen vacation rental',
        },
        href: '#contact',
      },
      {
        id: 'wellness',
        title: 'Wellness and slow mornings',
        description: 'Add massage, yoga, private chef or in-home touches that make the stay feel truly restorative.',
        image: {
          src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80',
          alt: 'Wellness and relaxation experience in Riviera Maya',
        },
        href: '#contact',
      },
    ],
    concierge: {
      title: 'Need something tailored to your group or stay length?',
      description:
        'Our internal team can later evolve into a full CMS-driven concierge workflow, but this first layer already centralizes the messaging and calls to action for the homepage.',
      imageGrid: [
        {
          src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80',
          alt: 'Ocean view near Playa del Carmen',
        },
        {
          src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
          alt: 'Resort-style pool lounge area',
        },
        {
          src: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=600&q=80',
          alt: 'Tropical green scenery in Riviera Maya',
        },
        {
          src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
          alt: 'Outdoor dining and hospitality setup',
        },
      ],
      cta: {
        label: 'Start planning',
        href: '#contact',
      },
    },
  },
  contact: {
    heading: {
      eyebrow: 'Speak with the team',
      title: 'Planning support for stays, arrivals and guest requests',
      description:
        'Whether you need a property recommendation, transport coordination or a custom experience plan, the team can help you shape the right stay.',
    },
    description:
      'This section remains intentionally simple for now. It keeps commercial contact visible while the future dashboard grows into full guest inquiries, property management and media workflows.',
    phonePrimary: '+52 984 218 4021',
    phoneSecondary: '+52 984 153 8804',
    phonePrimaryHref: 'https://wa.me/529842184021',
    phoneSecondaryHref: 'https://wa.me/529841538804',
    email: 'stay@lobbypm.com',
    address: 'Playa del Carmen, Quintana Roo, Mexico',
  },
  testimonials: {
    heading: {
      eyebrow: 'Guest feedback',
      title: 'What guests value most about staying with Lobby PM',
      description:
        'Clean arrivals, thoughtful support and reliable communication are what keep repeat guests booking through our team.',
    },
    items: [
      {
        id: 'sarah',
        name: 'Sarah Johnson',
        location: 'Austin, Texas',
        text: 'The apartment felt exactly as curated as the photos, and the team helped us organize airport transfer, groceries and a last-minute beach club reservation.',
      },
      {
        id: 'michael',
        name: 'Michael Chen',
        location: 'Toronto, Canada',
        text: 'Fast communication, smooth check-in and a much warmer hospitality style than a typical rental. It felt managed, but still personal.',
      },
      {
        id: 'laura',
        name: 'Laura Rivera',
        location: 'Monterrey, Mexico',
        text: 'We booked for a family trip and everything was ready on arrival. The recommendations around Playa del Carmen saved us hours of planning.',
      },
    ],
  },
  gallery: {
    heading: {
      eyebrow: 'Visual inspiration',
      title: 'The warm, coastal feel behind the Lobby PM brand',
      description:
        'A gallery-driven section still helps support conversion, but it now loads later and uses lighter image behavior to protect homepage performance.',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
        alt: 'Premium vacation rental bedroom in Playa del Carmen',
      },
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
        alt: 'Open living room with warm design details',
      },
      {
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
        alt: 'Tropical patio and pool area in Riviera Maya rental',
      },
      {
        src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
        alt: 'Boutique kitchen and dining space',
      },
      {
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
        alt: 'Penthouse bedroom with premium hospitality styling',
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        alt: 'Outdoor tropical villa and private pool',
      },
    ],
  },
  finalCta: {
    title: 'Ready to shape your Playa del Carmen stay?',
    text: 'Book a boutique vacation rental, ask for local guidance or let our team help build a smoother Riviera Maya itinerary.',
    button: {
      label: 'Contact Lobby PM',
      href: '#contact',
    },
    image: {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
      alt: 'Golden hour beach near Playa del Carmen',
    },
  },
};
