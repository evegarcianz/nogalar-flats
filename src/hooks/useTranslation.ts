import { useLocale } from '@/context/LocaleContext'
import { es } from '@/i18n/es'
import { en } from '@/i18n/en'

const translations = { es, en }

export function useTranslation() {
  const { locale } = useLocale()
  return translations[locale]
}
