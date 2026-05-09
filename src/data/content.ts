import type { CardItem, Feature, ContactInfo } from '../types'

// HorizontalCard images
import imgRestauracion from '../assets/HorizontalCard/Restauracion.png'
import imgRetail from '../assets/HorizontalCard/Retail.png'
import imgHoteles from '../assets/HorizontalCard/Hoteles.png'
import imgSalud from '../assets/HorizontalCard/Salud.png'
import imgSupermercado from '../assets/HorizontalCard/Supermercado.png'

// Feature images
import imgCatalogos from '../assets/Features/Catalogos.png'
import imgDisplay from '../assets/Features/Display.png'
import imgOfertas from '../assets/Features/Ofertas.png'
import imgPrecios from '../assets/Features/Precios.png'
import imgAudiencia from '../assets/Features/Audiencia.png'
import vidSincro from '../assets/Features/Sincro.mp4'

export const heroContent = {
  tagline: 'Digital Signage — Expertos en Cartelería digital en Costa Rica',
  headline: 'Tu pantalla.',
  headlineAccent: 'Tu mensaje.',
  headlineSuffix: 'Sin límites.',
  subheadline:
    'Contenido dinámico, cartelería digital inteligente, analítica en tiempo real, CMS avanzado, señalización digital basada en datos',
  cta: 'Conoce nuestras soluciones',
  ctaSecondary: 'Hablemos',
}

export const cards: CardItem[] = [
  {
    id: 1,
    title: 'Restauración',
    description: 'Menús digitales de alto impacto. Actualizá precios y promociones al instante sin intermediarios.',
    tag: 'Gastronomía',
    image: imgRestauracion,
  },
  {
    id: 2,
    title: 'Retail',
    description: 'Publicidad digital y comunicación de promociones en tiempo real desde cualquier sucursal.',
    tag: 'Comercio',
    image: imgRetail,
  },
  {
    id: 3,
    title: 'Hoteles',
    description: 'Bienvenida personalizada, información de servicios y señalización para una experiencia huésped de primer nivel.',
    tag: 'Hospitalidad',
    image: imgHoteles,
  },
  {
    id: 4,
    title: 'Salud',
    description: 'Administración de turnos y filas con comunicación visual y auditiva para guiar a tus clientes.',
    tag: 'Salud',
    image: imgSalud,
  },
  {
    id: 5,
    title: 'Supermercados',
    description: 'Señalización dinámica de precios, promociones y publicidad en punto de venta para maximizar ventas.',
    tag: 'Supermercados',
    image: imgSupermercado,
  },
]

export const features: Feature[] = [
  {
    id: 1,
    number: '01',
    title: 'Administración de contenido digital',
    highlight: 'Sin intermediarios.',
    description:
      'Administrá tu contenido digital y presentalo a tus clientes al instante sin demoras. Desde tu PC y desde cualquier parte del mundo, con control total sobre lo que se muestra en pantalla.',
    image: imgOfertas,
  },
  {
    id: 2,
    number: '02',
    title: 'Ajustes dinámicos en tiempo real',
    highlight: 'Mayor impacto.',
    description:
      'Ajustá los elementos de tu interés de forma dinámica para lograr un mayor impacto. Realizá cambios en tiempo real sin intermediarios ni demoras innecesarias — vos tenés el control.',
    image: imgPrecios,
  },
  {
    id: 3,
    number: '03',
    title: 'Administración de filas',
    highlight: 'Clientes siempre guiados.',
    description:
      'Administrá turnos o filas de acuerdo a las reglas propias de tu negocio. Generá comodidad y claridad con comunicación visual y auditiva para que tus clientes se sientan siempre guiados.',
    image: imgCatalogos,
  },
  {
    id: 4,
    number: '04',
    title: 'Display de contenido variable',
    highlight: 'A tu horario.',
    description:
      'Administrá el display de tu contenido variable en los horarios o pantallas que vos decidás, a la hora que seleccionés y que creas más conveniente para tu negocio.',
    image: imgDisplay,
  },
  {
    id: 5,
    number: '05',
    title: 'Efecto SINCRO y Sensores',
    highlight: 'Experiencias que sorprenden.',
    description:
      'Creamos experiencias que reaccionan en tiempo real. Nuestro efecto sincro, integrado con sensores Nexmosphere, conecta cada interacción del usuario con contenidos visuales dinámicos y perfectamente sincronizados, transformando el espacio en una experiencia viva que atrae, sorprende y genera resultados medibles.',
    image: vidSincro,
  },
  {
    id: 6,
    number: '06',
    title: 'Inteligencia de Audiencia en Tiempo Real',
    highlight: 'El mensaje correcto, a la persona correcta.',
    description:
      'Convierte tus pantallas en herramientas de venta activa con data analytics que analiza el entorno en tiempo real (género , edad, estado de ánimo) para cambiar el contenido automáticamente y mostrar el mensaje preciso al cliente adecuado. Registra la data y presenta la efectividad de tus campañas al instante.',
    image: imgAudiencia,
  },
]

export const contactInfo: ContactInfo = {
  instagram: '@pypmediacr',
  facebook: 'PYPMediaCR',
  linkedin: '',
  phone: '+506 6066-1122',
  hours: 'Lunes a Viernes\n8:00 a.m. — 5:00 p.m.',
  address: 'Pinares, Curridabat\nSan José 11803, Costa Rica',
  coordinates: [9.9006, -84.0326],
}