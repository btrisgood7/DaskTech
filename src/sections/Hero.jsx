import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../components/Button'
import HeroVisual from '../components/HeroVisual'
import { brand } from '../utils/siteData'
import { fadeUp, staggerContainer } from '../utils/motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Malla / cuadrícula tenue de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(circle at 50% 30%, #000 0%, transparent 75%)',
        }}
      />

      <div className="section-container relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-4 py-1.5 text-xs font-medium text-emerald-brand"
          >
            <Sparkles size={14} aria-hidden="true" />
            Soluciones tecnológicas a la medida
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            {brand.name}
            <span className="mt-2 block text-gradient">{brand.slogan}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {brand.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#contact" icon={ArrowRight}>
              Contáctanos
            </Button>
            <Button href="#services" variant="secondary">
              Nuestros servicios
            </Button>
          </motion.div>

          {/* Métricas / confianza */}
          <motion.dl
            variants={fadeUp}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              { value: '6+', label: 'Servicios' },
              { value: '100%', label: 'A la medida' },
              { value: '24/7', label: 'Soporte' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-white">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
