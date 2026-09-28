import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { PoppyMark } from '@/components/Logo'
import { waLink } from '@/components/WhatsAppButton'
import { photo } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = {
  ...pageMeta({
    title: 'Gracias',
    description:
      'Hemos recibido tu mensaje. El taller de Giant Flowers en Palma te responderá en menos de 48 horas con una primera propuesta para tu evento en Mallorca.',
    path: '/gracias',
  }),
  robots: { index: false },
}

export default function GraciasPage() {
  const bg = photo('flores-rosas-cesped')
  return (
    <section className="center-page">
      <div className="center-page__bg">
        <Image src={bg.src} alt={bg.alt} fill priority sizes="100vw" />
      </div>
      <div className="center-page__card">
        <Reveal variant="fade-in">
          <PoppyMark size={56} className="accent" />
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="title">
            ¡Gracias! Tus flores <em>ya están en camino</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="muted">
            Hemos recibido tu mensaje. En menos de 48 horas te escribimos con una primera idea. Si tienes fotos de referencia,
            puedes adelantarlas por WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="btn-row btn-row--center">
          <Link href="/" className="btn btn--solid">
            Volver al inicio
          </Link>
          <a href={waLink('Hola, acabo de enviar el formulario y os paso fotos de referencia.')} className="btn" target="_blank" rel="noopener noreferrer">
            Enviar fotos
          </a>
        </Reveal>
      </div>
    </section>
  )
}
