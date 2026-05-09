import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'
import { contactInfo } from '../../data/content'
import MapEmbed from '../ui/MapEmbed'

gsap.registerPlugin(ScrollTrigger)

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

type FormState = {
  nombre: string
  correo: string
  mensaje: string
  _honeypot: string
}

type FormErrors = Partial<Omit<FormState, '_honeypot'>>

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.nombre.trim()) errors.nombre = 'Requerido'
  if (!form.correo.trim()) {
    errors.correo = 'Requerido'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
    errors.correo = 'Correo inválido'
  }
  if (!form.mensaje.trim()) errors.mensaje = 'Requerido'
  return errors
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const mapWrapRef = useRef<HTMLDivElement>(null)

  const [form, setForm] = useState<FormState>({ nombre: '', correo: '', mensaje: '', _honeypot: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [focused, setFocused] = useState<string | null>(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0, x: -40, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      gsap.from(rightRef.current, {
        opacity: 0, x: 40, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      gsap.from(mapWrapRef.current, {
        opacity: 0, y: 30, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: mapWrapRef.current, start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (submitError) setSubmitError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form._honeypot) return
    const validation = validate(form)
    if (Object.keys(validation).length > 0) { setErrors(validation); return }
    setSending(true)
    setSubmitError(null)
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        nombre: form.nombre, correo: form.correo, mensaje: form.mensaje,
      }, EMAILJS_PUBLIC_KEY)
      setSent(true)
      setForm({ nombre: '', correo: '', mensaje: '', _honeypot: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setSubmitError('Hubo un error al enviar. Intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  const inputBase = 'w-full px-4 py-3.5 font-body text-sm bg-transparent outline-none transition-all duration-300'

  const inputStyle = (field: string) => ({
    border: `1px solid ${errors[field as keyof FormErrors] ? 'rgba(220,80,80,0.6)' : focused === field ? 'var(--color-gold)' : 'var(--color-border)'}`,
    color: 'var(--color-primary)',
    background: 'var(--color-surface)',
    boxShadow: focused === field && !errors[field as keyof FormErrors] ? '0 0 0 1px rgba(201,169,110,0.12)' : 'none',
  })

  const socialLinks = [
    { label: 'WhatsApp', value: '+506 6066-1122', href: 'https://wa.me/50660661122' },
    { label: 'Instagram', value: contactInfo.instagram, href: 'https://www.instagram.com/pypmediacostarica?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { label: 'Facebook', value: contactInfo.facebook, href: 'https://www.facebook.com/profile.php?id=61558068939163&ref=NONE_xav_ig_profile_page_web#' },
    { label: 'Email', value: 'rhorvilleur@pypmediacr.com', href: 'mailto:rhorvilleur@pypmediacr.com' },
  ]

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="py-24 lg:py-36 px-6 lg:px-12"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">

          {/* Left */}
          <div ref={leftRef}>
            <span className="section-label block mb-6">Contacto</span>
            <h2
              className="font-display font-bold leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--color-primary)' }}
            >
              Hablemos<span className="gold-text">.</span>
            </h2>
            <p className="font-body text-base mb-10" style={{ color: 'var(--color-cream)', opacity: 0.7 }}>
              Somos apasionados por nuestros clientes.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className="flex items-center gap-3 w-fit">
                  <span className="font-display text-xs tracking-[0.2em] uppercase w-20" style={{ color: 'var(--color-gold)', opacity: 0.6 }}>
                    {s.label}
                  </span>
                  <span
                    className="font-body text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-cream)' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-cream)')}
                  >
                    {s.value}
                  </span>
                </a>
              ))}
            </div>

            <div className="p-5" style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
              <span className="section-label block mb-3">Horarios de atención</span>
              {contactInfo.hours.split('\n').map((line, i) => (
                <p key={i} className="font-body text-sm" style={{ color: 'var(--color-cream)', opacity: 0.75 }}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div ref={rightRef}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ border: '1px solid var(--color-gold)' }}>
                  <span className="gold-text text-xl">✓</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-2" style={{ color: 'var(--color-primary)' }}>
                  Mensaje enviado
                </h3>
                <p className="font-body text-sm" style={{ color: 'var(--color-cream)', opacity: 0.7 }}>
                  Nos pondremos en contacto pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                  <input type="text" name="_honeypot" value={form._honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>

                {(['nombre', 'correo'] as const).map((field) => (
                  <div key={field} className="flex flex-col gap-1">
                    <input
                      type={field === 'correo' ? 'email' : 'text'}
                      name={field}
                      placeholder={field === 'correo' ? 'Correo electrónico' : 'Nombre'}
                      value={form[field]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field)}
                      onBlur={() => setFocused(null)}
                      className={inputBase}
                      style={inputStyle(field)}
                      autoComplete={field === 'correo' ? 'email' : 'name'}
                    />
                    {errors[field] && <span className="font-body text-xs" style={{ color: 'rgba(220,80,80,0.9)' }}>{errors[field]}</span>}
                  </div>
                ))}

                <div className="flex flex-col gap-1">
                  <textarea
                    name="mensaje"
                    placeholder="¿Qué tienes en mente?"
                    value={form.mensaje}
                    onChange={handleChange}
                    onFocus={() => setFocused('mensaje')}
                    onBlur={() => setFocused(null)}
                    rows={6}
                    className={`${inputBase} resize-none`}
                    style={inputStyle('mensaje')}
                  />
                  {errors.mensaje && <span className="font-body text-xs" style={{ color: 'rgba(220,80,80,0.9)' }}>{errors.mensaje}</span>}
                </div>

                {submitError && <p className="font-body text-sm" style={{ color: 'rgba(220,80,80,0.9)' }}>{submitError}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center mt-2"
                  style={{ opacity: sending ? 0.6 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
                >
                  {sending ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div
          ref={mapWrapRef}
          className="w-full overflow-hidden"
          style={{ border: '1px solid var(--color-border)', height: 'clamp(300px, 40vh, 420px)' }}
        >
          <div className="flex h-full">
            <div
              className="hidden lg:flex flex-col justify-end p-8 w-64 flex-shrink-0"
              style={{ background: 'var(--color-surface)', borderRight: '1px solid var(--color-border)' }}
            >
              <span className="section-label block mb-3">Ubicación</span>
              <p className="font-body text-sm" style={{ color: 'var(--color-cream)', opacity: 0.75 }}>
                {contactInfo.address}
              </p>
            </div>
            <div className="flex-1">
              <MapEmbed coordinates={contactInfo.coordinates} address={contactInfo.address} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}