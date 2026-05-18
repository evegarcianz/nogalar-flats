import type { Building, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  whatsappNumber: '+521234567890', // TODO: replace with Homero's number
  businessName: 'Nogalar Flats',
  city: 'Ramos Arizpe, Coahuila',
  email: 'contacto@nogalarflats.com', // TODO: replace with real email
}

export const buildings: Building[] = [
  {
    id: 'depas-10',
    name: 'Depas 10',
    address: 'Ramos Arizpe, Coahuila', // TODO: real address
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0!2d-100.9!3d25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzAwLjAiTiAxMDDCsDU0JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1000000000000!5m2!1ses!2smx', // TODO
    flats: [
      {
        id: 'depas-10-ejemplo',
        number: 'Ejemplo',
        description: {
          es: 'Departamento amueblado de 35 m² con recámara, balcón, bodega y estacionamiento cubierto. Clima, calentador de gas y conexiones de lavadora incluidos. Edificio con roof garden y vigilancia 24/7.',
          en: 'Furnished 35 m² apartment with one bedroom, balcony, storage room, and covered parking. AC, gas water heater, and laundry connections included. Building with rooftop terrace and 24/7 security.',
        },
        price: 6500,
        bedrooms: 1,
        bathrooms: 1,
        sqm: 35,
        floor: 1,
        parking: true,
        coverImage: 'https://placehold.co/600x400/e2e8f0/1a2b4a?text=Depas+10',
        gallery: [],
      },
    ],
  },
  {
    id: 'benavides-pompa',
    name: 'Benavides Pompa',
    address: 'Ramos Arizpe, Coahuila', // TODO: real address
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0!2d-100.9!3d25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzAwLjAiTiAxMDDCsDU0JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1000000000000!5m2!1ses!2smx', // TODO
    flats: [
      {
        id: 'benavides-pompa-ejemplo',
        number: 'Ejemplo',
        description: {
          es: 'Departamento amueblado de 30 m² con recámara, balcón, bodega y estacionamiento cubierto. Clima, calentador eléctrico y conexiones de lavadora. Edificio con roof garden y vigilancia 24/7.',
          en: 'Furnished 30 m² apartment with one bedroom, balcony, storage room, and covered parking. AC, electric water heater, and laundry connections. Building with rooftop terrace and 24/7 security.',
        },
        price: 7500,
        bedrooms: 1,
        bathrooms: 1,
        sqm: 30,
        floor: 1,
        parking: true,
        coverImage: 'https://placehold.co/600x400/dde1e7/1a2b4a?text=Benavides+Pompa',
        gallery: [],
      },
    ],
  },
  {
    id: 'diaz-ordaz',
    name: 'Díaz Ordaz',
    address: 'Ramos Arizpe, Coahuila', // TODO: real address
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0!2d-100.9!3d25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzAwLjAiTiAxMDDCsDU0JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1000000000000!5m2!1ses!2smx', // TODO
    flats: [
      {
        id: 'diaz-ordaz-ejemplo',
        number: 'Ejemplo',
        description: {
          es: 'Departamento amueblado de 80 m² con dos recámaras, balcón, bodega y dos cajones de estacionamiento cubierto. Clima, calentador de gas y conexiones de lavadora. Edificio con roof garden y cámaras de seguridad.',
          en: 'Furnished 80 m² two-bedroom apartment with balcony, storage room, and two covered parking spaces. AC, gas water heater, and laundry connections. Building with rooftop terrace and security cameras.',
        },
        price: 9600,
        bedrooms: 2,
        bathrooms: 1,
        sqm: 80,
        floor: 1,
        parking: true,
        coverImage: 'https://placehold.co/600x400/cbd5e1/1a2b4a?text=Diaz+Ordaz',
        gallery: [],
      },
    ],
  },
  {
    id: 'canada-de-la-rosa',
    name: 'Cañada de la Rosa',
    address: 'Ramos Arizpe, Coahuila', // TODO: real address
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0!2d-100.9!3d25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzAwLjAiTiAxMDDCsDU0JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1000000000000!5m2!1ses!2smx', // TODO
    flats: [
      {
        id: 'canada-de-la-rosa-ejemplo',
        number: 'Ejemplo',
        description: {
          es: 'Amplio departamento amueblado de 60 m² con recámara, balcón y estacionamiento cubierto. Calentador de gas y conexiones de lavadora. Edificio con roof garden y cámaras de seguridad.',
          en: 'Spacious furnished 60 m² apartment with one bedroom, balcony, and covered parking. Gas water heater and laundry connections. Building with rooftop terrace and security cameras.',
        },
        price: 8200,
        bedrooms: 1,
        bathrooms: 1,
        sqm: 60,
        floor: 1,
        parking: true,
        coverImage: 'https://placehold.co/600x400/e8edf2/1a2b4a?text=Canada+de+la+Rosa',
        gallery: [],
      },
    ],
  },
  {
    id: 'parque-madrid',
    name: 'Parque Madrid',
    address: 'Ramos Arizpe, Coahuila', // TODO: real address
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0!2d-100.9!3d25.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMwJzAwLjAiTiAxMDDCsDU0JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1000000000000!5m2!1ses!2smx', // TODO
    flats: [
      {
        id: 'parque-madrid-ejemplo',
        number: 'Ejemplo',
        description: {
          es: 'Departamento amueblado de 35 m² con recámara, balcón, bodega y estacionamiento semi-cubierto. Clima y calentador eléctrico. Edificio con cámaras de seguridad.',
          en: 'Furnished 35 m² apartment with one bedroom, balcony, storage room, and semi-covered parking. AC and electric water heater. Building with security cameras.',
        },
        price: 8500,
        bedrooms: 1,
        bathrooms: 1,
        sqm: 35,
        floor: 1,
        parking: true,
        coverImage: 'https://placehold.co/600x400/d4dae0/1a2b4a?text=Parque+Madrid',
        gallery: [],
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
      a: 'Por el momento no se aceptan mascotas en ninguno de nuestros edificios.',
    },
    {
      q: '¿Los departamentos están amueblados?',
      a: 'Sí, todos nuestros departamentos se entregan completamente amueblados.',
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
      a: 'Sí, todos nuestros departamentos incluyen cajón de estacionamiento.',
    },
  ],
  en: [
    {
      q: 'How much is the deposit?',
      a: 'The deposit equals one month\'s rent and is refunded at the end of the lease, subject to the condition of the apartment.',
    },
    {
      q: 'Are pets allowed?',
      a: 'We do not accept pets in any of our buildings at this time.',
    },
    {
      q: 'Are the apartments furnished?',
      a: 'Yes, all our apartments are fully furnished.',
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
      a: 'Yes, all our apartments include a parking space.',
    },
  ],
}
