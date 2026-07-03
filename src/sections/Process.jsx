import { motion } from 'framer-motion'
import Section, { SectionHeading } from '../components/Section'
import { processSteps } from '../utils/siteData'
import { fadeUp } from '../utils/motion'

export default function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="Proceso de trabajo"
        title="Cómo trabajamos contigo"
        subtitle="Un método claro en cuatro pasos para que sepas qué esperar en cada etapa del proyecto."
      />

      <div className="relative">
        {/* Línea de tiempo (horizontal en desktop) */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-gold-brand via-lime-brand to-emerald-brand lg:block"
        />

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <motion.li key={step.step} variants={fadeUp} className="relative">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-navy-950 shadow-glow">
                  <step.icon size={24} aria-hidden="true" />
                </span>
                <span className="mt-4 font-display text-sm font-bold tracking-widest text-emerald-brand">
                  {step.step}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
