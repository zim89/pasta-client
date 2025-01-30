import { Suspense } from 'react'
import type { Metadata } from 'next'

import { Providers } from '@/app/providers/root-providers'
import { alegreya, inter } from '@/app/ui/fonts'
import { SITE_NAME } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'

import '@/app/ui/globals.css'

import Script from 'next/script'

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
    <html lang='en' className='scroll-smooth'>
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

        <Script src='https://acrobatservices.adobe.com/view-sdk/viewer.js' />
      </body>
    </html>
  )
}
