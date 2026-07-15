import { motion } from 'framer-motion'
import Section, { SectionHeading } from '../components/Section'
import { processSteps } from '../utils/siteData'
import { fadeUp } from '../utils/motion'

export default function Process() {
  return (
    <Section id="process" className="surface-soft">
      <SectionHeading
        eyebrow="proceso de trabajo"
        title="Así trabajamos contigo"
        subtitle="Nada de procesos complicados: cuatro pasos claros para que sepas qué esperar en cada etapa."
      />

      <div className="relative">
        {/* Línea de tiempo punteada (horizontal en desktop) */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-navy-900/15 lg:block"
        />

        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <motion.li key={step.step} variants={fadeUp} className="relative">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-navy-900/10 bg-white text-navy-900 shadow-soft">
                  <step.icon size={24} aria-hidden="true" />
                </span>
                <span className="mt-4 font-mono text-xs font-semibold tracking-widest text-emerald-brand">
                  paso {step.step}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
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
