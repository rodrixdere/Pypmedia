import { useEffect, useRef, useState } from "react";
import logoImg from "../../assets/Hero/logo.png";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10, 10, 10, 0.92)"
          : "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1F1F1F" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img src={logoImg} alt="P&P Media CR" className="h-20 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm transition-colors duration-200 [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]"
                style={{ color: "var(--color-cream)", opacity: 0.7 }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--color-gold)";
                  (e.target as HTMLElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--color-cream)";
                  (e.target as HTMLElement).style.opacity = "0.7";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="btn-primary hidden md:inline-flex text-xs py-2 px-5"
        >
          Hablemos
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--color-primary)",
              transform: menuOpen
                ? "rotate(45deg) translate(2px, 2px)"
                : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--color-primary)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--color-primary)",
              transform: menuOpen
                ? "rotate(-45deg) translate(2px, -2px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? "300px" : "0",
          background: "rgba(10,10,10,0.97)",
          borderTop: menuOpen ? "1px solid var(--color-border)" : "none",
        }}
      >
        <ul className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-base tracking-wide"
                style={{ color: "var(--color-cream)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="btn-primary text-xs"
              onClick={() => setMenuOpen(false)}
            >
              Hablemos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
