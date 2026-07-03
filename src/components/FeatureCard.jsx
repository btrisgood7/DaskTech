import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

/** Tarjeta compacta para la sección "¿Por qué elegirnos?". */
export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="glass-card group flex gap-4 p-5 transition-colors duration-300 hover:border-gold-brand/40"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-emerald-brand transition-colors duration-300 group-hover:text-gold-brand">
        <Icon size={22} aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
    </motion.div>
  )
}
