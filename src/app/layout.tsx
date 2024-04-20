import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { SITE_NAME } from '@/constants/seo.const'
import { inter } from './fonts'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen antialiased', inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
