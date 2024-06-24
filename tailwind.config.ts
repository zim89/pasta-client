import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    screens: {
      sm: '390px',
      md: '834px',
      xl: '1440px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        md: '60px',
        lg: '80px'
      }
    },
    colors: {
      black: '#001114',
      white: '#FFFFFF',
      light: '#FBFBFB',
      grey: '#6F7273',
      primary: {
        light: '#0C99A2',
        DEFAULT: '#047585',
        dark: '#035C68'
      },
      secondary: {
        DEFAULT: '#D3EDEE'
      },
      accent: {
        DEFAULT: '#0AF0FF'
      }
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
