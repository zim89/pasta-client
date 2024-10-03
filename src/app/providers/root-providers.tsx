'use client'

import { PropsWithChildren, useState } from 'react'
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
      <CartStoreProvider>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </CartStoreProvider>
    </QueryClientProvider>
  )
}
