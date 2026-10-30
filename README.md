# DaskTech — Landing Page

Landing page corporativa de **DaskTech**, construida con Vite + React + Tailwind CSS y animaciones con Framer Motion. Diseño moderno, responsive y accesible (WCAG), con identidad visual inspirada en el logo (azul marino + degradado verde-lima → esmeralda → dorado).

## Tecnologías

- **Vite** — build y dev server ultrarrápidos
- **React 18** — componentes reutilizables
- **Tailwind CSS** — estilos utilitarios y tema personalizado
- **Framer Motion** — animaciones sutiles y profesionales
- **Lucide React** — iconografía
- **Supabase** — base de datos para los mensajes del formulario de contacto

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

El formulario (`src/sections/Contact.jsx`) valida en cliente y guarda cada
mensaje en la tabla `contact_messages` de Supabase.

## Conexión con Supabase

1. **Crea un proyecto** en [supabase.com](https://supabase.com) (Dashboard → New project).

2. **Crea la tabla** en el SQL Editor:

   ```sql
   create table public.contact_messages (
     id         bigint generated always as identity primary key,
     name       text not null,
     email      text not null,
     phone      text,
     message    text not null,
     created_at timestamptz not null default now()
   );
   ```

3. **Aplica la seguridad (RLS)** ejecutando el contenido de
   [`supabase/contact_messages_rls.sql`](supabase/contact_messages_rls.sql). Esto
   permite que el público solo *inserte* mensajes (no leerlos, editarlos ni borrarlos)
   y limita el tamaño de cada campo. Los mensajes los consultas desde el Dashboard
   (Table Editor).

4. **Configura las variables de entorno.** Copia `.env.example` a `.env.local` y
   completa los valores desde Project Settings → API:

   ```bash
   cp .env.example .env.local
   ```

   ```env
   VITE_SUPABASE_URL=https://<tu-proyecto>.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=<tu-publishable-key>
   ```

   > Usa únicamente la clave **publishable** (antes llamada `anon`). Nunca pongas
   > la `service_role` en el frontend. `.env.local` está en `.gitignore`.

5. **Reinicia el servidor** (`npm run dev`) para que Vite lea las variables.
   El cliente se crea en `src/lib/supabase.js`.

6. **Producción:** define las mismas dos variables en tu hosting (Vercel, Netlify,
   etc.) antes de hacer el build.

**Verificación:** envía el formulario desde la página y comprueba que aparece una
fila nueva en Table Editor → `contact_messages`.
