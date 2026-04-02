import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        surface: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        beige: 'hsl(var(--beige))',
        'beige-gold': 'hsl(var(--beige-gold))',
        'deep-blue': 'hsl(var(--deep-blue))',
        'nav-active': 'hsl(var(--nav-active))',
        'prose-heading': 'hsl(var(--prose-heading))',
        'prose-inline-code': 'hsl(var(--prose-inline-code))',
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        destructive: 'hsl(var(--destructive))',
        focus: 'hsl(var(--beige-gold))',
      },
      fontFamily: {
        sans: ['Inter', "'Helvetica Neue'", 'system-ui', 'sans-serif'],
        serif: ["'Playfair Display'", 'Georgia', 'serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        enter: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        typing: 'typing 1.2s ease-in-out infinite',
        enter: 'enter 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
