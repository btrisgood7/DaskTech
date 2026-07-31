import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import Section, { SectionHeading } from '../components/Section'
import SocialLinks from '../components/SocialLinks'
import { contact } from '../utils/siteData'
import { getWhatsAppLink, getMailLink } from '../utils/links'
import { fadeUp } from '../utils/motion'
import { supabase } from '../lib/supabase'

const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState('')


  const handleChange = (e) => {
    const { name, value } = e.target

    let newValue = value

    // El teléfono solamente acepta números y máximo 10 dígitos
    if (name === 'phone') {
      newValue = value.replace(/\D/g, '').slice(0, 10)
    }

    // El correo no acepta espacios
    if (name === 'email') {
      newValue = value.replace(/\s/g, '')
    }

    setForm((previousForm) => ({
      ...previousForm,
      [name]: newValue,
    }))

    // Elimina el error cuando el usuario comienza a corregir el campo
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: undefined,
    }))
  }



  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Por favor escribe tu nombre.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Introduce un correo válido.'
    if (!form.message.trim()) next.message = 'Cuéntanos en qué podemos ayudarte.'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const next = validate()

    if (Object.keys(next).length) {
      setErrors(next)
      return
    }

    setSubmitting(true)
    setSubmitError('')
    setSent(false)

    const cleanForm = {
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim() || null,
      message: form.message.trim(),
    }

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert(cleanForm)

      if (error) {
        throw error
      }

      setSent(true)
      setForm(initialForm)

      setTimeout(() => {
        setSent(false)
      }, 6000)
    } catch (error) {
      console.error('Error al guardar el formulario:', error)

      setSubmitError(
        'No pudimos guardar tu mensaje. Inténtalo nuevamente o escríbenos por WhatsApp.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  const infoItems = [
    {
      icon: Mail,
      label: 'Correo electrónico',
      value: contact.email,
      href: getMailLink(),
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: contact.whatsappDisplay,
      href: getWhatsAppLink(),
    },
    { icon: MapPin, label: 'Ubicación', value: contact.location },
  ]

  const fieldClass =
    'w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-900/35 transition-colors duration-200 focus:border-emerald-brand focus:outline-none'

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="contacto"
        title="Cuéntanos tu idea, te leemos"
        subtitle="Uno de nosotros te va a responder directamente, sin filtros ni intermediarios. Sin compromiso."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Información de contacto */}
        <motion.div variants={fadeUp} className="lg:col-span-2">
          <div className="card flex h-full flex-col gap-6 p-7">
            <p className="text-sm leading-relaxed text-navy-900/60">
              Elige el canal que prefieras. Somos pocos, así que tu mensaje no se pierde
              en ninguna bandeja: lo lee el equipo directamente.
            </p>

            <ul className="space-y-3">
              {infoItems.map((item) => {
                const content = (
                  <span className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                      <item.icon size={19} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-xs text-navy-900/50">
                        {item.label}
                      </span>
                      <span className="block text-sm font-medium text-navy-900">
                        {item.value}
                      </span>
                    </span>
                  </span>
                )
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="block rounded-xl p-1 transition-colors hover:bg-navy-50"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="p-1">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-auto border-t border-navy-900/[0.08] pt-6">
              <p className="mb-3 font-mono text-xs text-navy-900/50">síguenos</p>
              <SocialLinks />
            </div>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          noValidate
          className="card space-y-5 p-7 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy-900/80">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={fieldClass}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy-900/80">
                Teléfono <span className="text-navy-900/40">(opcional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={form.phone}
                onChange={(event) => {
                  const onlyNumbers = event.target.value.replace(/\D/g, "");

                  setForm((previousForm) => ({
                    ...previousForm,
                    phone: onlyNumbers,
                  }));
                }}
                /*onChange={handleChange}*/
                placeholder="Tu teléfono"
                autoComplete="tel"
                maxLength={10}
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy-900/80">
              Correo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={fieldClass}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy-900/80">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Cuéntanos sobre tu proyecto o necesidad..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${fieldClass} resize-none`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-500">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {sent ? (
              <>
                <CheckCircle2 size={18} aria-hidden="true" />
                ¡Mensaje listo para enviar!
              </>
            ) : (
              <>
                Enviar mensaje
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </>
            )}
          </button>



          

          <p className="text-center font-mono text-xs text-navy-900/45" role="status">
            {sent
              ? 'Abrimos WhatsApp con tu mensaje. ¡Gracias por escribirnos!'
              : 'Al enviar abriremos WhatsApp con tu mensaje precargado.'}
          </p>
        </motion.form>
      </div>
    </Section>
  )
}
