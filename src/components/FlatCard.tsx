'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BedDouble, Bath, Maximize2, Car, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { useTranslation } from '@/hooks/useTranslation'
import { siteConfig } from '@/data'
import EnquiryForm from './EnquiryForm'
import type { Flat } from '@/types'

interface Props {
  flat: Flat
  buildingName: string
}

export default function FlatCard({ flat, buildingName }: Props) {
  const [expanded, setExpanded] = useState(false)
  const [activePhoto, setActivePhoto] = useState(0)
  const { locale } = useLocale()
  const t = useTranslation()

  const allPhotos = [flat.coverImage, ...flat.gallery]

  const whatsappMsg = encodeURIComponent(
    locale === 'es'
      ? `Hola, me interesa el departamento ${flat.number} de ${buildingName}.`
      : `Hello, I'm interested in apartment ${flat.number} at ${buildingName}.`
  )
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}?text=${whatsappMsg}`

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
      {/* Collapsed header — always visible */}
      <div className="relative">
        <div className="relative h-52 w-full">
          <Image
            src={flat.coverImage}
            alt={`Depto ${flat.number}`}
            fill
            className="object-cover"
          />
        </div>
        {/* Price badge */}
        <div className="absolute top-3 left-3 bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full">
          ${flat.price.toLocaleString('es-MX')}{t.flat.price}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-navy text-base">
            {buildingName} — Depto {flat.number}
          </h3>
          <span className="text-xs text-gray-400">Piso {flat.floor}</span>
        </div>

        {/* Specs row */}
        <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
          <span className="flex items-center gap-1">
            <BedDouble size={14} /> {flat.bedrooms}
          </span>
          <span className="flex items-center gap-1">
            <Bath size={14} /> {flat.bathrooms}
          </span>
          <span className="flex items-center gap-1">
            <Maximize2 size={14} /> {flat.sqm} m²
          </span>
          {flat.parking && (
            <span className="flex items-center gap-1">
              <Car size={14} />
            </span>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2 bg-navy text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-navy/90 transition-colors"
        >
          {expanded ? t.flat.close : t.flat.enquire}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-gray-100 px-4 pb-6">
          {/* Gallery */}
          <div className="mt-4 mb-3">
            <div className="relative h-52 w-full rounded-xl overflow-hidden mb-2">
              <Image
                src={allPhotos[activePhoto]}
                alt={`Foto ${activePhoto + 1}`}
                fill
                className="object-cover"
              />
            </div>
            {allPhotos.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {allPhotos.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`relative h-14 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                      i === activePhoto ? 'border-navy' : 'border-transparent'
                    }`}
                  >
                    <Image src={photo} alt={`Miniatura ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {flat.description[locale]}
          </p>

          {/* Full specs */}
          <div className="grid grid-cols-2 gap-2 text-sm mb-4">
            <SpecRow icon={<BedDouble size={15} />} label={t.flat.bedrooms} value={flat.bedrooms} />
            <SpecRow icon={<Bath size={15} />} label={t.flat.bathrooms} value={flat.bathrooms} />
            <SpecRow icon={<Maximize2 size={15} />} label={t.flat.sqm} value={`${flat.sqm} m²`} />
            <SpecRow
              icon={<Car size={15} />}
              label={t.flat.parking}
              value={flat.parking ? t.flat.parkingYes : t.flat.parkingNo}
            />
          </div>

          {/* WhatsApp button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 border border-navy text-navy text-sm font-semibold py-2.5 rounded-lg hover:bg-navy hover:text-white transition-colors mb-2"
          >
            <MessageCircle size={16} />
            {t.flat.whatsapp}
          </a>

          {/* Enquiry form */}
          <EnquiryForm flat={flat} buildingName={buildingName} />
        </div>
      )}
    </div>
  )
}

function SpecRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return (
    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
      <span className="text-navy">{icon}</span>
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-navy ml-auto">{value}</span>
    </div>
  )
}
