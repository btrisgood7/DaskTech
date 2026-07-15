import { Mail, Phone, MapPin, Heart } from 'lucide-react'
import Logo from '../components/Logo'
import SocialLinks from '../components/SocialLinks'
import { brand, contact, navLinks } from '../utils/siteData'
import { getWhatsAppLink, getMailLink } from '../utils/links'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="surface-soft border-t border-navy-900/[0.08]">
      <div className="section-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-2">
            <Logo size={38} withWordmark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-900/60">
              {brand.description}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="mono-label">enlaces rápidos</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-900/60 transition-colors hover:text-navy-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mono-label">contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-900/60">
              <li>
                <a
                  href={getMailLink()}
                  className="flex items-center gap-2 transition-colors hover:text-navy-900"
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
                  className="flex items-center gap-2 transition-colors hover:text-navy-900"
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-900/[0.08] pt-6 sm:flex-row">
          <p className="font-mono text-xs text-navy-900/45">
            © {year} {brand.name} — hecho entre amigos.
          </p>
          <p className="flex items-center gap-1.5 font-mono text-xs text-navy-900/45">
            Hecho con tecnología, dedicación y
            <Heart size={13} className="fill-emerald-brand text-emerald-brand" aria-hidden="true" />
            café.
          </p>
        </div>
      </div>
    </footer>
  )
}
