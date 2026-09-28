import { testimonials } from '@/content/data'
import Reveal from './Reveal'

// Tarjetas en fila (scroll horizontal con snap en móvil)
export default function Testimonials({ limit = 3 }: { limit?: number }) {
  return (
    <div className="t-cards">
      {testimonials.slice(0, limit).map((t, i) => (
        <Reveal as="article" key={t.name} index={i} className="t-card">
          <span className="t-card__mark" aria-hidden="true">
            “
          </span>
          <blockquote>{t.text}</blockquote>
          <footer>
            <strong>{t.name}</strong>
            <span>
              {t.date} · {t.location}
            </span>
          </footer>
        </Reveal>
      ))}
    </div>
  )
}
