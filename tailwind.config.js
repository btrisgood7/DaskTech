/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Modo oscuro elegante: base casi negra (grafito/zinc) con un único
        // acento verde esmeralda. Sin amarillo neón. Estilo Linear/Vercel.
        // Nota: se conservan los nombres "navy" para no romper referencias,
        // pero ahora apuntan a una escala de negros neutros.
        navy: {
          DEFAULT: '#101012',
          50: '#f4f4f5',
          100: '#d4d4d8',
          800: '#18181b',
          900: '#0e0e10',
          950: '#09090b',
        },
        lime: {
          brand: '#6ee7b7', // menta suave (acento secundario, sutil)
        },
        emerald: {
          brand: '#34d399', // verde principal, más luminoso para buen contraste
        },
        gold: {
          // Reasignado a verde menta para eliminar el amarillo neón sin
          // tener que editar cada archivo que lo referenciaba.
          brand: '#6ee7b7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(120deg, #6ee7b7 0%, #34d399 55%, #10b981 100%)',
        'navy-radial':
          'radial-gradient(circle at 50% 0%, rgba(52,211,153,0.10), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px -12px rgba(52, 211, 153, 0.35)',
        'glow-gold': '0 0 44px -12px rgba(110, 231, 183, 0.4)',
        card: '0 10px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
        shimmer: 'shimmer 8s linear infinite alternate',
      },
    },
  },
  plugins: [],
}
