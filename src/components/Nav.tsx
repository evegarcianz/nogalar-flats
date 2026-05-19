'use client'

import { useLocale } from '@/context/LocaleContext'
import { useTranslation } from '@/hooks/useTranslation'
import { buildings, siteConfig } from '@/data'
import type { Locale } from '@/types'

export default function Nav() {
  const { locale, setLocale } = useLocale()
  const t = useTranslation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-navy font-bold text-3xl tracking-tight">
          {siteConfig.businessName}
        </span>

        <div className="hidden md:flex items-center gap-8">
          {buildings.map((b) => (
            <a
              key={b.id}
              href={`#${b.id}`}
              className="text-base font-medium text-gray-600 hover:text-navy transition-colors"
            >
              {b.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contacto"
            className="hidden md:inline text-base font-medium text-gray-600 hover:text-navy transition-colors"
          >
            {t.nav.contact}
          </a>
          <LocaleToggle locale={locale} setLocale={setLocale} />
        </div>
      </div>
    </nav>
  )
}

function LocaleToggle({ locale, setLocale }: { locale: Locale; setLocale: (l: Locale) => void }) {
  return (
    <button
      onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
      className="text-sm font-semibold text-navy border border-navy rounded px-3 py-1 hover:bg-navy hover:text-white transition-colors"
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
