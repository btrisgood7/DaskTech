import { motion } from 'framer-motion'
import { revealOnScroll, staggerContainer } from '../utils/motion'

/**
 * Envoltorio de sección con padding consistente, id para anclaje y
 * animación de aparición escalonada al hacer scroll.
 */
export default function Section({ id, children, className = '', containerClassName = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <motion.div
        variants={staggerContainer()}
        {...revealOnScroll}
        className={`section-container ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  )
}

/** Encabezado estandarizado para cada sección (etiqueta + título + texto). */
export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignment} mb-14`}>
      {eyebrow && (
        <motion.span
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          className="mb-3 inline-block rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-brand"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
        className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          className="mt-4 text-base leading-relaxed text-slate-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
