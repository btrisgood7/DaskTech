import { Linkedin, Github, Facebook, Instagram, Globe } from 'lucide-react'
import { socials } from '../utils/siteData'

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
}

/** Lista de enlaces a redes sociales con iconos accesibles. */
export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon] ?? Globe
        return (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-brand/50 hover:text-emerald-brand"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
