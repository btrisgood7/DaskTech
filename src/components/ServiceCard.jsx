import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

/** Tarjeta de servicio con icono, título, descripción y etiquetas. */
export default function ServiceCard({ icon: Icon, title, description, tags = [] }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="card group p-6 hover:border-emerald-brand/60 hover:shadow-lift"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-navy-900/[0.08] bg-navy-50 text-navy-900 transition-colors duration-300 group-hover:border-emerald-brand/40 group-hover:bg-emerald-brand/15">
        <Icon size={22} aria-hidden="true" />
      </span>

      <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-900/60">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag} className="chip font-mono">
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
