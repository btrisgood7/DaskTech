import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

/** Tarjeta de integrantes del equipo: avatar con iniciales, rol, bio y stack. */
export default function TeamCard({ name, role, bio, stack = [], photo }) {
  const initials = name
    .split(' ')
    .map((w) => w.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="card group p-6 hover:border-emerald-brand/60 hover:shadow-lift"
    >
      <div className="flex flex-col items-start">
        {photo ? (
          <img
            src={photo}
            alt={name}
            loading="lazy"
            className="h-16 w-16 rounded-2xl object-cover"
          />
        ) : (
          <span className="flex h-16 w-16 rotate-[-3deg] items-center justify-center rounded-2xl bg-brand-gradient font-display text-xl font-bold text-navy-900 shadow-soft transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
            {initials}
          </span>
        )}

        <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
          {name}
        </h3>
        <p className="mt-1 font-mono text-xs font-medium leading-relaxed text-navy-900/55">
          {role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-navy-900/60">{bio}</p>

        {stack.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((s) => (
              <li key={s} className="chip font-mono">
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}
