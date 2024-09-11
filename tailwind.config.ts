import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
      light: '#FBFBFB',
      gray: {
        200: '#F3F3F3',
        DEFAULT: '#6F7273',
        400: '#9FA3A4',
      },
      primary: {
        light: '#0C99A2',
        DEFAULT: '#047585',
        dark: '#035C68',
      },
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
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
