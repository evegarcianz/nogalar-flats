import type { Building, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  whatsappNumber: '+528444442520',
  businessName: 'Departamentos Garcia Del Bosque',
  city: 'Ramos Arizpe, Coahuila',
  email: 'homero.garcia@rsdelnorte.com',
}

export const buildings: Building[] = [
  {
    id: 'depas-benavides',
    name: 'Depas 10 & Depas Nuevos',
    address: 'Boulevard Jaime Benavides Pompa #320, Col. Haciendas, Ramos Arizpe, Coahuila',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d450.02153976496675!2d-100.94527879135858!3d25.532636381589775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1779140159710!5m2!1sen!2suk',
    flats: [
      {
        id: 'depas-benavides-tipo-a',
        number: 'Tipo A',
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
        coverImage: '/images/diaz-ordaz-fachada.jpeg',
        gallery: [
          '/images/diaz-ordaz-fachada.jpeg',
          '/images/canada-fachada.jpeg',
          '/images/madrid-sala.jpeg',
          '/images/madrid-cocina.jpeg',
        ],
      },
      {
        id: 'depas-benavides-tipo-b',
        number: 'Tipo B',
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
        coverImage: '/images/canada-fachada.jpeg',
        gallery: [
          '/images/diaz-ordaz-fachada.jpeg',
          '/images/canada-fachada.jpeg',
          '/images/madrid-sala.jpeg',
          '/images/madrid-cocina.jpeg',
        ],
      },
    ],
  },
  {
    id: 'diaz-ordaz',
    name: 'Díaz Ordaz',
    address: 'Boulevard Díaz Ordaz 1330, Colonia del Valle, Ramos Arizpe, Coahuila',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d259.9666267879897!2d-100.94311307076222!3d25.53272694949074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8688137db46fb7bd%3A0x13e7a99308b00b75!2sLic.%20Gustavo%20D%C3%ADaz%20Ordaz%201330%2C%20Col%20del%20Valle%20I%2C%2025904%20Ramos%20Arizpe%2C%20Coah.%2C%20Mexico!5e0!3m2!1sen!2suk!4v1779130332115!5m2!1sen!2suk',
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
        coverImage: '/images/diaz-ordaz-fachada.jpeg',
        gallery: [
          '/images/diaz-ordaz-fachada.jpeg',
          '/images/canada-fachada.jpeg',
          '/images/madrid-sala.jpeg',
          '/images/madrid-cocina.jpeg',
        ],
      },
    ],
  },
  {
    id: 'canada-de-la-rosa',
    name: 'Cañada de la Rosa',
    address: 'Cañada de la Rosa #103, Ramos Arizpe, Coahuila',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.0117649195363!2d-100.94281053031523!3d25.536809308683715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8688148216864461%3A0xaa52e8e3b097cafe!2sCanad%C3%A1%20de%20La%20Rosa%20103%2C%20La%20Hacienda%2C%2025903%20Ramos%20Arizpe%2C%20Coah.%2C%20Mexico!5e0!3m2!1sen!2suk!4v1779129883517!5m2!1sen!2suk',
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
        coverImage: '/images/canada-fachada.jpeg',
        gallery: [
          '/images/diaz-ordaz-fachada.jpeg',
          '/images/canada-fachada.jpeg',
          '/images/madrid-sala.jpeg',
          '/images/madrid-cocina.jpeg',
        ],
      },
    ],
  },
  {
    id: 'parque-madrid',
    name: 'Parque Madrid',
    address: 'Esquina Boulevard Plan de Guadalupe y Parque Madrid #120, Colonia VillaMagna, Ramos Arizpe, Coahuila',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.9791314200028!2d-100.93728457662574!3d25.549496806168055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8688150d811d3b5b%3A0x1076aca11564473b!2sParque%20Madrid%20120%2C%20Villa%20Magna%2C%2025903%20Ramos%20Arizpe%2C%20Coah.%2C%20Mexico!5e0!3m2!1sen!2suk!4v1779130496324!5m2!1sen!2suk',
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
        coverImage: '/images/madrid-sala.jpeg',
        gallery: [
          '/images/diaz-ordaz-fachada.jpeg',
          '/images/canada-fachada.jpeg',
          '/images/madrid-sala.jpeg',
          '/images/madrid-cocina.jpeg',
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
