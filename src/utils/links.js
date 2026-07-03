import { contact } from './siteData'

/** Construye el enlace de WhatsApp con mensaje precargado. */
export function getWhatsAppLink(message = contact.whatsappMessage) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${contact.whatsappNumber}?text=${text}`
}

/** Construye el enlace mailto. */
export function getMailLink(subject = 'Contacto desde la web') {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`
}
