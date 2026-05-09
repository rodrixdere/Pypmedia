import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cards } from '../../data/content'
import type { CardItem } from '../../types'

gsap.registerPlugin(ScrollTrigger)

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const BASE_W = isMobile ? 240 : 350
const BASE_H = isMobile ? 320 : 420
const EXPANDED_W = isMobile ? 280 : 500
const EXPANDED_H = isMobile ? 480 : 620
const DESC_H = EXPANDED_H - BASE_H

function Card({ card, index }: { card: CardItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      width: EXPANDED_W,
      height: EXPANDED_H,
      duration: 0.45,
      ease: 'power3.out',
    })
    gsap.to(titleRef.current, {
      y: -6,
      duration: 0.35,
      ease: 'power2.out',
    })
    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', delay: 0.22 }
    )
  }

  const handleMouseLeave = () => {
    gsap.to(descRef.current, {
      opacity: 0,
      y: 8,
      duration: 0.15,
      ease: 'power2.in',
    })
    gsap.to(titleRef.current, {
      y: 0,
      duration: 0.3,
      ease: 'power3.inOut',
      delay: 0.05,
    })
    gsap.to(cardRef.current, {
      width: BASE_W,
      height: BASE_H,
      duration: 0.4,
      ease: 'power3.inOut',
      delay: 0.05,
    })
  }

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 cursor-pointer overflow-hidden flex flex-col"
      style={{
        width: BASE_W,
        height: BASE_H,
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image — fixed height, never changes */}
      <div className="relative flex-shrink-0" style={{ height: BASE_H }}>
        {card.image ? (
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, #1a1a14 0%, #0f0f0a 100%)` }}
          />
        )}

        {/* Gradient so title is always readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.05) 55%, transparent 100%)',
          }}
        />

        {/* Title — always visible at bottom of image */}
        <div
          ref={titleRef}
          className="absolute bottom-5 left-0 right-0 px-5"
        >
          <span
            className="font-display text-xs tracking-[0.2em] uppercase block mb-1"
            style={{ color: 'var(--color-gold)', opacity: 0.8 }}
          >
            {card.tag}
          </span>
          <h3
            className="font-display font-bold text-lg leading-tight"
            style={{ color: 'var(--color-primary)' }}
          >
            {card.title}
          </h3>
        </div>
      </div>

      {/* Description panel — lives below image, revealed when card expands */}
      <div
        ref={descRef}
        className="flex-shrink-0 px-5 pt-5 pb-4"
        style={{
          opacity: 0,
          background: 'var(--color-surface)',
          height: DESC_H,
        }}
      >
        <div
          className="mb-3"
          style={{ width: '24px', height: '1px', background: 'var(--color-gold)' }}
        />
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: 'var(--color-cream)', opacity: 0.85 }}
        >
          {card.description}
        </p>
      </div>
    </div>
  )
}

export default function HorizontalCards() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      gsap.from(labelRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: { trigger: section, start: 'top 80%' },
      })

      const getDistance = () => track.scrollWidth - window.innerWidth + 96

      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      gsap.from(track.querySelectorAll('.card-item'), {
        opacity: 0,
        x: 50,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 70%' },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="industrias"
      className="horizontal-scroll-container"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div ref={labelRef} className="px-6 lg:px-12 mb-10 flex items-end justify-between">
          <div>
            <span className="section-label block mb-3">Industrias</span>
            <h2
              className="font-display font-bold"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--color-primary)' }}
            >
              Soluciones para{' '}
              <span className="gold-text">cada sector</span>
            </h2>
          </div>
        </div>

        {/* Cards track — items-center so expanded card grows from center */}
        <div
          ref={trackRef}
          className="flex items-center gap-4 px-6 lg:px-12"
          style={{ willChange: 'transform' }}
        >
          {cards.map((card, i) => (
            <div key={card.id} className="card-item flex-shrink-0">
              <Card card={card} index={i} />
            </div>
          ))}
          <div className="flex-shrink-0 w-12" />
        </div>

        {/* Progress ticks */}
        <div className="px-6 lg:px-12 mt-8 flex items-center gap-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="h-px"
              style={{ width: '32px', background: 'var(--color-border)' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}