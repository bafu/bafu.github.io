import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#1A1A1A',
        'brand-white': '#FFFFFF',
        'brand-green': '#7F9C7E',
        'brand-yellow': '#D8B76A',
        'brand-stone': '#CEC0A3',
        'brand-red': '#ED5D29',
        'brand-pink': '#F9C6C0',
        'brand-dark-blue': '#2E52A0',
        'brand-light-blue': '#C1E1DC',
        'brand-cream': '#F4E9D5'
      },
      fontFamily: {
        sans: ['"Overused Grotesk"', 'Inter', 'sans-serif'],
        display: ['"Roboto Mono"', 'monospace'],
        detail: ['"Instrument Sans"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace']
      },
      boxShadow: {
        glass: '0 24px 60px rgba(26, 26, 26, 0.12)'
      }
    }
  },
  safelist: [
    'text-brand-dark-blue',
    'text-brand-black',
    'bg-brand-white',
    'bg-brand-cream',
    'border-brand-black',
    'bg-brand-dark-blue',
    'text-brand-white',
    'bg-brand-green',
    'bg-brand-yellow',
    'bg-brand-stone',
    'bg-brand-red',
    'bg-brand-pink',
    'bg-brand-light-blue'
  ],
  plugins: []
}

export default config
