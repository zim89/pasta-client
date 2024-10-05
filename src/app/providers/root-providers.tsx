'use client'

import { PropsWithChildren, useState } from 'react'
import { UnsavedChangesProvider } from '@/shared/context/root-unsaved-changes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { CartStoreProvider } from '@/entities/cart'

export const Providers = ({ children }: PropsWithChildren) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }),
  )

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <UnsavedChangesProvider>
        <CartStoreProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </CartStoreProvider>
      </UnsavedChangesProvider>
    </QueryClientProvider>
  )
}
