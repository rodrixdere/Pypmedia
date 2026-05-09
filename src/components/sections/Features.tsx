import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { features } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      })

      const featureBlocks = section.querySelectorAll('.feature-block')
      featureBlocks.forEach((block) => {
        const left = block.querySelector('.feature-left')
        const right = block.querySelector('.feature-right')

        gsap.from(left, {
          opacity: 0,
          x: -40,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 75%',
          },
        })

        gsap.from(right, {
          opacity: 0,
          x: 40,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 75%',
          },
        })

        const numEl = block.querySelector('.feature-number')
        if (numEl) {
          gsap.from(numEl, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
            },
          })
        }

        const line = block.querySelector('.feature-line')
        if (line) {
          gsap.from(line, {
            scaleX: 0,
            transformOrigin: 'left',
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 70%',
            },
          })
        }
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-24 lg:py-36 px-6 lg:px-12"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div ref={headingRef} className="mb-20 lg:mb-28">
          <span className="section-label block mb-4">Características</span>
          <h2
            className="font-display font-bold max-w-2xl leading-tight"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--color-primary)',
            }}
          >
            Todo lo que necesitas,{' '}
            <span className="gold-text">en una sola plataforma</span>
          </h2>
        </div>

        {/* Feature blocks */}
        <div className="flex flex-col gap-0">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0
            const isVideo = String(feature.image).endsWith('.mp4')

            return (
              <div
                key={feature.id}
                className="feature-block relative"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                {/* Line */}
                <div
                  className="feature-line absolute top-0 left-0 h-px w-full"
                  style={{ background: 'var(--color-gold)', opacity: 0.4 }}
                />

                <div
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 py-16 lg:py-24`}
                >
                  {/* Left / Text side */}
                  <div className="feature-left flex-1 flex flex-col justify-center">
                    <div className="relative mb-8">
                      <span
                        className="feature-number font-display font-bold absolute -top-8 -left-2 select-none pointer-events-none"
                        style={{
                          fontSize: 'clamp(5rem, 12vw, 9rem)',
                          color: 'var(--color-gold)',
                          opacity: 0.06,
                          lineHeight: 1,
                        }}
                      >
                        {feature.number}
                      </span>
                      <span className="section-label relative z-10">{feature.number}</span>
                    </div>

                    <h3
                      className="font-display font-bold mb-3 leading-tight"
                      style={{
                        fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p className="font-display font-semibold text-xl mb-5 gold-text">
                      {feature.highlight}
                    </p>
                    <p
                      className="font-body text-base leading-relaxed max-w-md"
                      style={{ color: 'var(--color-cream)', opacity: 0.8 }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Right / Media side */}
                  <div className="feature-right flex-1">
                    {feature.image ? (
                      <div
                        className="w-full h-64 lg:h-80 flex items-center justify-center"
                        style={{ background: '#0A0A0A' }}
                      >
                        {isVideo ? (
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-contain"
                          >
                            <source src={feature.image} type="video/mp4" />
                          </video>
                        ) : (
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                    ) : (
                      <div
                        className="w-full h-64 lg:h-80 feature-img-placeholder"
                        style={{
                          background: `linear-gradient(${isEven ? '135deg' : '225deg'}, #141414 0%, #1a1a14 100%)`,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Bottom border */}
          <div style={{ borderTop: '1px solid var(--color-border)' }} />
        </div>
      </div>
    </section>
  )
}