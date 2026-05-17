'use client'

import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'
import { buildings } from '@/data'

export default function Hero() {
  const t = useTranslation()

  return (
    <section className="relative h-[90vh] min-h-[560px]  py-8 pl-12 pr-0 md:py-0 pl-12 pr-0 ">
      {/* Photo with space around it */}
      <div className="relative w-full h-full overflow-hidden rounded-tl-2xl rounded-bl-[60px]">
        <Image
          src="/images/hero.png"
          alt="Nogalar Flats"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay card */}
      <div className="absolute inset-0 flex items-center p-4 md:p-8">
        <div className="ml-4 md:ml-8 bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-sm w-full">
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
    </section>

  )
}
