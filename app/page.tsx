import Image from 'next/image'
import Link from 'next/link'
import HeroTitle from '@/components/HeroTitle'
import Reveal, { Line } from '@/components/Reveal'
import Filmstrip from '@/components/Filmstrip'
import Testimonials from '@/components/Testimonials'
import Separator from '@/components/Separator'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'
import { photo, portfolio, processSteps, services, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Flores gigantes para bodas y eventos en Mallorca',
  description:
    'Flores XXL hechas a mano en Palma para bodas, photozones, escaparates y eventos en toda Mallorca. Diseño a medida con montaje y recogida incluidos.',
  path: '/',
})

const flowers = ['Amapolas', 'Rosas', 'Peonías', 'Lirios', 'Ranúnculos', 'Anémonas', 'Cosmos', 'Magnolias']

export default function Home() {
  const hero = photo('terraza-amapolas-blancas')
  const intro = photo('novios-escalinata-flores')
  const detail = photo('rosa-roja-gigante')
  const sep = photo('novia-piscina-amapolas')
  const about = photo('artesana-rosas-rojas')
  const contact = photo('barra-lirios-rosas')

  return (
    <>
      {/* HERO · fullbleed */}
      <section className="hero">
        <div className="hero__media">
          <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" />
        </div>
        <div className="container hero__content">
          <Reveal variant="fade-in">
            <span className="eyebrow eyebrow--light">Event decor &amp; photozones · Mallorca</span>
          </Reveal>
          <HeroTitle
            className="display"
            lines={[
              'Flores gigantes',
              'para tu',
              <em key="wow">momento WOW</em>,
            ]}
          />
          <Reveal delay={0.65} className="btn-row">
            <Link href="/contacto" className="btn btn--light btn--solid-light">
              Pedir propuesta
            </Link>
            <Link href="/portfolio" className="btn btn--light">
              Ver trabajos
            </Link>
          </Reveal>
        </div>
        <span className="hero__side" aria-hidden="true">
          Handcrafted XXL flowers
        </span>
      </section>

      {/* Ticker de especies */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...flowers, ...flowers].map((f, i) => (
            <span key={i}>
              {f} <i>✿</i>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO · asimétrica 40/60, empieza con subtítulo fino */}
      <section className="section intro" id="intro">
        <span className="watermark watermark--left" aria-hidden="true">
          XXL
        </span>
        <div className="container intro__grid">
          <div className="intro__text">
            <Reveal>
              <span className="eyebrow">Hecho a mano en Palma</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Flores que se ven <em>desde el otro lado</em> del jardín
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead">{siteConfig.bioShort}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="muted">
                Cada pieza nace en nuestro taller, pétalo a pétalo, y se piensa para un lugar concreto: la escalinata de una
                finca, el borde de una piscina o el escaparate de una tienda en el centro de Palma.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <Link href="/sobre-mi" className="link-arrow">
                Conoce el taller
              </Link>
            </Reveal>
          </div>
          <div className="intro__media">
            <Reveal variant="scale-in" className="intro__photo">
              <Image src={intro.src} alt={intro.alt} fill sizes="(min-width: 900px) 55vw, 100vw" />
            </Reveal>
            <Reveal variant="scale-in" delay={0.2} className="intro__detail">
              <Image src={detail.src} alt={detail.alt} fill sizes="(min-width: 900px) 20vw, 45vw" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICIOS · cards horizontales, empiezan con línea + título */}
      <section className="section section--surface" id="servicios">
        <div className="container">
          <div className="section-head">
            <Line />
            <Reveal>
              <h2 className="title">Lo que creamos</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">Cuatro formas de llevar flores a escala XXL a tu evento, tu marca o tu casa.</p>
            </Reveal>
          </div>
          <div className="svc-list">
            {services.map((s, i) => (
              <Reveal as="article" key={s.slug} className={`svc${i % 2 ? ' svc--flip' : ''}`}>
                <Link href={`/servicios#${s.slug}`} className="svc__img" aria-label={s.title}>
                  <Image src={s.image} alt={photoAlt(s.image)} fill sizes="(min-width: 900px) 50vw, 100vw" />
                </Link>
                <div className="svc__body">
                  <span className="svc__num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <Link href={`/servicios#${s.slug}`} className="link-arrow">
                    Ver detalle
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Separador a sangre */}
      <Separator image={sep.src} alt={sep.alt}>
        <p className="separator__quote">
          Cortadas, teñidas y modeladas <em>a mano</em>, una a una.
        </p>
      </Separator>

      {/* PROCESO · números grandes */}
      <section className="section" id="proceso">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal>
              <span className="big-num" aria-hidden="true">
                4
              </span>
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow">Cómo trabajamos</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="title">Cuatro pasos del mensaje a la primera foto</h2>
              </Reveal>
            </div>
          </div>
          <ol className="steps">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.number} index={i} className="step">
                <span className="step__num">0{s.number}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PORTFOLIO · filmstrip a sangre */}
      <section className="section section--surface section--flush-x" id="portfolio">
        <div className="container section-head section-head--row">
          <div>
            <Line />
            <Reveal>
              <h2 className="title">Escenas reales</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/portfolio" className="link-arrow">
              Portfolio completo
            </Link>
          </Reveal>
        </div>
        <Filmstrip photos={portfolio.slice(0, 9)} />
      </section>

      {/* SOBRE · retrato grande */}
      <section className="section about" id="sobre">
        <div className="container about__grid">
          <Reveal variant="scale-in" className="about__photo">
            <Image src={about.src} alt={about.alt} fill sizes="(min-width: 900px) 52vw, 100vw" />
          </Reveal>
          <div className="about__text">
            <span className="watermark watermark--inline" aria-hidden="true">
              01
            </span>
            <Reveal>
              <span className="eyebrow">El taller</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Un taller pequeño con <em>flores enormes</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Empezamos haciendo una rosa roja para un escaparate de San Valentín en Palma. La gente se paraba en la acera a
                hacerse fotos, y ahí entendimos que una flor a escala XXL cambia la forma en que se vive un espacio.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="muted">
                Hoy vestimos bodas, pop ups y fincas por toda la isla, pero seguimos trabajando igual: pocas piezas, mucho
                detalle y siempre a mano.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <Link href="/sobre-mi" className="btn">
                Nuestra historia
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS · tarjetas */}
      <section className="section section--surface" id="testimonios">
        <div className="container">
          <div className="section-head section-head--center">
            <Reveal>
              <span className="eyebrow eyebrow--center">Lo que nos dicen</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">Momentos WOW, contados por quien los vivió</h2>
            </Reveal>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section contact-home" id="contacto">
        <div className="container contact-home__grid">
          <div>
            <Line />
            <Reveal>
              <h2 className="title">Cuéntanos tu idea</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">
                Fecha, lugar y colores. Respondemos en menos de 48 horas con una primera propuesta. Si lo prefieres,{' '}
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-link">
                  escríbenos por WhatsApp
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <ContactForm compact />
            </Reveal>
          </div>
          <Reveal variant="scale-in" className="contact-home__photo">
            <Image src={contact.src} alt={contact.alt} fill sizes="(min-width: 900px) 40vw, 100vw" />
          </Reveal>
        </div>
      </section>
    </>
  )
}

function photoAlt(src: string) {
  return photo(src.replace('/photos/', '').replace('.webp', '')).alt
}
