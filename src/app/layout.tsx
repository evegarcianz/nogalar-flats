import type { Metadata } from 'next'
import './globals.css'
import { LocaleProvider } from '@/context/LocaleContext'

export const metadata: Metadata = {
  title: 'Nogalar Flats | Departamentos en Ramos Arizpe',
  description: 'Departamentos en renta en Ramos Arizpe, Coahuila. Edificios modernos, ubicaciones privilegiadas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  )
}
