import type { Metadata, Viewport } from 'next'
import { Fraunces, Figtree } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ClientRoot from '@/components/ClientRoot'
import JsonLd from '@/components/JsonLd'
import { siteConfig } from '@/content/data'
import { siteUrl } from '@/content/seo'

const serif = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'opsz'],
  variable: '--ff-serif',
  display: 'swap',
})
const sans = Figtree({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--ff-sans', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} · Flores gigantes para bodas y eventos`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    'Flores XXL hechas a mano en Palma para bodas, photozones, escaparates y eventos en toda Mallorca. Diseño a medida, montaje y recogida incluidos.',
  openGraph: {
    siteName: siteConfig.name,
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#faf7f2',
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip">
          Saltar al contenido
        </a>
        <ClientRoot>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ClientRoot>
        <JsonLd />
      </body>
    </html>
  )
}
