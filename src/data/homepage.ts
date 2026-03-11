import type { HomepageContent } from '../types/homepage';

export const homepageSeed: HomepageContent = {
  seo: {
    title: 'Rentas vacacionales en Mérida, Yucatán | Lobby PM',
    description:
      'Rentas vacacionales boutique en Mérida, Yucatán con atención personalizada, experiencias locales y estancias premium en Riviera Maya.',
    canonicalPath: '/',
    ogImage:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    keywords: [
      'rentas vacacionales Mérida, Yucatán',
      'casas vacacionales Riviera Maya',
      'estancias premium Mérida, Yucatán',
      'property management Mérida, Yucatán',
      'concierge Mérida, Yucatán',
    ],
  },
  site: {
    siteName: 'Lobby PM',
    baseUrl: 'https://lobbypm.com',
    instagram: 'https://www.instagram.com/lobbypm/',
  },
  hero: {
    eyebrow: 'Hospitality en Mérida, Yucatán',
    headline: 'Rentas vacacionales cálidas, premium y bien ubicadas en Mérida, Yucatán',
    subheadline:
      'Hospédate cerca de la playa, la Quinta Avenida y las mejores experiencias de Riviera Maya con un equipo local que cuida cada detalle de tu llegada y estancia.',
    primaryCta: {
      label: 'Ver propiedades',
      href: '#properties',
    },
    secondaryCta: {
      label: 'Explorar experiencias',
      href: '#experiences',
    },
    image: {
      src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1920&q=80',
      alt: 'Interior de renta vacacional premium en Mérida, Yucatán con diseño cálido y acogedor',
    },
    stats: [
      { value: '20+', label: 'propiedades gestionadas' },
      { value: '24/7', label: 'atención a huéspedes' },
      { value: 'Riviera', label: 'conocimiento local' },
    ],
  },
  about: {
    heading: {
      eyebrow: 'Sobre Lobby PM',
      title: 'Gestión boutique de propiedades en el centro de Mérida, Yucatán',
      description:
        'Combinamos operación profesional, hospitalidad local y mantenimiento especializado para casas coloniales y propiedades contemporáneas en Mérida.',
    },
    paragraphs: [
      'Fundada en 2021, Lobby Property Management nació para dar tranquilidad a propietarios y huéspedes con una operación integral de hospedaje, mantenimiento y servicio local.',
      'Nuestro equipo entiende las necesidades del Centro Histórico de Mérida: clima, arquitectura de mampostería y mantenimiento preventivo para que cada estancia sea cómoda, consistente y rentable.',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      alt: 'Sala elegante dentro de una propiedad vacacional premium en Mérida, Yucatán',
    },
    stats: [
      { value: '4.9/5', label: 'calificación promedio' },
      { value: '1500+', label: 'noches hospedadas' },
    ],
    cta: {
      label: 'Habla con el equipo',
      href: '#contact',
    },
  },
  featuredProperties: {
    heading: {
      eyebrow: 'Propiedades destacadas',
      title: 'Casas y estancias seleccionadas en Mérida para vivir la ciudad con comodidad',
      description:
        'Seleccionamos propiedades por diseño, ubicación y experiencia total: desde la llegada hasta recomendaciones locales y soporte cercano.',
    },
    cta: {
      label: 'Ver todas las propiedades',
      href: '#contact',
    },
    items: [
      {
        id: 'casa-allegra',
        name: 'Casa Allegra',
        location: 'Centro, Mérida, Yucatán',
        description:
          'Casa restaurada que mezcla historia y diseño contemporáneo. Sala cómoda, cocina equipada, barra de mármol, terraza y piscina con arco de piedra.',
        image: {
          src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
          alt: 'Casa Allegra en Mérida con interior premium y piscina',
        },
        price: 'Tarifa variable por temporada',
        rating: 4.9,
        href: '#contact',
        bedrooms: 2,
        bathrooms: 2,
        guests: 4,
        amenities: ['Piscina privada', 'Cocina equipada', 'Aire acondicionado', 'Wifi'],
        externalAmenities: ['A pasos de Paseo de Montejo', 'Restaurantes y cafés cercanos', 'Zona cultural caminable'],
        externalLink: {
          label: 'Ver en Airbnb',
          href: 'https://www.airbnb.mx/rooms/51852967?preview_for_ml=true&source_impression_id=p3_1683845280_ym8pTpjmepQ6%2Bscp',
        },
      },
      {
        id: 'casa-del-arco',
        name: 'Casa del Arco',
        location: 'Centro, Mérida, Yucatán',
        description:
          'Casa remodelada con arquitectura moderna, entorno verde y piscina con acabado en piedra. Ideal para descubrir Mérida desde una ubicación central.',
        image: {
          src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
          alt: 'Casa del Arco en Mérida con diseño moderno y piscina',
        },
        price: 'Tarifa variable por temporada',
        rating: 4.8,
        href: '#contact',
        bedrooms: 2,
        bathrooms: 2,
        guests: 4,
        amenities: ['Piscina privada', 'Interior remodelado', 'Cocina equipada', 'Aire acondicionado'],
        externalAmenities: ['Cercanía a Paseo de Montejo', 'Restaurantes locales', 'Zona histórica'],
        externalLink: {
          label: 'Ver en Airbnb',
          href: 'https://www.airbnb.mx/rooms/46676366?guests=1&adults=1&s=67&unique_share_id=a4eb5944-221a-474a-9f8d-2362eb3a4660',
        },
      },
      {
        id: 'casa-el-remanso',
        name: 'Casa El Remanso',
        location: 'Centro, Mérida, Yucatán',
        description:
          'Auténtica casa colonial de una planta, techos altos, terraza amplia y piscina refrescante. Un espacio pensado para descansar y reconectar.',
        image: {
          src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
          alt: 'Casa El Remanso en Mérida con arquitectura colonial y terraza',
        },
        price: 'Tarifa variable por temporada',
        rating: 4.8,
        href: '#contact',
        bedrooms: 3,
        bathrooms: 3,
        guests: 6,
        amenities: ['Piscina privada', 'Cocina amplia equipada', 'Lavadora/Secadora', 'Smart TV'],
        externalAmenities: ['Centro Histórico a minutos', 'Cafés y mercados locales', 'Zona tranquila'],
        externalLink: {
          label: 'Ver en Airbnb',
          href: 'https://www.airbnb.mx/rooms/1279277939525437749?guests=1&adults=1&s=67&unique_share_id=a0ed782c-2cc3-4879-94c5-73aa1715cea0',
        },
      },
      {
        id: 'casa-kan',
        name: 'Casa Kan',
        location: 'Zona Paseo de Montejo, Mérida',
        description:
          'Casa renovada a pasos de Paseo de Montejo con interior curado, acabados artesanales y una atmósfera pensada para una estancia tranquila y elegante.',
        image: {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          alt: 'Casa Kan en Mérida con diseño contemporáneo y detalles artesanales',
        },
        price: 'Tarifa variable por temporada',
        rating: 4.9,
        href: '#contact',
        bedrooms: 2,
        bathrooms: 2,
        guests: 4,
        amenities: ['Interior de diseño', 'Cocina equipada', 'Wifi', 'Aire acondicionado'],
        externalAmenities: ['Museos y cafés cercanos', 'Paseo de Montejo caminable', 'Servicios a pocos minutos'],
        externalLink: {
          label: 'Ver en Airbnb',
          href: 'https://www.airbnb.mx/rooms/51840106?preview_for_ml=true&source_impression_id=p3_1683845434_2FKJGMKzazGvSX%2FP',
        },
      },
      {
        id: 'casa-cocol',
        name: 'Casa Cocol',
        location: 'Centro, Mérida, Yucatán',
        description:
          'Casa recién renovada en calle tranquila, cerca del mercado de Santiago. Dos habitaciones, 2.5 baños y área social abierta con terraza y piscina.',
        image: {
          src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
          alt: 'Casa Cocol en Mérida con terraza y piscina privada',
        },
        price: 'Tarifa variable por temporada',
        rating: 4.9,
        href: '#contact',
        bedrooms: 2,
        bathrooms: 2.5,
        guests: 4,
        amenities: ['Piscina privada', 'Cocina abierta', 'Comedor interior-exterior', 'Wifi'],
        externalAmenities: ['Mercado de Santiago cerca', 'Galerías y restaurantes', 'Centro histórico'],
        externalLink: {
          label: 'Ver en Airbnb',
          href: 'https://www.airbnb.mx/rooms/51708519?guests=1&adults=1&s=67&unique_share_id=79dd7463-bb28-42d6-88b1-5393ee5eb28e',
        },
      },
      {
        id: 'casa-yaakun',
        name: 'Casa Yaakun',
        location: 'Centro, Mérida, Yucatán',
        description:
          'Casa amplia ideal para familias o grupos. Incluye 4 habitaciones, piscina, dos cocinas equipadas y energía solar para una estancia cómoda y responsable.',
        image: {
          src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
          alt: 'Casa Yaakun en Mérida con espacios amplios para grupos',
        },
        price: 'Tarifa variable por temporada',
        rating: 5,
        href: '#contact',
        bedrooms: 4,
        bathrooms: 3,
        guests: 10,
        amenities: ['Piscina', '2 cocinas equipadas', 'Lavadora y secadora', 'Energía solar'],
        externalAmenities: ['Centro Histórico cercano', 'Transporte accesible', 'Restaurantes y experiencias'],
        externalLink: {
          label: 'Ver en Airbnb',
          href: 'https://www.airbnb.mx/rooms/53795749?guests=1&adults=1&s=67&unique_share_id=a6af4c29-176a-4e25-89b6-1da2d8859154',
        },
      },
    ],
  },
  whyChooseUs: {
    heading: {
      eyebrow: 'Por qué nos eligen',
      title: 'Operación local confiable con enfoque total en hospitalidad',
      description:
        'Gestionamos cada estancia con el rigor de una operación premium y la calidez de un anfitrión local, creando una experiencia consistente y escalable.',
    },
    cta: {
      label: 'Hablar con concierge',
      href: '#contact',
    },
    items: [
      {
        id: 'verified-homes',
        icon: 'home',
        title: 'Casas verificadas',
        description: 'Cada propiedad se revisa para asegurar llegada lista, confort, amenidades y consistencia visual.',
      },
      {
        id: 'prime-locations',
        icon: 'map-pin',
        title: 'Ubicaciones premium',
        description: 'Hospédate cerca de la playa, la Quinta Avenida, beach clubs y puntos clave de Mérida, Yucatán.',
      },
      {
        id: 'guest-care',
        icon: 'user-check',
        title: 'Atención al huésped',
        description: 'Nuestro equipo acompaña antes de llegar, durante la estancia y en recomendaciones personalizadas.',
      },
      {
        id: 'curated-experiences',
        icon: 'sparkles',
        title: 'Experiencias curadas',
        description: 'Conectamos a cada huésped con actividades, transporte y planeación local acorde a su viaje.',
      },
    ],
  },
  experiences: {
    heading: {
      eyebrow: 'Guias / Guides',
      title: 'Más allá del hospedaje: recomendaciones útiles para moverte y disfrutar Mérida',
      description:
        'Curamos guías prácticas para que tengas a la mano lugares para comer, tours, vida nocturna y compras esenciales durante tu estancia.',
    },
    cta: {
      label: 'Abrir guía recomendada',
      href: 'https://www.airbnb.mx/s/guidebooks?refinement_paths%5B%5D=%2Fguidebooks%2F3061527&s=67&unique_share_id=16c0965c-4d9d-494d-99f3-03fa98c84b64',
    },
    items: [
      {
        id: 'yumi-yumi',
        title: 'Yumi Yumi / Food Guide',
        description: 'Selección de restaurantes, desayunos, cafés y spots locales para comer bien cerca de tu propiedad.',
        image: {
          src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
          alt: 'Guía de restaurantes y cafés en Mérida',
        },
        href: 'https://www.airbnb.mx/s/guidebooks?refinement_paths%5B%5D=%2Fguidebooks%2F3061527&s=67&unique_share_id=16c0965c-4d9d-494d-99f3-03fa98c84b64',
      },
      {
        id: 'tours',
        title: 'Tours',
        description: 'Rutas y experiencias para conocer lo mejor de Mérida y sus alrededores sin perder tiempo organizando.',
        image: {
          src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
          alt: 'Guía de tours y experiencias en Mérida',
        },
        href: 'https://www.airbnb.mx/s/guidebooks?refinement_paths%5B%5D=%2Fguidebooks%2F3061600&s=67&unique_share_id=d75ad339-9830-4efc-959f-6eb607a6c72e',
      },
      {
        id: 'nightlife',
        title: 'Vida Nocturna / Nightlife',
        description: 'Bares, terrazas y planes nocturnos recomendados para salir con seguridad y buen ambiente.',
        image: {
          src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
          alt: 'Guía de vida nocturna en Mérida',
        },
        href: 'https://www.airbnb.mx/s/guidebooks?refinement_paths%5B%5D=%2Fguidebooks%2F3061541&s=67&unique_share_id=684d6434-5c2a-4e07-84c2-b117191f85a4',
      },
      {
        id: 'groceries',
        title: 'Supermercados / Essentials',
        description: 'Opciones prácticas para compras rápidas, despensa y básicos durante tu estancia.',
        image: {
          src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80',
          alt: 'Guía de supermercados y compras básicas en Mérida',
        },
        href: 'https://www.airbnb.mx/s/guidebooks?refinement_paths%5B%5D=%2Fguidebooks%2F3061571&s=67&unique_share_id=69cc7c88-e10e-4b01-a60e-1072ec59b16c',
      },
    ],
    concierge: {
      title: '¿Necesitas una recomendación más personalizada para tu viaje?',
      description:
        'Además de estas guías, nuestro equipo puede ayudarte con itinerarios, reservas y logística para que disfrutes Mérida sin fricción.',
      imageGrid: [
        {
          src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80',
          alt: 'Vista al mar cerca de Mérida, Yucatán',
        },
        {
          src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
          alt: 'Área de alberca estilo resort',
        },
        {
          src: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=600&q=80',
          alt: 'Entorno tropical en Riviera Maya',
        },
        {
          src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
          alt: 'Montaje de hospitalidad y comida al aire libre',
        },
      ],
      cta: {
        label: 'Hablar con concierge',
        href: 'https://wa.me/529993900289',
      },
    },
  },
  contact: {
    heading: {
      eyebrow: 'Habla con el equipo',
      title: 'Apoyo para elegir estancia, coordinar llegada y resolver solicitudes',
      description:
        'Ya sea que necesites una recomendación de propiedad, coordinar transporte o armar un plan personalizado, el equipo puede ayudarte.',
    },
    description:
      'Esta sección se mantiene simple por ahora. Hace visible el contacto comercial mientras el dashboard crece hacia flujos completos de huéspedes, propiedades y media.',
    phonePrimary: '+52 999 390 0289',
    phoneSecondary: '+52 999 614 2180',
    phonePrimaryHref: 'https://wa.me/529993900289',
    phoneSecondaryHref: 'https://wa.me/529996142180',
    email: 'stay@lobbypm.com',
    address: 'Mérida, Yucatán, México',
  },
  testimonials: {
    heading: {
      eyebrow: 'Lo que dicen los huéspedes',
      title: 'Lo que más valoran al hospedarse con Lobby PM',
      description:
        'Llegadas bien preparadas, atención cercana y comunicación clara son parte de lo que hace que los huéspedes vuelvan a reservar con nosotros.',
    },
    items: [
      {
        id: 'sarah',
        name: 'Sarah Johnson',
        location: 'Austin, Texas',
        text: 'El departamento se sentía tan bien cuidado como en las fotos, y el equipo nos ayudó con traslado, supermercado y una reserva de beach club de último momento.',
      },
      {
        id: 'michael',
        name: 'Michael Chen',
        location: 'Toronto, Canadá',
        text: 'La comunicación fue rápida, el check-in muy fluido y la hospitalidad mucho más cálida que en una renta típica. Se siente profesional, pero cercana.',
      },
      {
        id: 'laura',
        name: 'Laura Rivera',
        location: 'Monterrey, México',
        text: 'Reservamos para un viaje familiar y todo estaba listo al llegar. Las recomendaciones en Mérida, Yucatán nos ahorraron horas de planeación.',
      },
    ],
  },
  gallery: {
    heading: {
      eyebrow: 'Inspiración visual',
      title: 'La atmósfera cálida y costera detrás de Lobby PM',
      description:
        'La galería sigue aportando a la conversión, pero ahora carga después y con un comportamiento de imágenes más ligero para proteger performance.',
    },
    images: [
      {
        src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
        alt: 'Recámara premium en una renta vacacional de Mérida, Yucatán',
      },
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
        alt: 'Sala abierta con detalles de diseño cálido',
      },
      {
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
        alt: 'Patio tropical y alberca en una renta de Riviera Maya',
      },
      {
        src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
        alt: 'Cocina y comedor con estilo boutique',
      },
      {
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
        alt: 'Recámara de penthouse con estilo premium',
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        alt: 'Villa tropical exterior con alberca privada',
      },
    ],
  },
  finalCta: {
    title: '¿Listo para planear tu estancia en Mérida, Yucatán?',
    text: 'Reserva una propiedad boutique, recibe recomendaciones locales o deja que nuestro equipo te ayude a construir un mejor itinerario en Riviera Maya.',
    button: {
      label: 'Contactar a Lobby PM',
      href: '#contact',
    },
    image: {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
      alt: 'Playa al atardecer cerca de Mérida, Yucatán',
    },
  },
};
