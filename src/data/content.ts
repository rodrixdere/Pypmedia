import type { CardItem, Feature, ContactInfo } from '../types'

export const heroContent = {
  tagline: 'Digital Signage — Partner oficial NSIGN TV en Costa Rica',
  headline: 'Tu pantalla.',
  headlineAccent: 'Tu mensaje.',
  headlineSuffix: 'Sin límites.',
  subheadline:
    'Si buscás el efecto WOW en tus clientes, somos la solución. Administrá tu contenido digital en tiempo real, desde cualquier parte del mundo.',
  cta: 'Conoce nuestras soluciones',
  ctaSecondary: 'Hablemos',
}

export const cards: CardItem[] = [
  {
    id: 1,
    title: 'Restauración',
    description: 'Menús digitales de alto impacto. Actualizá precios y promociones al instante sin intermediarios.',
    tag: 'Gastronomía',
    image: './src/assets/HorizontalCard/Restauracion.png',
  },
  {
    id: 2,
    title: 'Retail',
    description: 'Publicidad digital y comunicación de promociones en tiempo real desde cualquier sucursal.',
    tag: 'Comercio',
    image: './src/assets/HorizontalCard/Retail.png',
  },
  {
    id: 3,
    title: 'Hoteles',
    description: 'Bienvenida personalizada, información de servicios y señalización para una experiencia huésped de primer nivel.',
    tag: 'Hospitalidad',
    image: './src/assets/HorizontalCard/Hoteles.png',
  },
  {
    id: 4,
    title: 'Salud',
    description: 'Administración de turnos y filas con comunicación visual y auditiva para guiar a tus clientes.',
    tag: 'Salud',
    image: './src/assets/HorizontalCard/Salud.png',
  },
  {
    id: 5,
    title: 'Supermercados',
    description: 'Señalización dinámica de precios, promociones y publicidad en punto de venta para maximizar ventas.',
    tag: 'Supermercados',
    image: './src/assets/HorizontalCard/Supermercado.png',
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
      image: './src/assets/Features/Catalogos.png',
  },
  {
    id: 2,
    number: '02',
    title: 'Ajustes dinámicos en tiempo real',
    highlight: 'Mayor impacto.',
    description:
      'Ajustá los elementos de tu interés de forma dinámica para lograr un mayor impacto. Realizá cambios en tiempo real sin intermediarios ni demoras innecesarias — vos tenés el control.',
      image: './src/assets/Features/Display.png',
  },
  {
    id: 3,
    number: '03',
    title: 'Administración de filas',
    highlight: 'Clientes siempre guiados.',
    description:
      'Administrá turnos o filas de acuerdo a las reglas propias de tu negocio. Generá comodidad y claridad con comunicación visual y auditiva para que tus clientes se sientan siempre guiados.',
      image: './src/assets/Features/Ofertas.png',
  },
  {
    id: 4,
    number: '04',
    title: 'Display de contenido variable',
    highlight: 'A tu horario.',
    description:
      'Administrá el display de tu contenido variable en los horarios o pantallas que vos decidás, a la hora que seleccionés y que creas más conveniente para tu negocio.',
      image: './src/assets/Features/Precios.png',
  },
]

export const contactInfo: ContactInfo = {
  instagram: '@pypmediacr',
  facebook: 'P&P Media CR',
  linkedin: 'P&P Media CR',
  phone: '+506 6066-1122',
  hours: 'Lunes a Viernes\n9:00 a.m. — 5:00 p.m.',
  address: 'Pinares, Curridabat\nSan José 11803, Costa Rica',
  coordinates: [9.9006, -84.0326], // Pinares, Curridabat
}