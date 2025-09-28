import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#05060F',
        twilight: '#081021',
        cobalt: '#0F243E',
        ice: '#F5FBFF',
        mist: '#A5B7D8',
        electric: '#00C9FF',
        sky: '#2DC8FC',
        coral: '#FC2D30'
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
  safelist: ['text-electric', 'text-ice', 'border-electric', 'bg-sky', 'bg-cobalt'],
  plugins: []
}

export default config
