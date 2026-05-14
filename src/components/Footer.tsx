'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { siteConfig } from '@/data'

export default function Footer() {
  const t = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-navy text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div>
          <p className="font-bold text-base mb-1">{siteConfig.businessName}</p>
          <p className="text-white/60">{siteConfig.city}</p>
        </div>
        <div className="text-center text-white/60">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {siteConfig.whatsappNumber}
          </a>
        </div>
        <p className="text-white/40 text-xs">
          © {year} {siteConfig.businessName}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
