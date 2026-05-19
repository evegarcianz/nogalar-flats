'use client'

import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'
import { buildings } from '@/data'

export default function Hero() {
  const t = useTranslation()

  return (
    <section className="relative h-[45vh] md:h-[90vh] min-h-[300px] md:min-h-[560px] py-8 pl-4 pr-4 md:pl-24 md:pr-0 md:py-0">
      {/* Photo with space around it */}
      <div className="relative w-full h-full overflow-hidden rounded-tl-2xl rounded-bl-[60px]">
        <Image
          src="/images/apartment-interior.jpg"
          alt="Nogalar Flats"
          fill
          priority
          className="object-cover object-[75%] md:object-center"
        />
      </div>

      {/* Overlay card */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start p-4 md:p-8">
        <div className="ml-0 md:ml-96 bg-white rounded-2xl shadow-xl p-2 md:p-10 max-w-[224px] md:max-w-3xl w-full mb-0 md:mb-48">
          <h1 className="text-sm md:text-3xl font-bold text-navy leading-snug mb-2">
            {t.hero.headline}
          </h1>
          <p className="text-gray-500 text-[10px] md:text-sm mb-4 leading-relaxed">
            {t.hero.subheadline}
          </p>
          <a
            href={`#${buildings[0].id}`}
            className="inline-block bg-navy text-white text-xs md:text-sm font-semibold px-2 py-1 md:px-6 md:py-3 rounded-lg hover:bg-navy/90 transition-colors"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>

  )
}
