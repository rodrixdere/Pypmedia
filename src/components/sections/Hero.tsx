import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { heroContent } from '../../data/content'
import heroVideo from '../../assets/Hero/hero.mp4'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLSpanElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const targets = [
      tagRef.current,
      line1Ref.current,
      line2Ref.current,
      line3Ref.current,
      subRef.current,
      ctaRef.current,
    ].filter(Boolean)

    // Set initial state explicitly before animating
    gsap.set(targets, { opacity: 0, y: 30 })

    const tl = gsap.timeline({ delay: 0.2 })

    tl.to(tagRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
      .to(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
        },
        '-=0.3'
      )
      .to(
        subRef.current,
        {
          opacity: 0.85,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.4'
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.35'
      )

    return () => {
      tl.kill()
      // Ensure elements are visible if component unmounts mid-animation
      gsap.set(targets, { clearProps: 'all' })
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-end overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Fallback background (visible when no video) */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1c1408 50%, #0A0A0A 100%)',
          zIndex: 0,
        }}
      />

      {/* Gradient overlay — darkens bottom so text is always readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.15) 75%, transparent 100%)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28" style={{ zIndex: 3 }}>
        <div className="max-w-3xl">

          <span ref={tagRef} className="section-label mb-2 block">
            {heroContent.tagline}
          </span>

          <h1
            className="font-display font-bold leading-none mb-6 [text-shadow:0_2px_20px_rgba(0,0,0,0.8),0_4px_40px_rgba(0,0,0,0.6)]"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            <span ref={line1Ref} className="block" style={{ color: 'var(--color-primary)' }}>
              {heroContent.headline}
            </span>
            <span ref={line2Ref} className="block gold-text">
              {heroContent.headlineAccent}
            </span>
            <span ref={line3Ref} className="block" style={{ color: 'var(--color-primary)' }}>
              {heroContent.headlineSuffix}
            </span>
          </h1>

          <p
            ref={subRef}
            className="font-body text-base lg:text-lg leading-relaxed mb-10 max-w-xl [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ color: 'var(--color-cream)' }}
          >
            {heroContent.subheadline}
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a href="#industrias" className="btn-primary">
              {heroContent.cta}
            </a>
            <a href="#contacto" className="btn-secondary">
              {heroContent.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2"
        style={{ zIndex: 3 }}
      >
        <span
          className="font-display text-xs tracking-[0.25em] uppercase"
          style={{ color: 'var(--color-cream)', opacity: 0.4, writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, var(--color-gold), transparent)' }}
        />
      </div>
    </section>
  )
}