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
  slogan: 'Cuatro amigos, una pasión: la tecnología',
  description:
    'Somos un grupo de 4 amigos que decidimos unir lo que sabemos hacer —desarrollo, datos, redes e infraestructura— para ayudarte a resolver retos reales. Sin vueltas corporativas, con muchas ganas de hacer las cosas bien.',
}

export const contact = {
  email: 'eyeon6789@gmail.com',
  // Número en formato internacional sin signos para el enlace de WhatsApp
  whatsappNumber: '5215646162446',
  whatsappDisplay: '+52 56 4616 2446',
  location: 'Ciudad de México',
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
  { label: 'Equipo', href: '#team' },
  { label: 'Servicios', href: '#services' },
  { label: '¿Por qué nosotros?', href: '#why-us' },
  { label: 'Tecnologías', href: '#tech' },
  { label: 'Proceso', href: '#process' },
  { label: 'Contacto', href: '#contact' },
]

/* -------------------------------------------------------------------------- */
/* Equipo                                                                      */
/* -------------------------------------------------------------------------- */
// 👉 TODO: reemplaza nombres, roles, bios y fotos por los datos reales de cada
//    integrante. Si tienen foto, agrega `photo: '/ruta-a-la-imagen.jpg'` y
//    TeamCard la usará en vez de las iniciales.

export const team = [
  {
    name: 'Nombre Apellido',
    role: 'Cofundador · Desarrollo Odoo & Python',
    bio: 'Le encanta convertir procesos enredados en sistemas simples que de verdad funcionan.',
    stack: ['Odoo', 'Python'],
  },
  {
    name: 'Nombre Apellido',
    role: 'Cofundador · Bases de Datos & Automatización',
    bio: 'Vive entre consultas SQL y scripts, buscando que la información fluya sin fricciones.',
    stack: ['SQL', 'PostgreSQL'],
  },
  {
    name: 'Nombre Apellido',
    role: 'Cofundador · Redes & Soporte Técnico',
    bio: 'El que resuelve esa incidencia rara a las 11pm y se queda a ver que todo quede bien.',
    stack: ['Redes', 'Soporte'],
  },
  {
    name: 'Nombre Apellido',
    role: 'Cofundador · Infraestructura & Seguridad',
    bio: 'Cuida que tus equipos, cámaras y espacios funcionen sin sorpresas.',
    stack: ['CCTV', 'Mantenimiento'],
  },
]

/* -------------------------------------------------------------------------- */
/* Servicios                                                                   */
/* -------------------------------------------------------------------------- */

export const services = [
  {
    icon: Boxes,
    title: 'Desarrollo Odoo',
    description:
      'Adaptamos Odoo a como trabajas de verdad, no al revés. Lo dejamos trabajando a tu favor.',
    tags: ['Implementación', 'Personalización', 'Automatización', 'Integraciones'],
  },
  {
    icon: Code2,
    title: 'Desarrollo en Python',
    description:
      'Scripts, automatizaciones, APIs y pequeñas apps hechas a la medida de tu problema, no de un molde.',
    tags: ['Automatización', 'Scripts', 'APIs', 'Aplicaciones'],
  },
  {
    icon: Database,
    title: 'Bases de datos SQL',
    description:
      'Diseño, consultas y optimización para que tus datos dejen de ser un dolor de cabeza.',
    tags: ['Diseño', 'Consultas', 'Optimización', 'Administración'],
  },
  {
    icon: Cctv,
    title: 'Cámaras de seguridad',
    description:
      'Instalamos y configuramos CCTV para que puedas cuidar tu espacio con tranquilidad.',
    tags: ['Instalación', 'Configuración', 'Monitoreo', 'CCTV'],
  },
  {
    icon: Wrench,
    title: 'Mantenimiento de cómputo',
    description:
      'Revisión correctiva y preventiva para que tus equipos no te dejen a medias.',
    tags: ['Correctivo', 'Preventivo', 'Diagnóstico', 'Optimización'],
  },
  {
    icon: Network,
    title: 'Redes y soporte técnico',
    description:
      'Configuramos tu red y estamos ahí, remoto o presencial, cuando algo se traba.',
    tags: ['Redes', 'Soporte remoto', 'Soporte presencial', 'Incidencias'],
  },
]

/* -------------------------------------------------------------------------- */
/* ¿Por qué elegirnos?                                                         */
/* -------------------------------------------------------------------------- */

export const reasons = [
  {
    icon: HeartHandshake,
    title: 'Trato directo, sin intermediarios',
    description: 'Hablas con quien realmente construye tu proyecto, no con un área de ventas.',
  },
  {
    icon: Puzzle,
    title: 'Soluciones a tu medida',
    description: 'Nada de plantillas genéricas: cada proyecto se piensa para ti.',
  },
  {
    icon: ShieldCheck,
    title: 'Profesionalismo',
    description: 'Somos chicos, pero serios: comunicación clara y compromisos que cumplimos.',
  },
  {
    icon: Zap,
    title: 'Respuesta rápida',
    description: 'Al ser un equipo pequeño, te respondemos rápido y sin burocracia.',
  },
  {
    icon: Award,
    title: 'Ganas de hacerlo bien',
    description: 'Estamos empezando y eso nos empuja a cuidar cada detalle de lo que entregamos.',
  },
  {
    icon: BadgeCheck,
    title: 'Acompañamiento real',
    description: 'No desaparecemos al entregar: seguimos cerca antes, durante y después.',
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
    title: 'Platicamos',
    description: 'Te escuchamos, entendemos tu necesidad y el contexto real detrás de ella.',
  },
  {
    icon: Hammer,
    step: '02',
    title: 'Construimos',
    description: 'Manos a la obra, con buenas prácticas y comunicación constante contigo.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Implementamos',
    description: 'Desplegamos, configuramos y probamos que todo funcione como esperabas.',
  },
  {
    icon: LifeBuoy,
    step: '04',
    title: 'Seguimos cerca',
    description: 'No te dejamos solo: acompañamiento y soporte después de la entrega.',
  },
]
