import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Providers } from '@/app/providers/root-providers'
import { alegreya, inter } from '@/app/ui/fonts'
import '@/app/ui/globals.css'
import { SITE_NAME } from '@/shared/constants/seo.const'
import { cn } from '@/shared/lib/utils/cn-merge'

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
      <body
        className={cn(
          'min-h-screen antialiased',
          alegreya.variable,
          inter.className
        )}
      >
        <Suspense>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  )
}
