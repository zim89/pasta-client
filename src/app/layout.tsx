import { Suspense } from 'react'
import type { Metadata } from 'next'

import { SITE_NAME } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'
import { alegreya, inter } from './fonts'
import { Providers } from './providers'

import './globals.css'

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen antialiased',
          alegreya.variable,
          inter.className,
        )}
      >
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  )
}
