import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import Separator from '@/components/Separator'
import { photo, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'El taller · Flores XXL hechas a mano en Palma',
  description:
    'Conoce el taller de Giant Flowers en Palma de Mallorca: cómo fabricamos a mano cada flor gigante de papel y tejido para bodas, eventos y escaparates.',
  path: '/sobre-mi',
})

const values = [
  {
    t: 'Escala',
    d: 'Pensamos cada flor para el espacio donde va a vivir. Una pieza que se ve desde la entrada de la finca, no un adorno más.',
  },
  {
    t: 'Oficio',
    d: 'Nada sale de un molde. Cortamos, teñimos y modelamos a mano cada pétalo, y eso se nota de cerca y en cámara.',
  },
  {
    t: 'Luz de Mallorca',
    d: 'Elegimos papeles y tonos que funcionan con el sol de la isla: el blanco de mediodía, el rosa del atardecer.',
  },
  {
    t: 'Cercanía',
    d: 'Somos un equipo pequeño. Quien os responde el primer mensaje es quien monta vuestras flores el día del evento.',
  },
]

export default function SobreMiPage() {
  const hero = photo('entrega-flores-palma')
  const portrait = photo('artesana-rosas-rojas')
  const sep = photo('sesion-piscina-flores')
  const detail = photo('escaparate-flores-blancas')
  return (
    <>
      <PageHero
        image={hero.src}
        alt={hero.alt}
        eyebrow="El taller"
        lines={['Del papel', <em key="a">al asombro</em>]}
        text="Un pequeño taller en Palma donde las flores crecen hasta superar a quien las mira."
      />

      <section className="section story">
        <div className="container story__grid">
          <Reveal variant="scale-in" className="story__photo">
            <Image src={portrait.src} alt={portrait.alt} fill sizes="(min-width: 900px) 55vw, 100vw" />
          </Reveal>
          <div className="story__text">
            <Line />
            <Reveal>
              <h2 className="title">
                Todo empezó con <em>una rosa roja</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead dropcap">{siteConfig.bio}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                La primera fue para un escaparate de San Valentín. Medía más que la puerta de la tienda y la llevamos a pie
                por las calles de Palma, con la gente girándose a mirarla. Aquella tarde la tienda se llenó de fotos y de
                preguntas, y entendimos que no estábamos haciendo decoración, sino recuerdos.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="muted">
                Desde entonces hemos vestido escalinatas en Sóller, piscinas en fincas del interior, fachadas de piedra para
                mercados pop up y pasillos de ceremonia frente al mar. Cada proyecto empieza igual: con una conversación y un
                boceto a mano.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Separator image={sep.src} alt={sep.alt}>
        <p className="separator__quote">
          Poco volumen, <em>mucho detalle</em>, siempre a mano.
        </p>
      </Separator>

      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <Line />
            <Reveal>
              <h2 className="title">Lo que nos importa</h2>
            </Reveal>
          </div>
          <div className="values">
            {values.map((v, i) => (
              <Reveal key={v.t} index={i} className="value">
                <span className="value__num">0{i + 1}</span>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <Reveal>
              <span className="eyebrow">Materiales</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">Papel, tejido y paciencia</h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Trabajamos con papel de alto gramaje, papel crepé italiano y tejidos técnicos que aguantan el exterior. Los
                tallos llevan estructura interna y una base con peso para que las flores se mantengan firmes con la brisa de la
                tarde.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="muted">
                Las piezas se pueden reutilizar temporada tras temporada, por eso gran parte de nuestro trabajo es en alquiler:
                menos residuos y más momentos WOW por flor.
              </p>
            </Reveal>
          </div>
          <Reveal variant="scale-in" className="split__photo">
            <Image src={detail.src} alt={detail.alt} fill sizes="(min-width: 900px) 45vw, 100vw" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Pasa a <em>conocernos</em>
          </>
        }
        text="Escríbenos y quedamos en el taller de Palma para ver flores de cerca, tocar papeles y elegir colores."
      />
    </>
  )
}
