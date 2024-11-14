import type { Metadata } from 'next'

import { NotFoundPage } from '@/views/root/not-found/not-found-page'
import { RootLayout } from '@/widgets/root/root-layout'

export const metadata: Metadata = {
  title: 'Not Found | 404',
  robots: {
    index: false,
  },
}
export default function NotFound() {
  return (
    <RootLayout>
      <NotFoundPage />
    </RootLayout>
  )
}
