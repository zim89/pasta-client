'use client'

import { PropsWithChildren } from 'react'
import { UnsavedChangesProvider } from '@/shared/context/root-unsaved-changes'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { CartStoreProvider } from '@/entities/cart'
import { Toaster } from '@/shared/ui/common/sonner'
import { queryClient } from '@/shared/api'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <UnsavedChangesProvider>
        <CartStoreProvider>
          {children}
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
        </CartStoreProvider>
      </UnsavedChangesProvider>
    </QueryClientProvider>
  )
}
