'use client'

import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'
import { buildings } from '@/data'

export default function Hero() {
  const t = useTranslation()

  return (
    <section className="flex h-[44vh] min-h-[520px]">
      {/* Left panel — white, text */}
      <div className="flex items-center w-full md:w-1/4 bg-white px-8 md:px-14 flex-shrink-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-navy leading-snug mb-4">
            {t.hero.headline}
          </h1>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            {t.hero.subheadline}
          </p>
          <a
            href={`#${buildings[0].id}`}
            className="inline-block bg-navy text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy/90 transition-colors"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      {/* Right panel — photo */}
      <div className="relative hidden md:block flex-1 overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Nogalar Flats"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
