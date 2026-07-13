/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta alineada al isotipo: fondo azul marino profundo con
        // degradado dorado neón → verde fosforescente (tonos vivos,
        // extraídos de los píxeles más saturados de la imagen del logo).
        navy: {
          DEFAULT: '#001E38',
          50: '#f4f7fa',
          100: '#c9d6e2',
          800: '#0a2540',
          900: '#001E38',
          950: '#000f1f',
        },
        lime: {
          brand: '#7CFFC4', // verde menta fosforescente (parte alta del degradado)
        },
        emerald: {
          brand: '#12F29B', // verde neón principal del logo
        },
        gold: {
          brand: '#FFC700', // dorado neón (parte baja del degradado y nodos)
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(120deg, #FFC700 0%, #7CFFC4 50%, #12F29B 100%)',
        'navy-radial':
          'radial-gradient(circle at 50% 0%, rgba(18,242,155,0.14), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(18, 242, 155, 0.55)',
        'glow-gold': '0 0 44px -10px rgba(255, 199, 0, 0.6)',
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
