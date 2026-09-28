import Link from 'next/link'
import { PoppyMark } from '@/components/Logo'

export const metadata = { title: 'Página no encontrada' }

export default function NotFound() {
  return (
    <section className="center-page center-page--plain">
      <span className="watermark" aria-hidden="true">
        404
      </span>
      <div className="center-page__card">
        <PoppyMark size={56} className="accent" />
        <h1 className="title">
          Esta flor <em>no ha crecido</em> todavía
        </h1>
        <p className="muted">La página que buscas no existe o ha cambiado de sitio.</p>
        <div className="btn-row btn-row--center">
          <Link href="/" className="btn btn--solid">
            Volver al inicio
          </Link>
          <Link href="/portfolio" className="btn">
            Ver portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
