import logoImg from "../../assets/Hero/logo.png";

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-6 px-6 lg:px-12"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center group">
          <img src={logoImg} alt="P&P Media CR" className="h-12 w-auto" />
        </a>
        </div>

        <p
          className="font-body text-xs text-center"
          style={{ color: 'var(--color-cream)', opacity: 0.4 }}
        >
          Copyright © {year} P&P Media CR — Todos los derechos reservados.
        </p>

        <div className="flex gap-6 items-center">
          <a
            href="mailto:rhorvilleur@pypmediacr.com"
            className="font-body text-xs transition-colors duration-200"
            style={{ color: 'var(--color-cream)', opacity: 0.4 }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLElement).style.color = 'var(--color-gold)'
              ;(e.target as HTMLElement).style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLElement).style.color = 'var(--color-cream)'
              ;(e.target as HTMLElement).style.opacity = '0.4'
            }}
          >
            rhorvilleur@pypmediacr.com
          </a>
          <a
            href="https://wa.me/50660661122"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs transition-colors duration-200"
            style={{ color: 'var(--color-cream)', opacity: 0.4 }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLElement).style.color = 'var(--color-gold)'
              ;(e.target as HTMLElement).style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLElement).style.color = 'var(--color-cream)'
              ;(e.target as HTMLElement).style.opacity = '0.4'
            }}
          >
            WhatsApp
          </a>
          <a
            href="/privacy-policy"
            className="font-body text-xs transition-colors duration-200"
            style={{ color: 'var(--color-cream)', opacity: 0.4 }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLElement).style.color = 'var(--color-gold)'
              ;(e.target as HTMLElement).style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLElement).style.color = 'var(--color-cream)'
              ;(e.target as HTMLElement).style.opacity = '0.4'
            }}
          >
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}