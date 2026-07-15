import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

/** Tarjeta compacta para la sección "¿Por qué nosotros?". */
export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      className="card group flex gap-4 p-5 hover:border-gold-brand/60 hover:shadow-lift"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-navy-900/[0.08] bg-navy-50 text-navy-900 transition-colors duration-300 group-hover:border-gold-brand/50 group-hover:bg-gold-brand/20">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-display font-semibold text-navy-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-navy-900/60">{description}</p>
      </div>
    </motion.div>
  )
}
