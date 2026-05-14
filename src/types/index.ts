export type Locale = 'es' | 'en'

export interface LocalizedString {
  es: string
  en: string
}

export interface Flat {
  id: string
  number: string
  description: LocalizedString
  price: number
  bedrooms: number
  bathrooms: number
  sqm: number
  floor: number
  parking: boolean
  coverImage: string
  gallery: string[]
}

export interface Building {
  id: string
  name: string
  address: string
  mapEmbedUrl: string
  flats: Flat[]
}

export interface SiteConfig {
  whatsappNumber: string
  businessName: string
  city: string
  email: string
}

export interface EnquiryPayload {
  name: string
  phone: string
  email: string
  company?: string
  flatId: string
  flatNumber: string
  buildingName: string
  message?: string
}
