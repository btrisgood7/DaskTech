import { motion } from 'framer-motion'
import { Boxes, Code2, Database, Cctv, Network, Cpu } from 'lucide-react'
import Logo from './Logo'

/**
 * Ilustración tecnológica del Hero: el isotipo de DaskTech al centro
 * sobre un panel "glass", rodeado de iconos de tecnología que flotan
 * suavemente en órbitas. Combina con la paleta del logo.
 */

const orbiters = [
  { Icon: Boxes, className: '-left-4 top-8', delay: 0 },
  { Icon: Code2, className: 'right-2 top-2', delay: 0.6 },
  { Icon: Database, className: 'right-0 bottom-20', delay: 1.2 },
  { Icon: Cctv, className: 'left-2 bottom-6', delay: 0.9 },
  { Icon: Network, className: '-right-4 top-1/2', delay: 0.3 },
  { Icon: Cpu, className: 'left-1/2 -top-4', delay: 1.5 },
]

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Resplandor de fondo */}
      <div className="absolute inset-0 rounded-full bg-emerald-brand/20 blur-3xl" />
      <div className="absolute inset-8 rounded-full bg-gold-brand/10 blur-3xl" />

      {/* Anillos decorativos */}
      <div className="absolute inset-6 rounded-full border border-white/10" />
      <motion.div
        className="absolute inset-16 rounded-full border border-dashed border-emerald-brand/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      {/* Panel central con el logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="glass-card flex h-40 w-40 items-center justify-center p-6 shadow-glow sm:h-48 sm:w-48"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Logo size={110} />
        </motion.div>
      </div>

      {/* Iconos en órbita */}
      {orbiters.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${className} flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-navy-800/80 text-emerald-brand backdrop-blur`}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
        >
          <Icon size={22} aria-hidden="true" />
        </motion.div>
      ))}
    </div>
  )
}
