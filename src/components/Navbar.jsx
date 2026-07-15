import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { navLinks } from '../utils/siteData'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(20)
  const active = useActiveSection(sectionIds)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-900/[0.06] bg-white/85 shadow-soft backdrop-blur-lg'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        className="section-container flex h-16 items-center justify-between"
        aria-label="Navegación principal"
      >
        <a href="#hero" aria-label="DaskTech inicio">
          <Logo size={34} withWordmark />
        </a>

        {/* Enlaces de escritorio */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-3 py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-navy-900'
                      : 'text-navy-900/60 hover:text-navy-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" className="px-5 py-2">
            Hablemos
          </Button>
        </div>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-900/10 bg-white text-navy-900 shadow-soft lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy-900/[0.06] bg-white/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-navy-900/70 transition-colors hover:bg-navy-50 hover:text-navy-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-1">
                <Button href="#contact" onClick={() => setOpen(false)} className="w-full">
                  Hablemos
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
