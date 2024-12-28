import { Suspense } from 'react'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import { Providers } from '@/app/providers/root-providers'
import { alegreya, inter } from '@/app/ui/fonts'
import { DEVELOPMENT_MODE, SITE_NAME } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'

import '@/app/ui/globals.css'

const WinterTheme = dynamic(
  async () => (await import('@/widgets/root/winter-theme')).WinterTheme,
  {
    ssr: false,
  },
)

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
          {!DEVELOPMENT_MODE && <WinterTheme />}
        </Suspense>

        <script src='https://acrobatservices.adobe.com/view-sdk/viewer.js'></script>
      </body>
    </html>
  )
}
