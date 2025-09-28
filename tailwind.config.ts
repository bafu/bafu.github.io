import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#040404',
        twilight: '#0E0F11',
        cobalt: '#191919',
        ice: '#F3F3F3',
        mist: '#A8B4C6',
        primary: '#0082F3',
        'primary-bright': '#2895F7',
        'primary-cyan': '#25B8E9',
        coral: '#EA384C',
        lavender: '#E6BBFD'
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        glass: '0 30px 80px rgba(7, 20, 40, 0.45)'
      }
    }
  },
  safelist: ['text-primary', 'text-ice', 'border-primary', 'bg-primary', 'bg-cobalt'],
  plugins: []
}

export default config
