import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#1A1A1A',
        'brand-white': '#FFFFFF',
        'brand-natural': '#F4E6D5',
        'stone-cream': '#D0C2A3',
        'sand-yellow': '#E3C87A',
        'sky-blue': '#A0D7E6',
        'ocean-blue': '#2E65A0',
        'land-green': '#769B74',
        'dusk-pink': '#C68D8D',
        'fish-red': '#F25C4C',
        'digital-stone': '#B18C52',
        'digital-yellow': '#FFD542',
        'digital-sky': '#7FD6FF',
        'digital-ocean': '#0A60FF',
        'digital-land': '#5BA37C',
        'digital-dusk': '#FF76A0',
        'digital-fish': '#FF3A2B'
      },
      fontFamily: {
        sans: ['"Overused Grotesk"', 'Inter', 'sans-serif'],
        display: ['"Instrument Serif"', 'serif'],
        mono: ['"Roboto Mono"', 'monospace']
      },
      boxShadow: {
        glass: '0 24px 60px rgba(26, 26, 26, 0.12)'
      }
    }
  },
  safelist: [
    'text-digital-ocean',
    'text-brand-black',
    'bg-brand-white',
    'bg-brand-natural',
    'border-brand-black',
    'bg-digital-ocean',
    'text-brand-white'
  ],
  plugins: []
}

export default config
