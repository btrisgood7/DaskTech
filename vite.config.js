import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// CSP solo en build: en desarrollo Vite necesita scripts inline y websocket (HMR).
const cspPlugin = (supabaseUrl) => ({
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml: () => [
    {
      tag: 'meta',
      attrs: {
        'http-equiv': 'Content-Security-Policy',
        content: [
          "default-src 'self'",
          "script-src 'self'",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com",
          "img-src 'self' data:",
          `connect-src 'self' ${supabaseUrl}`,
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join('; '),
      },
      injectTo: 'head-prepend',
    },
  ],
})

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), cspPlugin(env.VITE_SUPABASE_URL ?? '')],
  }
})
