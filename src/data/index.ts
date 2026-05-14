import type { Building, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  whatsappNumber: '+521234567890', // TODO: replace with Homero's number
  businessName: 'Nogalar Flats',
  city: 'Ramos Arizpe, Coahuila',
  email: 'contacto@nogalarflats.com', // TODO: replace with real email
}

export const buildings: Building[] = [
  {
    id: 'edificio-uno',
    name: 'Edificio Uno', // TODO: replace with real name from Homero
    address: 'Calle Ejemplo 100, Ramos Arizpe, Coahuila', // TODO
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0!2d-100.9!3d25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzAwLjAiTiAxMDDCsDU0JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1000000000000!5m2!1ses!2smx', // TODO
    flats: [
      {
        id: 'edificio-uno-101',
        number: '101',
        description: {
          es: 'Departamento luminoso en planta baja con acabados modernos y excelente ventilación natural.',
          en: 'Bright ground-floor apartment with modern finishes and excellent natural ventilation.',
        },
        price: 8500,
        bedrooms: 2,
        bathrooms: 1,
        sqm: 65,
        floor: 1,
        parking: true,
        coverImage: 'https://placehold.co/600x400/e2e8f0/1a2b4a?text=Foto+101',
        gallery: [
          'https://placehold.co/800x600/e2e8f0/1a2b4a?text=Sala',
          'https://placehold.co/800x600/e2e8f0/1a2b4a?text=Cocina',
          'https://placehold.co/800x600/e2e8f0/1a2b4a?text=Recámara',
        ],
      },
      {
        id: 'edificio-uno-201',
        number: '201',
        description: {
          es: 'Amplio departamento en segundo piso con vista a la calle y cocina equipada.',
          en: 'Spacious second-floor apartment with street view and equipped kitchen.',
        },
        price: 9200,
        bedrooms: 2,
        bathrooms: 2,
        sqm: 72,
        floor: 2,
        parking: true,
        coverImage: 'https://placehold.co/600x400/e2e8f0/1a2b4a?text=Foto+201',
        gallery: [
          'https://placehold.co/800x600/e2e8f0/1a2b4a?text=Sala',
          'https://placehold.co/800x600/e2e8f0/1a2b4a?text=Cocina',
        ],
      },
      {
        id: 'edificio-uno-301',
        number: '301',
        description: {
          es: 'Departamento en tercer piso con terraza privada y vista panorámica.',
          en: 'Third-floor apartment with private terrace and panoramic views.',
        },
        price: 10500,
        bedrooms: 3,
        bathrooms: 2,
        sqm: 90,
        floor: 3,
        parking: true,
        coverImage: 'https://placehold.co/600x400/e2e8f0/1a2b4a?text=Foto+301',
        gallery: [
          'https://placehold.co/800x600/e2e8f0/1a2b4a?text=Sala',
          'https://placehold.co/800x600/e2e8f0/1a2b4a?text=Terraza',
        ],
      },
    ],
  },
  {
    id: 'edificio-dos',
    name: 'Edificio Dos', // TODO: replace with real name from Homero
    address: 'Calle Ejemplo 200, Ramos Arizpe, Coahuila', // TODO
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0!2d-100.9!3d25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzAwLjAiTiAxMDDCsDU0JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1000000000000!5m2!1ses!2smx', // TODO
    flats: [
      {
        id: 'edificio-dos-101',
        number: '101',
        description: {
          es: 'Moderno departamento en planta baja con cocina abierta y estacionamiento incluido.',
          en: 'Modern ground-floor apartment with open kitchen and included parking.',
        },
        price: 8800,
        bedrooms: 2,
        bathrooms: 1,
        sqm: 68,
        floor: 1,
        parking: true,
        coverImage: 'https://placehold.co/600x400/cbd5e1/1a2b4a?text=Foto+101',
        gallery: [
          'https://placehold.co/800x600/cbd5e1/1a2b4a?text=Sala',
          'https://placehold.co/800x600/cbd5e1/1a2b4a?text=Cocina',
        ],
      },
      {
        id: 'edificio-dos-202',
        number: '202',
        description: {
          es: 'Departamento ejecutivo con acabados de lujo, ideal para profesionales.',
          en: 'Executive apartment with luxury finishes, ideal for professionals.',
        },
        price: 11000,
        bedrooms: 2,
        bathrooms: 2,
        sqm: 80,
        floor: 2,
        parking: true,
        coverImage: 'https://placehold.co/600x400/cbd5e1/1a2b4a?text=Foto+202',
        gallery: [
          'https://placehold.co/800x600/cbd5e1/1a2b4a?text=Sala',
          'https://placehold.co/800x600/cbd5e1/1a2b4a?text=Recámara',
        ],
      },
    ],
  },
  {
    id: 'edificio-tres',
    name: 'Edificio Tres', // TODO: replace with real name from Homero
    address: 'Calle Ejemplo 300, Ramos Arizpe, Coahuila', // TODO
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0!2d-100.9!3d25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzAwLjAiTiAxMDDCsDU0JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1000000000000!5m2!1ses!2smx', // TODO
    flats: [
      {
        id: 'edificio-tres-101',
        number: '101',
        description: {
          es: 'Acogedor departamento en planta baja, perfecto para parejas o solteros.',
          en: 'Cozy ground-floor apartment, perfect for couples or singles.',
        },
        price: 7500,
        bedrooms: 1,
        bathrooms: 1,
        sqm: 50,
        floor: 1,
        parking: false,
        coverImage: 'https://placehold.co/600x400/dde1e7/1a2b4a?text=Foto+101',
        gallery: [
          'https://placehold.co/800x600/dde1e7/1a2b4a?text=Sala',
        ],
      },
      {
        id: 'edificio-tres-201',
        number: '201',
        description: {
          es: 'Departamento en segundo piso con balcón y excelente iluminación.',
          en: 'Second-floor apartment with balcony and excellent natural light.',
        },
        price: 8200,
        bedrooms: 2,
        bathrooms: 1,
        sqm: 60,
        floor: 2,
        parking: false,
        coverImage: 'https://placehold.co/600x400/dde1e7/1a2b4a?text=Foto+201',
        gallery: [
          'https://placehold.co/800x600/dde1e7/1a2b4a?text=Sala',
          'https://placehold.co/800x600/dde1e7/1a2b4a?text=Balcón',
        ],
      },
    ],
  },
]

export const faqItems = {
  es: [
    {
      q: '¿Cuánto es el depósito?',
      a: 'El depósito equivale a un mes de renta y se reembolsa al término del contrato, sujeto al estado del departamento.',
    },
    {
      q: '¿Se aceptan mascotas?',
      a: 'Contáctanos directamente para consultar disponibilidad con mascotas según el departamento.',
    },
    {
      q: '¿Los departamentos están amueblados?',
      a: 'Contamos con opciones amuebladas y sin amueblar. Consulta en cada departamento o escríbenos.',
    },
    {
      q: '¿Cuál es la duración mínima del contrato?',
      a: 'El contrato mínimo es de 12 meses.',
    },
    {
      q: '¿Los servicios están incluidos en el precio?',
      a: 'El precio de renta no incluye servicios (agua, luz, gas). El mantenimiento del edificio sí está incluido.',
    },
    {
      q: '¿Hay estacionamiento disponible?',
      a: 'Varios departamentos incluyen cajón de estacionamiento. Consulta la ficha de cada unidad.',
    },
  ],
  en: [
    {
      q: 'How much is the deposit?',
      a: 'The deposit equals one month\'s rent and is refunded at the end of the lease, subject to the condition of the apartment.',
    },
    {
      q: 'Are pets allowed?',
      a: 'Please contact us directly to check pet availability for each apartment.',
    },
    {
      q: 'Are the apartments furnished?',
      a: 'We have both furnished and unfurnished options. Check each listing or message us.',
    },
    {
      q: 'What is the minimum lease term?',
      a: 'The minimum lease is 12 months.',
    },
    {
      q: 'Are utilities included in the price?',
      a: 'Utilities (water, electricity, gas) are not included in the rent. Building maintenance is included.',
    },
    {
      q: 'Is parking available?',
      a: 'Several apartments include a parking space. Check the details of each unit.',
    },
  ],
}
