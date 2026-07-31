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
    'Cuatro amigos, café, código y un montón de ideas.',
}

export const contact = {
  email: 'eyeon6789@gmail.com',
  // Número en formato internacional sin signos para el enlace de WhatsApp
  whatsappNumber: '5215551083234',
  whatsappDisplay: '+52 55 5108 3234',
  location: 'Ciudad de México',
  // Mensaje para el precargado al abrir WhatsApp
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



export const team = [
  {
    name: 'Celia Hernandez',
    role: 'Cofundador · Desarrollo Odoo & Python',
    bio: 'Le encanta convertir procesos enredados en sistemas simples que de verdad funcionan.',
    stack: ['Odoo', 'Python','Soporte'],
    photo: 'team/celia1.jpeg',
  },
  {
    name: 'Saori Crisanto',
    role: 'Cofundador · Desarrollo Full Stack',
    bio: 'Convierte ideas en código, uniendo diseño y lógica para crear experiencias web completas.',
    stack: ['PHP', 'Laravel','Odoo'],
    photo: 'team/saori.jpeg',
  },
  {
    name: 'Kirsten Robles',
    role: 'Cofundador · Redes & Soporte Técnico',
    bio: 'Convierte ideas en aplicaciones que caben en tu bolsillo, cuidando cada pantalla, interacción y detalle.',
    stack: ['Flutter', 'Dart'],
    photo: ['team/kirsten.jpeg']
  },
  {
    name: 'Diego Guerrero',
    role: 'Cofundador · Infraestructura, redes y soporte técnico',
    bio: 'Cuida que tus equipos, cámaras y espacios funcionen sin sorpresas.',
    stack: ['CCTV','SQL','Java'],
    photo: ['team/diego.jpeg']
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
