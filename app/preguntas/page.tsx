import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { faqs, photo } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Preguntas frecuentes · Flores gigantes',
  description:
    'Materiales, exterior, alquiler, antelación y zonas de montaje. Resolvemos las dudas más comunes sobre nuestras flores gigantes para eventos en Mallorca.',
  path: '/preguntas',
})

export default function PreguntasPage() {
  const hero = photo('escalinata-amapolas-rosas')
  const side = photo('entrada-verja-flores')
  return (
    <>
      <PageHero
        image={hero.src}
        alt={hero.alt}
        eyebrow="Preguntas"
        lines={['Todo lo que', <em key="q">queríais saber</em>]}
      />
      <section className="section">
        <div className="container faq-layout">
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} index={i}>
                <details open={i === 0}>
                  <summary>
                    <span className="faq__num">0{i + 1}</span>
                    {f.q}
                  </summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal variant="scale-in" className="faq-layout__photo">
            <Image src={side.src} alt={side.alt} fill sizes="(min-width: 900px) 35vw, 100vw" />
          </Reveal>
        </div>
      </section>
      <CtaBand
        title={
          <>
            ¿Otra <em>duda</em>?
          </>
        }
        text="Escríbenos por WhatsApp o desde el formulario y te respondemos en persona."
      />
    </>
  )
}
