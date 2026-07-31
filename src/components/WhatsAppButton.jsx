import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../utils/links'

/** Widget de WhatsApp en la esquina inferior derecha. */
export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulse-ring" />
      <MessageCircle size={26} className="relative" aria-hidden="true" />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100">
        ¿Hablamos por WhatsApp?
      </span>
    </a>
  )
}
