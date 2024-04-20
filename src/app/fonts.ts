import { Alegreya, Inter } from 'next/font/google'

export const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter'
})

export const alegreya = Alegreya({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-alegreya'
})
