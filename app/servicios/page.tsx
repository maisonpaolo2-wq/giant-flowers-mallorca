import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { photo, services } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Servicios · Photozones, bodas y escaparates',
  description:
    'Photozones, ceremonias, escaparates y alquiler de flores gigantes hechas a mano en Palma. Diseño a medida, montaje y recogida en toda Mallorca.',
  path: '/servicios',
  image: '/og-image.jpg',
})

const extras = [
  { t: 'Boceto previo', d: 'Veis la escena antes de fabricarla, con especies, alturas y colores.' },
  { t: 'Presupuesto cerrado', d: 'Montaje, desplazamiento y recogida incluidos. Sin sorpresas.' },
  { t: 'Paleta a medida', d: 'Teñimos cada pétalo para que encaje con flores naturales y mantelería.' },
  { t: 'Coordinación', d: 'Hablamos con la finca, el hotel o vuestra planner para los horarios.' },
]

export default function ServiciosPage() {
  const hero = photo('pasillo-ceremonia-amapolas')
  return (
    <>
      <PageHero
        image={hero.src}
        alt={hero.alt}
        eyebrow="Servicios"
        lines={['Escenas XXL', <em key="m">a medida</em>]}
        text="De un pasillo de ceremonia a un escaparate de temporada. Todo diseñado y fabricado a mano en Palma."
      />

      <section className="section">
        <div className="container">
          <nav className="svc-index" aria-label="Servicios">
            {services.map((s, i) => (
              <a key={s.slug} href={`#${s.slug}`}>
                <span>0{i + 1}</span> {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`section svc-detail${i % 2 ? ' section--surface svc-detail--flip' : ''}`}
        >
          <div className="container svc-detail__grid">
            <Reveal variant="scale-in" className="svc-detail__photo">
              <Image src={s.image} alt={photo(s.image.slice(8, -5)).alt} fill sizes="(min-width: 900px) 55vw, 100vw" />
            </Reveal>
            <div className="svc-detail__text">
              <span className="svc-detail__num" aria-hidden="true">
                0{i + 1}
              </span>
              <Line />
              <Reveal>
                <h2 className="title">{s.title}</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="lead">{s.description}</p>
              </Reveal>
              <Reveal delay={0.16}>
                <p>{s.longDescription}</p>
              </Reveal>
              <ul className="checklist">
                {s.includes.map((x, n) => (
                  <Reveal as="li" key={x} index={n}>
                    {x}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <Reveal>
              <span className="eyebrow eyebrow--center">En todos los proyectos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">Lo que siempre incluimos</h2>
            </Reveal>
          </div>
          <div className="icon-grid">
            {extras.map((x, i) => (
              <Reveal key={x.t} index={i} className="icon-grid__item">
                <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
                  <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" />
                  <path d="M20 4v8M20 28v8M4 20h8M28 20h8" stroke="currentColor" />
                </svg>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
