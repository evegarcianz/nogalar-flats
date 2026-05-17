import type { Building, SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  whatsappNumber: '+521234567890', // TODO: replace with Homero's number
  businessName: 'Nogalar Flats',
  city: 'Ramos Arizpe, Coahuila',
  email: 'contacto@nogalarflats.com', // TODO: replace with real email
}

function makePlaceholder(label: string) {
  return `https://placehold.co/800x600/e2e8f0/1a2b4a?text=${encodeURIComponent(label)}`
}

function buildFlats(buildingId: string, count: number, specs: {
  price: number
  bedrooms: number
  bathrooms: number
  sqm: number
  floor: number
  parking: boolean
  description: { es: string; en: string }
}) {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1)
    return {
      id: `${buildingId}-${num}`,
      number: num,
      description: specs.description,
      price: specs.price,
      bedrooms: specs.bedrooms,
      bathrooms: specs.bathrooms,
      sqm: specs.sqm,
      floor: specs.floor,
      parking: specs.parking,
      coverImage: makePlaceholder(`Depa ${num}`), // TODO: replace with Cloudinary URL
      gallery: [
        makePlaceholder('Sala'),
        makePlaceholder('Cocina'),
        makePlaceholder('Recámara'),
      ],
    }
  })
}

export const buildings: Building[] = [
  {
    id: 'depas-10',
    name: 'Depas 10',
    address: 'Ramos Arizpe, Coahuila', // TODO: real address
    mapEmbedUrl: '', // TODO: Google Maps embed URL
    flats: buildFlats('depas-10', 12, {
      price: 6500,
      bedrooms: 1,
      bathrooms: 1,
      sqm: 35,
      floor: 2,
      parking: true,
      description: {
        es: 'Departamento amueblado de 1 recámara con A/C, estacionamiento cubierto, balcón y acceso a áreas comunes con rooftop. Vigilancia con guardia y cámaras.',
        en: '1-bedroom furnished apartment with A/C, covered parking, balcony, and rooftop common areas. Guard and camera security.',
      },
    }),
  },
  {
    id: 'canada-de-la-rosa',
    name: 'Cañada de la Rosa',
    address: 'Ramos Arizpe, Coahuila', // TODO: real address
    mapEmbedUrl: '', // TODO: Google Maps embed URL
    flats: buildFlats('canada-de-la-rosa', 4, {
      price: 8200,
      bedrooms: 1,
      bathrooms: 1,
      sqm: 60,
      floor: 2,
      parking: true,
      description: {
        es: 'Amplio departamento amueblado de 1 recámara y 60 m², con estacionamiento cubierto, balcón y rooftop. Vigilancia con cámaras.',
        en: 'Spacious 1-bedroom furnished apartment of 60 m² with covered parking, balcony, and rooftop. Camera security.',
      },
    }),
  },
  {
    id: 'diaz-ordaz',
    name: 'Díaz Ordaz',
    address: 'Ramos Arizpe, Coahuila', // TODO: real address
    mapEmbedUrl: '', // TODO: Google Maps embed URL
    flats: buildFlats('diaz-ordaz', 9, {
      price: 9600,
      bedrooms: 2,
      bathrooms: 1,
      sqm: 80,
      floor: 2,
      parking: true,
      description: {
        es: 'Departamento amueblado de 2 recámaras y 80 m² con A/C, 2 estacionamientos cubiertos, balcón, bodega y rooftop. Vigilancia con cámaras.',
        en: '2-bedroom furnished apartment of 80 m² with A/C, 2 covered parking spaces, balcony, storage room, and rooftop. Camera security.',
      },
    }),
  },
  {
    id: 'parque-madrid',
    name: 'Parque Madrid',
    address: 'Ramos Arizpe, Coahuila', // TODO: real address
    mapEmbedUrl: '', // TODO: Google Maps embed URL
    flats: buildFlats('parque-madrid', 6, {
      price: 8500,
      bedrooms: 1,
      bathrooms: 1,
      sqm: 35,
      floor: 2,
      parking: true,
      description: {
        es: 'Departamento amueblado de 1 recámara con A/C, estacionamiento semicubierto, balcón y bodega. Vigilancia con cámaras.',
        en: '1-bedroom furnished apartment with A/C, semi-covered parking, balcony, and storage room. Camera security.',
      },
    }),
  },
  {
    id: 'benavides-pompa',
    name: 'Benavides Pompa',
    address: 'Ramos Arizpe, Coahuila', // TODO: real address
    mapEmbedUrl: '', // TODO: Google Maps embed URL
    flats: buildFlats('benavides-pompa', 12, {
      price: 7500,
      bedrooms: 1,
      bathrooms: 1,
      sqm: 30,
      floor: 3,
      parking: true,
      description: {
        es: 'Departamento amueblado de 1 recámara con A/C, estacionamiento cubierto, balcón, bodega y rooftop. Vigilancia con guardia y cámaras.',
        en: '1-bedroom furnished apartment with A/C, covered parking, balcony, storage room, and rooftop. Guard and camera security.',
      },
    }),
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
      a: 'Los departamentos no aceptan mascotas.',
    },
    {
      q: '¿Los departamentos están amueblados?',
      a: 'Sí, todos los departamentos se entregan amueblados.',
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
      a: 'Sí, todos los departamentos incluyen cajón de estacionamiento.',
    },
  ],
  en: [
    {
      q: 'How much is the deposit?',
      a: 'The deposit equals one month\'s rent and is refunded at the end of the lease, subject to the condition of the apartment.',
    },
    {
      q: 'Are pets allowed?',
      a: 'Pets are not allowed.',
    },
    {
      q: 'Are the apartments furnished?',
      a: 'Yes, all apartments are delivered fully furnished.',
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
      a: 'Yes, all apartments include a parking space.',
    },
  ],
}
