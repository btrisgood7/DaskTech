import { motion } from 'framer-motion'
import { Target, Users, ShieldCheck, TrendingUp } from 'lucide-react'
import Section, { SectionHeading } from '../components/Section'
import { fadeUp } from '../utils/motion'

const pillars = [
  {
    icon: Users,
    title: 'Quiénes somos',
    text: 'Un equipo técnico apasionado por resolver problemas reales con tecnología.',
  },
  {
    icon: TrendingUp,
    title: 'Experiencia',
    text: 'Proyectos de desarrollo, datos, seguridad e infraestructura llevados a producción.',
  },
  {
    icon: Target,
    title: 'Nuestro enfoque',
    text: 'Soluciones a la medida, prácticas y mantenibles, sin complejidad innecesaria.',
  },
  {
    icon: ShieldCheck,
    title: 'Compromiso',
    text: 'Acompañamiento cercano y soporte continuo antes, durante y después del proyecto.',
  },
]

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Ilustración tecnológica */}
        <motion.div variants={fadeUp} className="relative order-last lg:order-first">
          <div className="glass-card relative overflow-hidden p-2">
            <div className="absolute inset-0 bg-navy-radial" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                alt="Infraestructura y placas de circuitos representando el trabajo tecnológico de DaskTech"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
            </div>
          </div>
          {/* Tarjeta flotante */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-card absolute -bottom-6 -right-4 hidden items-center gap-3 p-4 shadow-glow sm:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient text-navy-950">
              <ShieldCheck size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Calidad garantizada</p>
              <p className="text-xs text-slate-400">Entregables probados</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Texto */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Sobre nosotros"
            title="Tecnología confiable, hecha a tu medida"
            subtitle="En DaskTech combinamos conocimiento técnico y atención cercana para entregar soluciones que realmente funcionan para tu negocio."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-emerald-brand">
                  <p.icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
