'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { useTranslation } from '@/hooks/useTranslation'
import { faqItems } from '@/data'

export default function FAQ() {
  const { locale } = useLocale()
  const t = useTranslation()
  const [open, setOpen] = useState<number | null>(null)
  const items = faqItems[locale]

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">{t.faq.title}</h2>
        <div className="divide-y divide-gray-200">
          {items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-medium text-navy text-sm pr-4">{item.q}</span>
                {open === i ? (
                  <ChevronUp size={18} className="flex-shrink-0 text-gray-400" />
                ) : (
                  <ChevronDown size={18} className="flex-shrink-0 text-gray-400" />
                )}
              </button>
              {open === i && (
                <p className="pb-5 text-gray-500 text-sm leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
