import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/content/data'
import { PoppyMark } from './Logo'
import { waLink } from './WhatsAppButton'

export default function Footer() {
  const ig = siteConfig.instagram.replace('@', '')
  return (
    <footer className="footer">
      <div className="footer__bg">
        <Image
          src="/photos/jardin-escalinata-piedra.webp"
          alt="Jardín mallorquín con escalinata de piedra y amapolas gigantes"
          fill
          sizes="100vw"
        />
      </div>
      <div className="container">
        <PoppyMark size={52} className="footer__mark" />
        <p className="footer__quote">{siteConfig.quote}</p>
        <p className="footer__sig">{siteConfig.planner}</p>
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__name">Giant Flowers</span>
            <p>Flores XXL hechas a mano en Palma para bodas, eventos y escaparates en toda Mallorca.</p>
          </div>
          <div>
            <h4>Explorar</h4>
            <ul>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/sobre-mi">El taller</Link>
              </li>
              <li>
                <Link href="/preguntas">Preguntas</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Hablemos</h4>
            <ul>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={`https://www.instagram.com/${ig}/`} target="_blank" rel="noopener noreferrer">
                  {siteConfig.instagram}
                </a>
              </li>
              <li>
                <Link href="/contacto">Formulario</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span>Event decor · Photozones · Handcrafted XXL flowers</span>
        </div>
      </div>
    </footer>
  )
}
