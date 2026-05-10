import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MisionVision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
      });
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.from(rightRef.current, {
        opacity: 0,
        x: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="py-24 lg:py-36 px-6 lg:px-12"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-16">
          <span className="section-label block mb-4">Nosotros</span>
          <h2
            className="font-display font-bold max-w-2xl leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--color-primary)",
            }}
          >
            Quiénes somos y <span className="gold-text">hacia dónde vamos</span>
          </h2>
        </div>

        {/* Misión + Visión */}
        {/* Misión + Visión */}
        <div className="flex flex-col lg:flex-row">
          {/* Misión */}
          <div ref={leftRef} className="flex-1 py-4 lg:py-0 lg:pr-16">
            <span className="section-label block mb-4">Misión</span>
            <div
              className="mb-4"
              style={{
                width: "32px",
                height: "1px",
                background: "var(--color-gold)",
              }}
            />
            <p className="font-display font-semibold text-xl mb-5 gold-text">
              Soluciones que generan impacto real.
            </p>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "var(--color-cream)", opacity: 0.8 }}
            >
              Brindamos soluciones de Digital Signage de alto valor agregado que
              facilitan la vida de nuestros clientes y los ayudan a generar
              contenidos de alto rendimiento e impacto, desde publicidad digital
              hasta menús digitales.
            </p>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px lg:w-px lg:h-auto flex-shrink-0 my-10 lg:my-0"
            style={{ background: "var(--color-border)" }}
          />

          {/* Visión */}
          <div ref={rightRef} className="flex-1 py-4 lg:py-0 lg:pl-16">
            <span className="section-label block mb-4">Visión</span>
            <div
              className="mb-4"
              style={{
                width: "32px",
                height: "1px",
                background: "var(--color-gold)",
              }}
            />
            <p className="font-display font-semibold text-xl mb-5 gold-text">
              Un equipo enfocado en tu éxito.
            </p>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "var(--color-cream)", opacity: 0.8 }}
            >
              Somos un equipo de profesionales orientados a brindarte un alto
              nivel de servicio, acompañándote en el desarrollo de contenido y
              la administración de la plataforma para que tus pantallas generen
              el máximo impacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
