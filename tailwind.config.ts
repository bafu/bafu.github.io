import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#121212',
        snow: '#F7F7F7',
        codeBlue: '#0000D8',
        builderGreen: '#21B76E',
        insightPink: '#FF5560'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.2)'
      }
    }
  },
  safelist: [
    'text-insightPink',
    'text-snow',
    'text-builderGreen',
    'bg-codeBlue',
    'border-builderGreen'
  ],
  plugins: []
}

export default config
