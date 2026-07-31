import { motion } from 'framer-motion'
import { Boxes, Code2, Database, Cctv, Network, Terminal } from 'lucide-react'

const stickers = [
  { Icon: Boxes, className: '-left-5 top-6 rotate-[-8deg]', delay: 0 },
  { Icon: Database, className: '-right-4 top-16 rotate-[7deg]', delay: 0.5 },
  { Icon: Cctv, className: 'left-2 -bottom-6 rotate-[6deg]', delay: 1 },
  { Icon: Network, className: 'right-6 -bottom-4 rotate-[-6deg]', delay: 1.4 },
]

const codeLines = [
  [
    { t: 'const', c: 'text-navy-900/45' },
    { t: ' equipo', c: 'text-navy-900' },
    { t: ' = ', c: 'text-navy-900/45' },
    { t: '4', c: 'text-navy-900 font-semibold' },
  ],
  [
    { t: 'const', c: 'text-navy-900/45' },
    { t: ' pasión', c: 'text-navy-900' },
    { t: ' = ', c: 'text-navy-900/45' },
    { t: 'true', c: '', accent: true },
  ],
  [{ t: '', c: '' }],
  [
    { t: 'function', c: 'text-navy-900/45' },
    { t: ' construir', c: 'text-navy-900' },
    { t: '(idea) {', c: 'text-navy-900/45' },
  ],
  [
    { t: '  return', c: 'text-navy-900/45' },
    { t: ' idea', c: 'text-navy-900' },
    { t: ' + ', c: 'text-navy-900/45' },
    { t: 'ganas', c: 'text-navy-900' },
  ],
  [{ t: '}', c: 'text-navy-900/45' }],
]

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Destellos de color muy tenues detrás */}
      <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-emerald-brand/25 blur-3xl" />
      <div className="absolute -right-6 bottom-0 h-40 w-40 rounded-full bg-gold-brand/20 blur-3xl" />

      {/* Ventana de editor */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="card relative rotate-[-2deg] overflow-hidden p-0 shadow-lift"
      >
        {/* Barra de título */}
        <div className="flex items-center gap-2 border-b border-navy-900/[0.06] bg-navy-50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-gold-brand" />
          <span className="h-3 w-3 rounded-full bg-lime-brand" />
          <span className="h-3 w-3 rounded-full bg-emerald-brand" />
          <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-navy-900/50">
            <Terminal size={13} aria-hidden="true" />
            dasktech.jsx
          </span>
        </div>

        {/* Cuerpo de código */}
        <div className="space-y-1.5 px-5 py-5 font-mono text-sm leading-relaxed">
          {codeLines.map((line, i) => (
            <div key={i} className="flex min-h-[1.25rem] gap-3">
              <span className="w-4 shrink-0 select-none text-right text-navy-900/25">
                {i + 1}
              </span>
              <span className="truncate">
                {line.map((seg, j) => (
                  <span
                    key={j}
                    className={seg.accent ? '' : seg.c}
                    style={
                      seg.accent
                        ? {
                            backgroundImage:
                              'linear-gradient(120deg,#12F29B,#7CFFC4)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            fontWeight: 600,
                          }
                        : undefined
                    }
                  >
                    {seg.t}
                  </span>
                ))}
                {i === 4 && (
                  <motion.span
                    aria-hidden="true"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                    className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 bg-emerald-brand"
                  />
                )}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stickers flotantes */}
      {stickers.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay }}
          className={`absolute ${className} flex h-12 w-12 items-center justify-center rounded-2xl border border-navy-900/10 bg-white text-navy-900 shadow-soft`}
        >
          <Icon size={22} aria-hidden="true" />
        </motion.div>
      ))}

      {/* Sticker "hecho a mano" */}
      <motion.div
        animate={{ rotate: [-6, -2, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-3 -top-5 rounded-full border border-navy-900/10 bg-white px-3 py-1.5 font-mono text-xs font-medium text-navy-900 shadow-soft"
      >
        <Code2 size={13} className="mr-1 inline text-emerald-brand" aria-hidden="true" />
        hola mundo :)
      </motion.div>
    </div>
  )
}
