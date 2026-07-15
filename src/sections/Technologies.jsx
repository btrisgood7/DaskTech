import { motion } from 'framer-motion'
import Section, { SectionHeading } from '../components/Section'
import { technologies } from '../utils/siteData'
import { scaleIn } from '../utils/motion'

// Pequeña rotación de acentos de marca para los puntos de cada pill.
const dots = ['bg-emerald-brand', 'bg-gold-brand', 'bg-lime-brand']

export default function Technologies() {
  return (
    <Section id="tech">
      <SectionHeading
        eyebrow="tecnologías"
        title="Con esto trabajamos día a día"
        subtitle="Un stack moderno que dominamos bien, para construir soluciones rápidas, seguras y que crecen contigo."
      />

      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
        {technologies.map((tech, i) => (
          <motion.span
            key={tech.name}
            variants={scaleIn}
            whileHover={{ y: -4 }}
            className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-4 py-2 font-mono text-sm text-navy-900 shadow-soft transition-colors duration-300 hover:border-emerald-brand/60"
          >
            <span className={`h-2 w-2 rounded-full ${dots[i % dots.length]}`} />
            {tech.name}
          </motion.span>
        ))}
      </div>
    </Section>
  )
}
