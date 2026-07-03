/**
 * Datos centralizados del sitio.
 * --------------------------------------------------------------------------
 * 👉 EDITA AQUÍ tus datos reales. Los valores marcados con "TODO" son
 *    placeholders: reemplázalos por tu información de contacto verdadera.
 */

import {
  Boxes,
  Code2,
  Database,
  Cctv,
  Wrench,
  Network,
  ShieldCheck,
  Award,
  HeartHandshake,
  Puzzle,
  Zap,
  BadgeCheck,
  Search,
  Hammer,
  Rocket,
  LifeBuoy,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/* Marca y contacto                                                            */
/* -------------------------------------------------------------------------- */

export const brand = {
  name: 'DaskTech',
  slogan: 'Tecnología que impulsa tu negocio',
  description:
    'Soluciones tecnológicas a la medida: desarrollo, automatización, infraestructura y soporte. Convertimos tus retos técnicos en resultados confiables.',
}

export const contact = {
  email: 'eyeon6789@gmail.com',
  // Número en formato internacional sin signos para el enlace de WhatsApp
  whatsappNumber: '5215646162446', // TODO: ej. 52 + 10 dígitos
  whatsappDisplay: '+52 56 4616 2446', // TODO
  location: 'Ciudad de México', // TODO: Ciudad, Estado
  // Mensaje precargado al abrir WhatsApp
  whatsappMessage: 'Hola DaskTech, me gustaría más información sobre sus servicios.',
}

export const socials = [
  // TODO: reemplaza las URLs
  { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/', icon: 'github' },
  { name: 'Facebook', url: 'https://facebook.com/', icon: 'facebook' },
  { name: 'Instagram', url: 'https://instagram.com/', icon: 'instagram' },
]

/* -------------------------------------------------------------------------- */
/* Navegación                                                                  */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: '¿Por qué elegirnos?', href: '#why-us' },
  { label: 'Tecnologías', href: '#tech' },
  { label: 'Proceso', href: '#process' },
  { label: 'Contacto', href: '#contact' },
]

/* -------------------------------------------------------------------------- */
/* Servicios                                                                   */
/* -------------------------------------------------------------------------- */

export const services = [
  {
    icon: Boxes,
    title: 'Desarrollo Odoo',
    description:
      'Implementamos y adaptamos Odoo a tu operación para que el ERP trabaje a tu favor.',
    tags: ['Implementación', 'Personalización', 'Automatización', 'Integraciones'],
  },
  {
    icon: Code2,
    title: 'Desarrollo en Python',
    description:
      'Automatizaciones, scripts, APIs y aplicaciones robustas hechas a la medida.',
    tags: ['Automatización', 'Scripts', 'APIs', 'Aplicaciones'],
  },
  {
    icon: Database,
    title: 'Bases de datos SQL',
    description:
      'Diseño, consultas, optimización y administración para que tus datos rindan.',
    tags: ['Diseño', 'Consultas', 'Optimización', 'Administración'],
  },
  {
    icon: Cctv,
    title: 'Cámaras de seguridad',
    description:
      'Instalación y configuración de CCTV con monitoreo confiable de tus espacios.',
    tags: ['Instalación', 'Configuración', 'Monitoreo', 'CCTV'],
  },
  {
    icon: Wrench,
    title: 'Mantenimiento de cómputo',
    description:
      'Servicio correctivo y preventivo para mantener tus equipos a máximo rendimiento.',
    tags: ['Correctivo', 'Preventivo', 'Diagnóstico', 'Optimización'],
  },
  {
    icon: Network,
    title: 'Redes y soporte técnico',
    description:
      'Configuración de redes y soporte remoto o presencial para resolver incidencias.',
    tags: ['Redes', 'Soporte remoto', 'Soporte presencial', 'Incidencias'],
  },
]

/* -------------------------------------------------------------------------- */
/* ¿Por qué elegirnos?                                                         */
/* -------------------------------------------------------------------------- */

export const reasons = [
  {
    icon: ShieldCheck,
    title: 'Profesionalismo',
    description: 'Trabajo serio, transparente y orientado a resultados.',
  },
  {
    icon: Award,
    title: 'Experiencia',
    description: 'Conocimiento técnico aplicado a proyectos reales.',
  },
  {
    icon: HeartHandshake,
    title: 'Atención personalizada',
    description: 'Te escuchamos y acompañamos en cada etapa.',
  },
  {
    icon: Puzzle,
    title: 'Soluciones a medida',
    description: 'Nada genérico: cada proyecto se adapta a ti.',
  },
  {
    icon: Zap,
    title: 'Respuesta rápida',
    description: 'Tiempos de atención ágiles cuando más lo necesitas.',
  },
  {
    icon: BadgeCheck,
    title: 'Calidad garantizada',
    description: 'Entregables probados y con seguimiento posterior.',
  },
]

/* -------------------------------------------------------------------------- */
/* Tecnologías                                                                 */
/* -------------------------------------------------------------------------- */

export const technologies = [
  { name: 'Odoo' },
  { name: 'Python' },
  { name: 'PostgreSQL' },
  { name: 'SQL' },
  { name: 'Linux' },
  { name: 'Docker' },
  { name: 'Git' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Tailwind CSS' },
]

/* -------------------------------------------------------------------------- */
/* Proceso de trabajo                                                          */
/* -------------------------------------------------------------------------- */

export const processSteps = [
  {
    icon: Search,
    step: '01',
    title: 'Análisis',
    description: 'Entendemos tu necesidad, objetivos y contexto técnico.',
  },
  {
    icon: Hammer,
    step: '02',
    title: 'Desarrollo',
    description: 'Construimos la solución con buenas prácticas y comunicación constante.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Implementación',
    description: 'Desplegamos, configuramos y validamos que todo funcione.',
  },
  {
    icon: LifeBuoy,
    step: '04',
    title: 'Soporte',
    description: 'Acompañamiento continuo y mantenimiento para tu tranquilidad.',
  },
]
