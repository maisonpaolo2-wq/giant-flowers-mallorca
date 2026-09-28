import Link from 'next/link'
import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { waLink } from './WhatsAppButton'

type Props = { title?: ReactNode; text?: string; surface?: boolean }

export default function CtaBand({
  title = (
    <>
      ¿Hacemos tu <em>momento WOW</em>?
    </>
  ),
  text = 'Contadnos fecha, lugar y colores. En menos de 48 horas os enviamos una primera propuesta con boceto.',
  surface = true,
}: Props) {
  return (
    <section className={`section cta-band${surface ? ' section--surface' : ''}`}>
      <span className="watermark" aria-hidden="true">
        WOW
      </span>
      <div className="container" style={{ position: 'relative' }}>
        <Reveal>
          <span className="eyebrow eyebrow--center">Siguiente paso</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="title">{title}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="muted cta-band__text">{text}</p>
        </Reveal>
        <Reveal delay={0.24} className="btn-row btn-row--center">
          <Link href="/contacto" className="btn btn--solid">
            Pedir propuesta
          </Link>
          <a href={waLink()} className="btn" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
