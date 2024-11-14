'use client'

import { AdminProviders } from '@/app/providers/admin-providers'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return <AdminProviders>{children}</AdminProviders>
}
