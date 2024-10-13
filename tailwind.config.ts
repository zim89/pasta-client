import tailwindcssAnimate from 'tailwindcss-animate'

import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    screens: {
      sm: '390px',
      md: '834px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        md: '60px',
        xl: '80px',
      },
    },
    colors: {
      black: 'rgb(0, 17, 20)',
      white: '#FFFFFF',
      background: '#FBFBFB',
      'card-background': '#FEFEFE',
      light: '#FBFBFB',
      danger: '#BD0404',
      gray: {
        '300': '#F3F3F3',
        '400': '#DBDBDB',
        '500': '#9FA3A4',
        '600': '#94999A',
        '700': '#6F7273',
      },
      green: {
        '100': '#F2F6F6',
      },
      primary: {
        lightest: '#F2F6F6',
        lighter: '#D3EDEE',
        light: '#0C99A2',
        DEFAULT: '#047585',
        dark: '#035C68',
      },
      disabled: '#EBF1F1',
      secondary: {
        DEFAULT: '#D3EDEE',
      },
      accent: {
        DEFAULT: '#0AF0FF',
      },
    },
    extend: {
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '1.875rem',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      fontFamily: {
        alegreya: ['var(--font-alegreya)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config
