'use client'

import { useTranslation } from '@/hooks/useTranslation'
import FlatCard from './FlatCard'
import type { Building } from '@/types'

interface Props {
  building: Building
}

export default function BuildingSection({ building }: Props) {
  const t = useTranslation()

  return (
    <section id={building.id} className="py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Building header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-1">{building.name}</h2>
          <p className="text-gray-500 text-sm">{building.address}</p>
        </div>

        {/* Map + flat grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map (takes 1 column on large screens) */}
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {t.building.location}
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64 lg:h-80">
              <iframe
                src={building.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Flat cards (takes 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              {t.building.flats}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {building.flats.map((flat) => (
                <FlatCard key={flat.id} flat={flat} buildingName={building.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
