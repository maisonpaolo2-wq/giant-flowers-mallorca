// Contenido editable de la web. Los datos marcados como PENDIENTE son
// provisionales hasta que el cliente confirme (email, WhatsApp, dominio, nombre).

export const siteConfig = {
  name: 'Giant Flowers Mallorca',
  planner: 'El taller de Giant Flowers', // PENDIENTE: nombre de la fundadora
  domain: 'giantflowersmallorca.com', // PENDIENTE: dominio definitivo
  email: 'hola@giantflowersmallorca.com', // PENDIENTE
  whatsapp: '34600000000', // PENDIENTE: número real con prefijo
  instagram: '@giant.flowers.mallorca',
  locations: ['Palma', 'Llucmajor', 'Sóller', 'Pollença', 'Alcúdia', 'Santanyí', 'Andratx', 'Toda Mallorca'],
  tagline: 'Flores gigantes para tu momento WOW',
  bio: 'Giant Flowers es un pequeño taller en Palma que diseña y fabrica a mano flores XXL de papel y tejido para bodas, eventos y escaparates. Cada pétalo se corta, se tiñe y se modela uno a uno, y cada instalación se piensa para el lugar donde va a vivir: una escalinata de piedra en una finca, el borde de una piscina, el pasillo de una ceremonia o el cristal de una tienda. No trabajamos con catálogo cerrado. Partimos de vuestra paleta, del espacio y de la foto que queréis llevaros, y la convertimos en una escena que la gente no puede dejar de mirar.',
  bioShort:
    'Diseñamos y fabricamos a mano flores XXL para bodas, eventos y escaparates en Mallorca. Photozones, ceremonias y espacios que convierten cualquier rincón en tu momento WOW.',
  quote: 'Una flor normal se mira. Una flor de dos metros se recuerda.',
}

export const services: Array<{
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  includes: string[]
}> = [
  {
    title: 'Photozones y photocalls',
    slug: 'photozones',
    description:
      'Escenas completas con flores gigantes, arcos y fondos para que cada invitado quiera su foto.',
    longDescription:
      'Diseñamos el rincón más fotografiado de tu evento. Combinamos flores XXL de distintas alturas con arcos, paneles y base vegetal para crear un fondo con profundidad que funciona igual de bien en móvil que con cámara profesional. Pensamos la luz del lugar, el recorrido de los invitados y la hora de la foto para que la escena tenga sentido desde todos los ángulos.',
    image: '/photos/arco-flores-rosas-jardin.webp',
    includes: ['Diseño a medida según paleta', 'Arco o panel de fondo', 'Base vegetal y montaje', 'Recogida tras el evento'],
  },
  {
    title: 'Bodas y ceremonias',
    slug: 'bodas',
    description:
      'Pasillos, altares y escalinatas vestidos con flores a escala XXL que no se marchitan con el sol.',
    longDescription:
      'Una ceremonia al aire libre en Mallorca pide flores que aguanten el sol de junio y el viento de la tarde. Nuestras piezas enmarcan el pasillo, el altar o la entrada de la finca con una presencia que las flores naturales no alcanzan, y después pueden pasar al cóctel o a la zona de fotos. Coordinamos horarios con vuestra wedding planner y con el equipo de la finca.',
    image: '/photos/pasillo-ceremonia-amapolas.webp',
    includes: ['Pasillo y altar', 'Coordinación con planner y finca', 'Reubicación ceremonia → cóctel', 'Piezas resistentes al exterior'],
  },
  {
    title: 'Escaparates y marcas',
    slug: 'escaparates',
    description:
      'Instalaciones para tiendas, hoteles y pop ups que paran a quien pasa por la calle.',
    longDescription:
      'San Valentín, primavera, una apertura o un pop up de fin de semana. Creamos instalaciones para escaparates, recepciones de hotel y stands que atraen miradas desde la acera y se comparten en redes. Adaptamos colores a la identidad de la marca y medimos el espacio para que cada flor encaje sin estorbar el paso ni tapar el producto.',
    image: '/photos/escaparate-flores-blancas.webp',
    includes: ['Medición del espacio', 'Colores de marca', 'Montaje fuera de horario', 'Instalaciones de temporada'],
  },
  {
    title: 'Piezas a medida y alquiler',
    slug: 'piezas',
    description:
      'Flores sueltas o en ramo gigante para sesiones de fotos, casas y celebraciones pequeñas.',
    longDescription:
      'No hace falta una gran boda para tener una flor gigante. Alquilamos piezas sueltas para sesiones de fotos, cumpleaños y pedidas, y fabricamos flores por encargo para quien quiere quedársela en casa. Elegís especie, color y altura, y os la entregamos lista para colocar en cualquier punto de Mallorca.',
    image: '/photos/flores-rosas-cesped.webp',
    includes: ['Alquiler por días', 'Encargos para casa', 'Sesiones de fotos', 'Entrega en toda la isla'],
  },
]

export const processSteps: Array<{ number: number; title: string; description: string }> = [
  {
    number: 1,
    title: 'Nos contáis la idea',
    description:
      'Por WhatsApp, Instagram o el formulario. Fecha, lugar, paleta y alguna foto que os guste. Respondemos en menos de 48 horas.',
  },
  {
    number: 2,
    title: 'Boceto y propuesta',
    description:
      'Preparamos un boceto de la escena con especies, colores y alturas, y un presupuesto cerrado. Ajustamos hasta que os encaje.',
  },
  {
    number: 3,
    title: 'Hecho a mano en el taller',
    description:
      'Cortamos, teñimos y modelamos cada pétalo en Palma. Os enseñamos el avance por fotos para que veáis crecer vuestras flores.',
  },
  {
    number: 4,
    title: 'Montaje y recogida',
    description:
      'Llegamos antes que nadie, montamos la escena y la dejamos perfecta para la primera foto. Al terminar, la recogemos nosotros.',
  },
]

export const testimonials: Array<{ name: string; date: string; location: string; text: string }> = [
  {
    name: 'Laura y Tom',
    date: 'Junio 2026',
    location: 'Finca en Santa Maria del Camí',
    text: 'Queríamos algo diferente para el pasillo y acabamos con amapolas blancas más altas que Tom. Después de la ceremonia las movieron junto a la piscina y ahí se hizo la mitad del álbum. Tres meses después los invitados todavía nos mandan fotos con ellas.',
  },
  {
    name: 'Carolina Mas',
    date: 'Febrero 2026',
    location: 'Tienda en Palma',
    text: 'Para San Valentín pusimos rosas rojas gigantes en el escaparate y la gente se paraba a hacerse fotos en la acera. Lo montaron un domingo por la tarde para no cerrar la tienda y midieron el hueco al centímetro. Repetimos en primavera seguro.',
  },
  {
    name: 'Sofía R.',
    date: 'Julio 2026',
    location: 'Pop Up Market, Llucmajor',
    text: 'Organizaba un mercado de dos días y necesitaba un punto de foto que se viera desde la entrada. Nos propusieron un muro de flores blancas en la fachada de piedra y fue lo que todo el mundo subió a stories. Puntuales, limpios y encantadores con los expositores.',
  },
  {
    name: 'Anna y Marc',
    date: 'Abril 2026',
    location: 'Boda en Sóller',
    text: 'Teníamos una escalinata preciosa pero vacía. Pusieron amapolas en rosa y blanco a distintas alturas, con flores silvestres en la base, y parecía que habían crecido allí. El boceto que nos enseñaron fue exactamente lo que vimos el día de la boda.',
  },
]

type Photo = {
  src: string
  alt: string
  featured: boolean
  orientation: 'landscape' | 'portrait'
}

export const photos: Photo[] = [
  {
    src: '/photos/terraza-amapolas-blancas.webp',
    alt: 'Amapolas blancas gigantes sobre una terraza de piedra frente a una casa mallorquina con buganvilla',
    featured: true,
    orientation: 'portrait',
  },
  {
    src: '/photos/novia-piscina-amapolas.webp',
    alt: 'Novia sentada junto a una piscina con una instalación de amapolas blancas XXL al atardecer',
    featured: true,
    orientation: 'portrait',
  },
  {
    src: '/photos/novios-escalinata-flores.webp',
    alt: 'Pareja de novios en una escalinata entre palmeras y flores blancas gigantes',
    featured: true,
    orientation: 'portrait',
  },
  {
    src: '/photos/pasillo-ceremonia-amapolas.webp',
    alt: 'Pasillo de ceremonia con sillas blancas y amapolas gigantes junto al arco floral',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/arco-flores-rosas-jardin.webp',
    alt: 'Arco blanco en un jardín con rosas y amapolas gigantes en tonos rosa empolvado',
    featured: false,
    orientation: 'landscape',
  },
  {
    src: '/photos/flores-rosas-cesped.webp',
    alt: 'Ramo de flores gigantes rosas y melocotón sobre el césped de una finca',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/barra-lirios-rosas.webp',
    alt: 'Barra de bienvenida blanca con lirios rosas gigantes en el patio de una finca',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/pop-up-market-zoetry.webp',
    alt: 'Fachada de piedra con flores blancas gigantes para un Pop Up Market en Llucmajor',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/novios-arco-piedra.webp',
    alt: 'Novios abrazados junto a un arco de piedra rodeados de flores blancas XXL',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/amapola-rosa-escalera.webp',
    alt: 'Amapola coral gigante junto a una escalera de piedra con flores silvestres',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/escalinata-amapolas-rosas.webp',
    alt: 'Escalinata de jardín con amapolas rosas y blancas a distintas alturas',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/entrada-verja-flores.webp',
    alt: 'Entrada con verja de hierro enmarcada por flores blancas gigantes',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/sesion-piscina-flores.webp',
    alt: 'Sesión de fotos junto al agua con una nube de amapolas blancas de papel',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/escaparate-flores-blancas.webp',
    alt: 'Escaparate de una tienda en Palma con rosas blancas y rosas empolvadas gigantes',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/rosa-roja-gigante.webp',
    alt: 'Detalle de una rosa roja gigante de papel con los pétalos modelados a mano',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/artesana-rosas-rojas.webp',
    alt: 'La artesana de Giant Flowers colocando rosas rojas gigantes en un escaparate de Palma',
    featured: true,
    orientation: 'portrait',
  },
  {
    src: '/photos/entrega-flores-palma.webp',
    alt: 'Entrega a pie de flores blancas gigantes por una calle de Palma',
    featured: false,
    orientation: 'portrait',
  },
  {
    src: '/photos/jardin-escalinata-piedra.webp',
    alt: 'Vista general de un jardín con escalinata de piedra y amapolas gigantes',
    featured: false,
    orientation: 'portrait',
  },
]

export const photo = (name: string) => {
  const p = photos.find((x) => x.src === `/photos/${name}.webp`)
  if (!p) throw new Error(`Foto no encontrada: ${name}`)
  return p
}

// Galería del portfolio (12 fotos). Las restantes se usan como cabeceras.
export const portfolio = [
  'novia-piscina-amapolas',
  'arco-flores-rosas-jardin',
  'novios-escalinata-flores',
  'barra-lirios-rosas',
  'pasillo-ceremonia-amapolas',
  'pop-up-market-zoetry',
  'escalinata-amapolas-rosas',
  'novios-arco-piedra',
  'flores-rosas-cesped',
  'entrada-verja-flores',
  'sesion-piscina-flores',
  'escaparate-flores-blancas',
  'amapola-rosa-escalera',
  'rosa-roja-gigante',
].map(photo)

export const faqs: Array<{ q: string; a: string }> = [
  {
    q: '¿De qué están hechas las flores?',
    a: 'De papel de alto gramaje, papel crepé y tejidos técnicos, teñidos y modelados a mano. Los tallos llevan estructura interna y base con peso para que sean estables.',
  },
  {
    q: '¿Aguantan en exterior?',
    a: 'Sí, están pensadas para ceremonias y cócteles al aire libre en Mallorca. Con lluvia o viento fuerte las retiramos o las movemos a cubierto, siempre lo hablamos antes.',
  },
  {
    q: '¿Se pueden alquilar o hay que comprarlas?',
    a: 'Las dos cosas. Las instalaciones para eventos suelen ser en alquiler con montaje y recogida incluidos. Si queréis quedaros una pieza, la fabricamos por encargo.',
  },
  {
    q: '¿Con cuánta antelación hay que reservar?',
    a: 'Para bodas en temporada alta, de mayo a octubre, recomendamos de 3 a 6 meses. Para escaparates y piezas sueltas suele bastar con 3 o 4 semanas.',
  },
  {
    q: '¿Trabajáis en toda la isla?',
    a: 'Sí. El taller está en Palma y montamos en cualquier punto de Mallorca, de Andratx a Capdepera. El desplazamiento se incluye en el presupuesto.',
  },
  {
    q: '¿Podemos elegir colores y especies?',
    a: 'Claro. Amapolas, rosas, peonías, lirios, ranúnculos o anémonas en la paleta que queráis. Enviamos muestras de color si hace falta ajustar con el resto de la decoración.',
  },
]
