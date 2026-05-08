# P&P Media CR — Landing Page

Sitio web corporativo para **P&P Media CR**, partner oficial de NSIGN TV en Costa Rica. Construido con React + TypeScript + Tailwind CSS + GSAP + Leaflet.

---

## Stack

| Tecnología | Uso |
|---|---|
| React 18 + TypeScript | UI y lógica de componentes |
| Tailwind CSS | Utilidades de estilos |
| GSAP 3 + ScrollTrigger | Animaciones y horizontal scroll |
| Leaflet | Mapa interactivo |
| EmailJS | Envío de formulario de contacto |
| Vite | Bundler y dev server |

---

## Estructura del proyecto

```
pypmediacr/
├── public/
│   ├── images/
│   │   ├── restauracion.webp
│   │   ├── retail.webp
│   │   ├── hoteles.webp
│   │   ├── salud.webp
│   │   ├── supermercados.webp
│   │   ├── feature-01.webp
│   │   ├── feature-02.webp
│   │   ├── feature-03.webp
│   │   └── feature-04.webp
│   ├── hero-video.mp4        ← agregar video del cliente
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    ← Navbar fija con scroll detection
│   │   │   └── Footer.tsx    ← Footer con copyright y links
│   │   ├── sections/
│   │   │   ├── Hero.tsx      ← Video hero con animaciones GSAP
│   │   │   ├── HorizontalCards.tsx  ← Scroll horizontal pinned GSAP
│   │   │   ├── Features.tsx  ← 4 features con scroll animations
│   │   │   └── Contact.tsx   ← Formulario EmailJS + mapa Leaflet
│   │   └── ui/
│   │       └── MapEmbed.tsx  ← Componente Leaflet aislado
│   ├── data/
│   │   └── content.ts        ← Todo el copy y datos centralizados
│   ├── types/
│   │   └── index.ts          ← Tipos TypeScript compartidos
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## Setup

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Copiá `.env.example` a `.env` y completá tus credenciales de EmailJS:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Correr en desarrollo

```bash
npm run dev
```

### 4. Build para producción

```bash
npm run build
```

Output en `/dist`. Compatible con Vercel, Netlify y Railway.

---

## Configuración pendiente

### Video del Hero
Colocá el video del cliente en `public/hero-video.mp4`.
- Formato recomendado: H.264, sin audio
- Tamaño máximo recomendado: 15MB
- Sin el video, el hero muestra un gradiente oscuro de fallback

### Coordenadas del mapa
En `src/data/content.ts`, actualizá `coordinates` con la ubicación exacta del cliente:

```ts
coordinates: [LAT, LNG], // Pinares, Curridabat — ya configurado
```

### Template de EmailJS
El template debe usar estas variables exactas:
- `{{nombre}}` — nombre del remitente
- `{{correo}}` — email del remitente
- `{{mensaje}}` — mensaje

### Redes sociales
En `src/components/sections/Contact.tsx`, actualizá los `href` con las URLs reales de Instagram, Facebook y LinkedIn.

---

## Paleta de colores

| Variable CSS | Hex | Uso |
|---|---|---|
| `--color-bg` | `#0A0A0A` | Fondo base |
| `--color-primary` | `#F5F5F5` | Texto principal, headings |
| `--color-gold` | `#C9A96E` | Acento dorado, palabras clave |
| `--color-cream` | `#E8D5B7` | Texto secundario, párrafos |
| `--color-surface` | `#141414` | Cards, formularios, superficies |
| `--color-border` | `#1F1F1F` | Bordes sutiles |
| `--color-hover` | `#A67C52` | Botones en estado hover/press |

---

## Tipografía

- **Display / Headings:** `Syne` — geométrica, editorial
- **Body / Párrafos:** `DM Sans` — limpia, legible

Ambas se cargan desde Google Fonts en `index.html`.

---

## Secciones

| Sección | ID | Descripción |
|---|---|---|
| Hero | — | Video full-screen con animaciones de entrada GSAP |
| Industrias | `#industrias` | 5 cards con horizontal scroll pinned + hover expand |
| Servicios | `#servicios` | 4 features alternadas con scroll animations |
| Contacto | `#contacto` | Formulario EmailJS + mapa Leaflet dark theme |

---

## Notas de desarrollo

- Todo el copy está centralizado en `src/data/content.ts` — editá ahí sin tocar componentes
- Las imágenes de industrias van en `public/images/` con nombres en minúscula sin espacios
- El mapa usa tiles de OpenStreetMap con `filter: invert(1) hue-rotate(180deg)` para el tema oscuro
- GSAP ScrollTrigger se registra una sola vez por componente usando `gsap.context()` con cleanup en el return del `useEffect`

---

## Créditos

Desarrollado por **Hollow Solutions** para P&P Media CR.  
© 2025 P&P Media CR — Todos los derechos reservados.