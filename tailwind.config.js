/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#001E38',
          50: '#f4f7fa',
          100: '#c9d6e2',
          800: '#0a2540',
          900: '#001E38',
          950: '#000f1f',
        },
        lime: {
          brand: '#7CFFC4',
        },
        emerald: {
          brand: '#12F29B',
        },
        gold: {
          brand: '#FFC700',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(120deg, #FFC700 0%, #7CFFC4 50%, #12F29B 100%)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0, 30, 56, 0.04), 0 8px 24px -12px rgba(0, 30, 56, 0.12)',
        lift: '0 6px 16px -6px rgba(0, 30, 56, 0.14), 0 20px 40px -24px rgba(0, 30, 56, 0.20)',
        glow: '0 0 40px -14px rgba(18, 242, 155, 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}
