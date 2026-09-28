import PageHero from '@/components/PageHero'
import Gallery from '@/components/Gallery'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import Testimonials from '@/components/Testimonials'
import { portfolio } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Portfolio · Bodas, photozones y escaparates',
  description:
    'Galería de bodas, ceremonias, photozones, pop ups y escaparates con flores gigantes hechas a mano por Giant Flowers en fincas y tiendas de Mallorca.',
  path: '/portfolio',
})

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        editorial
        eyebrow="Portfolio"
        lines={['Escenas que', <em key="p">se recuerdan</em>]}
        text="Bodas en fincas, sesiones junto a la piscina, mercados pop up y escaparates en el centro de Palma. Toca cualquier foto para verla en grande."
      />
      <section className="section section--tight">
        <div className="container">
          <Gallery photos={portfolio} />
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <div className="section-head section-head--center">
            <Reveal>
              <span className="eyebrow eyebrow--center">Detrás de las fotos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">Quien las vivió</h2>
            </Reveal>
          </div>
          <Testimonials limit={4} />
        </div>
      </section>
      <CtaBand surface={false} />
    </>
  )
}
