import { motion } from 'framer-motion'
import Section, { SectionHeading } from '../components/Section'
import { technologies } from '../utils/siteData'
import { scaleIn } from '../utils/motion'

export default function Technologies() {
  return (
    <Section id="tech">
      <SectionHeading
        eyebrow="Tecnologías"
        title="Herramientas con las que trabajamos"
        subtitle="Stack moderno y probado para construir soluciones rápidas, seguras y escalables."
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            variants={scaleIn}
            whileHover={{ y: -6 }}
            className="glass-card group flex flex-col items-center justify-center gap-3 p-6 transition-colors duration-300 hover:border-emerald-brand/40"
          >
            {/* Inicial dentro de un disco con degradado de marca */}
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient font-display text-xl font-bold text-navy-950 shadow-glow transition-transform duration-300 group-hover:scale-110">
              {tech.name.charAt(0)}
            </span>
            <span className="text-sm font-medium text-slate-200">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
