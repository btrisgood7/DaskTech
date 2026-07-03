import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

/** Tarjeta de servicio con icono, título, descripción, etiquetas y hover. */
export default function ServiceCard({ icon: Icon, title, description, tags = [] }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="glass-card group relative overflow-hidden p-6 transition-colors duration-300 hover:border-emerald-brand/40"
    >
      {/* Resplandor sutil al hacer hover */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-brand/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-navy-950 shadow-glow transition-transform duration-300 group-hover:scale-110">
          <Icon size={24} aria-hidden="true" />
        </span>

        <h3 className="mt-5 font-display text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
