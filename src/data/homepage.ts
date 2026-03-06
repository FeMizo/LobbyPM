import type { HomepageContent } from '../types/homepage';

export const homepageSeed: HomepageContent = {
  seo: {
    title: 'Rentas vacacionales en Playa del Carmen | Lobby PM',
    description:
      'Rentas vacacionales boutique en Playa del Carmen con atención personalizada, experiencias locales y estancias premium en Riviera Maya.',
    canonicalPath: '/',
    ogImage:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    keywords: [
      'rentas vacacionales Playa del Carmen',
      'casas vacacionales Riviera Maya',
      'estancias premium Playa del Carmen',
      'property management Playa del Carmen',
      'concierge Playa del Carmen',
    ],
  },
  site: {
    siteName: 'Lobby PM',
    baseUrl: 'https://lobbypm.com',
    instagram: 'https://www.instagram.com/lobbypm/',
  },
  hero: {
    eyebrow: 'Hospitality en Playa del Carmen',
    headline: 'Rentas vacacionales cálidas, premium y bien ubicadas en Playa del Carmen',
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
      alt: 'Interior de renta vacacional premium en Playa del Carmen con diseño cálido y acogedor',
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
      title: 'Una forma más cálida de hospedarte en Playa del Carmen',
      description:
        'Combinamos estándares premium de renta vacacional con una operación cercana, interiores cuidados y recomendaciones que hacen cada estancia más personal.',
    },
    paragraphs: [
      'Lobby PM administra rentas vacacionales boutique pensadas para familias, parejas y viajeros que buscan comodidad, privacidad y una experiencia bien resuelta en Playa del Carmen.',
      'Desde el check-in hasta la planeación de concierge, cuidamos la operación, los detalles de hospitalidad y el conocimiento del destino para que cada estancia fluya sin fricción.',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      alt: 'Sala elegante dentro de una propiedad vacacional premium en Playa del Carmen',
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
      title: 'Estancias seleccionadas para escapadas de playa, viajes largos y llegadas sin complicaciones',
      description:
        'Cada propiedad se selecciona por ubicación, confort y calidad de diseño, con soporte ágil y atención local de nuestro equipo en Playa del Carmen.',
    },
    cta: {
      label: 'Ver todas las propiedades',
      href: '#contact',
    },
    items: [
      {
        id: 'coral-loft',
        name: 'Coral Loft',
        location: 'Gonzalo Guerrero, Playa del Carmen',
        description:
          'Refugio moderno de una recámara cerca de la Quinta Avenida, con rooftop pool, restaurantes a distancia caminable y una atmósfera tranquila.',
        image: {
          src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
          alt: 'Loft moderno de renta vacacional en Playa del Carmen',
        },
        price: 'Desde $145 USD por noche',
        rating: 4.9,
        href: '#contact',
      },
      {
        id: 'marea-residence',
        name: 'Marea Residence',
        location: 'Playacar, Playa del Carmen',
        description:
          'Casa espaciosa para familias con plunge pool privada, terraza sombreada y acceso rápido a beach clubs, golf y traslados.',
        image: {
          src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
          alt: 'Residencia vacacional familiar con alberca en Playacar',
        },
        price: 'Desde $280 USD por noche',
        rating: 5,
        href: '#contact',
      },
      {
        id: 'selva-suite',
        name: 'Selva Suite',
        location: 'Aldea Thai, Playa del Carmen',
        description:
          'Condo premium a pasos de la playa con amenidades estilo resort, acabados cálidos y espacios cómodos para estancias largas.',
        image: {
          src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
          alt: 'Condominio premium cerca de la playa en Playa del Carmen',
        },
        price: 'Desde $190 USD por noche',
        rating: 4.8,
        href: '#contact',
      },
      {
        id: 'casa-palma',
        name: 'Casa Palma',
        location: 'Playacar Phase II, Playa del Carmen',
        description:
          'Villa privada con vida interior-exterior, jardín tropical y layout ideal para grupos que buscan una base premium en Riviera Maya.',
        image: {
          src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          alt: 'Villa privada con jardín tropical en Playa del Carmen',
        },
        price: 'Desde $340 USD por noche',
        rating: 4.9,
        href: '#contact',
      },
      {
        id: 'azul-studio',
        name: 'Azul Studio',
        location: 'Centro, Playa del Carmen',
        description:
          'Estancia boutique compacta para escapadas de playa, cerca de cafés, coworking y el ritmo del centro, sin perder calma ni confort.',
        image: {
          src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
          alt: 'Estudio boutique en el centro de Playa del Carmen',
        },
        price: 'Desde $118 USD por noche',
        rating: 4.7,
        href: '#contact',
      },
      {
        id: 'oceana-penthouse',
        name: 'Oceana Penthouse',
        location: 'Mamitas Beach, Playa del Carmen',
        description:
          'Penthouse con rooftop privado, brisa del mar y acabados premium, ideal para viajes especiales o itinerarios largos en Riviera Maya.',
        image: {
          src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
          alt: 'Penthouse vacacional cerca de Mamitas Beach en Playa del Carmen',
        },
        price: 'Desde $410 USD por noche',
        rating: 5,
        href: '#contact',
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
        description: 'Hospédate cerca de la playa, la Quinta Avenida, beach clubs y puntos clave de Playa del Carmen.',
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
      eyebrow: 'Más allá del hospedaje',
      title: 'Experiencias, tours y planes locales en toda Riviera Maya',
      description:
        'Desde beach clubs y cenotes hasta bienestar, gastronomía y planes familiares, ayudamos a vivir la mejor versión de Playa del Carmen.',
    },
    cta: {
      label: 'Solicitar ayuda de concierge',
      href: '#contact',
    },
    items: [
      {
        id: 'beach-clubs',
        title: 'Beach clubs y días de mar',
        description: 'Reserva días frente al mar con opciones ideales para parejas, grupos o itinerarios familiares.',
        image: {
          src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
          alt: 'Experiencia de beach club en Playa del Carmen',
        },
        href: '#contact',
      },
      {
        id: 'cenote-tours',
        title: 'Cenotes y tours privados',
        description: 'Planea escapadas naturales, rutas guiadas y day trips por Riviera Maya sin coordinar múltiples proveedores.',
        image: {
          src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
          alt: 'Tour de cenotes y aventura cerca de Playa del Carmen',
        },
        href: '#contact',
      },
      {
        id: 'dining',
        title: 'Gastronomía y sabor local',
        description: 'Descubre restaurantes con atmósfera cálida, cocina mexicana elevada y favoritos locales cerca de tu estancia.',
        image: {
          src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
          alt: 'Experiencia gastronómica cerca de una renta vacacional en Playa del Carmen',
        },
        href: '#contact',
      },
      {
        id: 'wellness',
        title: 'Bienestar y mañanas lentas',
        description: 'Suma masaje, yoga, chef privado o detalles en casa que vuelven la estancia mucho más restauradora.',
        image: {
          src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80',
          alt: 'Experiencia de bienestar y relajación en Riviera Maya',
        },
        href: '#contact',
      },
    ],
    concierge: {
      title: '¿Buscas algo adaptado a tu grupo o al tipo de viaje?',
      description:
        'Nuestro equipo puede ayudarte a aterrizar una propuesta más personalizada. Esta primera capa ya centraliza mensajes y llamadas a la acción del homepage para luego crecer hacia un flujo completo.',
      imageGrid: [
        {
          src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80',
          alt: 'Vista al mar cerca de Playa del Carmen',
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
        label: 'Empezar a planear',
        href: '#contact',
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
    phonePrimary: '+52 984 218 4021',
    phoneSecondary: '+52 984 153 8804',
    phonePrimaryHref: 'https://wa.me/529842184021',
    phoneSecondaryHref: 'https://wa.me/529841538804',
    email: 'stay@lobbypm.com',
    address: 'Playa del Carmen, Quintana Roo, México',
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
        text: 'Reservamos para un viaje familiar y todo estaba listo al llegar. Las recomendaciones en Playa del Carmen nos ahorraron horas de planeación.',
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
        alt: 'Recámara premium en una renta vacacional de Playa del Carmen',
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
    title: '¿Listo para planear tu estancia en Playa del Carmen?',
    text: 'Reserva una propiedad boutique, recibe recomendaciones locales o deja que nuestro equipo te ayude a construir un mejor itinerario en Riviera Maya.',
    button: {
      label: 'Contactar a Lobby PM',
      href: '#contact',
    },
    image: {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
      alt: 'Playa al atardecer cerca de Playa del Carmen',
    },
  },
};
