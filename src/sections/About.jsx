import { motion } from 'framer-motion'
import { Target, Users, HeartHandshake, Rocket } from 'lucide-react'
import Section, { SectionHeading } from '../components/Section'
import { fadeUp } from '../utils/motion'
import { team } from '../utils/siteData'

const pillars = [
  {
    icon: Users,
    title: 'Cómo empezamos',
    text: 'Cuatro amigos que se conocen desde hace tiempo, cada uno con su especialidad, decidieron construir algo juntos.',
  },
  {
    icon: Rocket,
    title: 'En dónde estamos',
    text: 'Apenas arrancando: por eso le ponemos todas las ganas a cada proyecto que nos confían.',
  },
  {
    icon: Target,
    title: 'Nuestro enfoque',
    text: 'Soluciones prácticas y a la medida, sin complicarte con cosas que no necesitas.',
  },
  {
    icon: HeartHandshake,
    title: 'Nuestro compromiso',
    text: 'Trato cercano y honesto, antes, durante y después de terminar el proyecto.',
  },
]

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Nota / historia, en lugar de una foto de stock corporativa */}
        <motion.div variants={fadeUp} className="relative order-last lg:order-first">
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <span className="mono-label">
              <span className="text-emerald-brand">//</span> nuestra historia
            </span>
            <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-navy-900 sm:text-2xl">
              “Cada quien traía su especialidad —desarrollo, datos, redes, soporte— y un
              día dijimos: <span className="marker">hagámoslo juntos</span>.”
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              {team.map((member) => {
                const initials = member.name
                  .split(' ')
                  .map((w) => w.charAt(0))
                  .slice(0, 2)
                  .join('')
                  .toUpperCase()
                return (
                  
                  <div key={member.name} className="flex flex-col items-center gap-2">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        className="h-14 w-14 rotate-[-3deg] rounded-2xl object-cover shadow-soft"
                      />
                    ) : (
                      <span className="flex h-14 w-14 rotate-[-3deg] items-center justify-center rounded-2xl bg-brand-gradient font-display text-base font-bold text-navy-900 shadow-soft">
                        {initials}
                      </span>
                    )}

                    <span className="font-mono text-xs text-navy-900/50">
                      {member.name.split(' ')[0]}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Tarjeta flotante */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="card absolute -bottom-6 -right-3 hidden items-center gap-3 p-4 shadow-lift sm:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white">
              <HeartHandshake size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-900">Somos 4, no 400</p>
              <p className="font-mono text-xs text-navy-900/50">y así nos gusta</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Texto */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="sobre nosotros"
            title="Un proyecto entre amigos, hecho con ganas de crecer"
            subtitle="Somos DaskTech: un pequeño equipo que combina conocimiento técnico y atención cercana para entregarte soluciones que de verdad funcionan."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-navy-900/[0.08] bg-navy-50 text-navy-900">
                  <p.icon size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-navy-900">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-900/60">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
