import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'
import { brand, contact, navLinks } from '../utils/siteData'
import { getWhatsAppLink, getMailLink } from '../utils/links'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-950/60">
      <div className="section-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-2">
            <Logo size={40} withWordmark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {brand.description}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Enlaces rápidos
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href={getMailLink()}
                  className="flex items-center gap-2 transition-colors hover:text-emerald-brand"
                >
                  <Mail size={16} aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-emerald-brand"
                >
                  <Phone size={16} aria-hidden="true" />
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} aria-hidden="true" />
                {contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} {brand.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-500">
            Hecho con tecnología, dedicación y café.
          </p>
        </div>
      </div>
    </footer>
  )
}
