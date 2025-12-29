import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        'primary-blue': '#2563eb',
        'secondary-purple': '#7c3aed',
        'accent-green': '#10b981',
        'text-dark': '#1f2937',
        'text-gray': '#6b7280',
        'border-gray': '#e5e7eb',
        'bg-light': '#f9fafb',
        'warning-red': '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'base': ['17px', '1.7'],
        'lg': ['20px', '1.6'],
        'xl': ['22px', '1.5'],
        '2xl': ['28px', '1.4'],
        '3xl': ['32px', '1.3'],
        '4xl': ['42px', '1.2'],
        '5xl': ['48px', '1.1'],
        '6xl': ['64px', '1'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'shimmer': 'shimmerMove 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'rocket-fly': 'rocketFly 12s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
