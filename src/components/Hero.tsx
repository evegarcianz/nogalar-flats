'use client'

import { useTranslation } from '@/hooks/useTranslation'

export default function Hero() {
  const t = useTranslation()

  return (
    <section className="relative h-[90vh] min-h-[560px] flex items-center justify-start overflow-hidden">
      {/* Background image — replace src with real hero photo from Cloudinary */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-gray-300"
        style={{ backgroundImage: "url('https://placehold.co/1600x900/94a3b8/ffffff?text=Foto+Nogalar')" }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-navy leading-snug mb-3">
            {t.hero.headline}
          </h1>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            {t.hero.subheadline}
          </p>
          <a
            href="#edificio-uno"
            className="inline-block bg-navy text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy/90 transition-colors"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
