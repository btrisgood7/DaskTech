import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import HeroVisual from '../components/HeroVisual'
import { brand } from '../utils/siteData'
import { fadeUp, staggerContainer } from '../utils/motion'

export default function Hero() {
  // Resaltamos la palabra "pasión" del eslogan con un trazo tipo marcador.
  const parts = brand.slogan.split('pasión')

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Cuadrícula de puntos muy tenue de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(0,30,56,0.06) 1.2px, transparent 1.2px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(circle at 50% 25%, #000 0%, transparent 72%)',
        }}
      />

      <div className="section-container relative grid items-center gap-14 lg:grid-cols-2">
        <motion.div variants={staggerContainer(0.13)} initial="hidden" animate="show">
          <motion.span variants={fadeUp} className="mono-label">
            <span className="flex h-2 w-2 rounded-full bg-emerald-brand" />
            hola, somos un equipo pequeño
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.4rem]"
          >
            {brand.name}
            <span className="mt-3 block text-2xl font-bold text-navy-900/80 sm:text-3xl lg:text-4xl">
              {parts.length === 2 ? (
                <>
                  {parts[0]}
                  <span className="marker">pasión</span>
                  {parts[1]}
                </>
              ) : (
                brand.slogan
              )}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-navy-900/60 sm:text-lg"
          >
            {brand.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#contact" icon={ArrowRight}>
              Hablemos de tu proyecto
            </Button>
            <Button href="#team" variant="secondary">
              Conoce al equipo
            </Button>
          </motion.div>

          {/* Lo que somos, sin cifras corporativas */}
          <motion.dl
            variants={fadeUp}
            className="mt-11 grid max-w-md grid-cols-3 gap-6 border-t border-navy-900/10 pt-7"
          >
            {[
              { value: '4', label: 'amigos' },
              { value: '1', label: 'equipo' },
              { value: '∞', label: 'ganas de crecer' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-extrabold text-navy-900">
                  {stat.value}
                </dd>
                <p className="mt-1 font-mono text-xs text-navy-900/50">{stat.label}</p>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
