# DaskTech — Landing Page

Landing page corporativa de **DaskTech**, construida con Vite + React + Tailwind CSS y animaciones con Framer Motion. Diseño moderno, responsive y accesible (WCAG), con identidad visual inspirada en el logo (azul marino + degradado verde-lima → esmeralda → dorado).

## Tecnologías

- **Vite** — build y dev server ultrarrápidos
- **React 18** — componentes reutilizables
- **Tailwind CSS** — estilos utilitarios y tema personalizado
- **Framer Motion** — animaciones sutiles y profesionales
- **Lucide React** — iconografía

## Empezar

```bash
npm install
npm run dev      # entorno de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # previsualiza el build
```

## Estructura

```
src/
├── components/   # Componentes reutilizables (Navbar, Button, Logo, tarjetas…)
├── sections/     # Secciones de la página (Hero, About, Services…)
├── hooks/        # Hooks personalizados (scroll, sección activa)
├── utils/        # Datos del sitio, helpers de enlaces y variantes de animación
├── App.jsx       # Composición de la página
├── main.jsx      # Punto de entrada
└── index.css     # Estilos base + tema Tailwind
```

## Personalización

Casi todo el contenido vive en **`src/utils/siteData.js`**:

- `brand` — nombre, slogan y descripción
- `contact` —
- `socials` — URLs de redes sociales
- `services`, `reasons`, `technologies`, `processSteps` — contenido de cada sección

Los colores y el tema están en `tailwind.config.js`.

## Formulario de contacto

El formulario (`src/sections/Contact.jsx`) valida en cliente y actualmente abre
WhatsApp con el mensaje precargado. Para conectarlo a un backend real, busca el
comentario `// TODO` dentro de `handleSubmit` y sustitúyelo por tu endpoint o un
servicio como Formspree / EmailJS.
