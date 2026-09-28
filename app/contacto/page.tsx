import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'
import { photo, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Contacto · Pide tu propuesta',
  description:
    'Pide propuesta para flores gigantes en tu boda, evento o escaparate. Taller en Palma, montaje en toda Mallorca. Respuesta en menos de 48 horas.',
  path: '/contacto',
})

export default function ContactoPage() {
  const hero = photo('novios-arco-piedra')
  const side = photo('amapola-rosa-escalera')
  const ig = siteConfig.instagram.replace('@', '')
  return (
    <>
      <PageHero
        image={hero.src}
        alt={hero.alt}
        eyebrow="Contacto"
        lines={['Hablemos de', <em key="c">tus flores</em>]}
        text="Cuéntanos fecha, lugar y colores. Te respondemos en menos de 48 horas."
      />

      <section className="section">
        <div className="container contact">
          <div className="contact__form">
            <Line />
            <Reveal>
              <h2 className="title">Pide tu propuesta</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted">Cuanto más nos cuentes, más afinado será el primer boceto. Si tienes fotos de referencia, envíalas por WhatsApp.</p>
            </Reveal>
            <Reveal delay={0.16}>
              <ContactForm />
            </Reveal>
          </div>
          <aside className="contact__info">
            <Reveal variant="scale-in" className="contact__photo">
              <Image src={side.src} alt={side.alt} fill sizes="(min-width: 900px) 35vw, 100vw" />
            </Reveal>
            <Reveal>
              <h3>Directo</h3>
              <ul>
                <li>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer">
                    WhatsApp · respuesta rápida
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
                <li>
                  <a href={`https://www.instagram.com/${ig}/`} target="_blank" rel="noopener noreferrer">
                    Instagram {siteConfig.instagram}
                  </a>
                </li>
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--surface coverage">
        <span className="watermark" aria-hidden="true">
          Mallorca
        </span>
        <div className="container coverage__grid">
          <div>
            <Line />
            <Reveal>
              <h2 className="title">Zona de cobertura</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                Nuestro taller está en Palma y montamos en cualquier punto de Mallorca. El desplazamiento, el montaje y la
                recogida van incluidos en el presupuesto. Para eventos en Menorca o Ibiza, consúltanos.
              </p>
            </Reveal>
          </div>
          <ul className="coverage__list">
            {siteConfig.locations.map((l, i) => (
              <Reveal as="li" key={l} index={i}>
                {l}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
