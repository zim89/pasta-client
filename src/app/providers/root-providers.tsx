'use client'

import { PropsWithChildren } from 'react'
import { UnsavedChangesProvider } from '@/shared/context/root-unsaved-changes'
import { Worker } from '@react-pdf-viewer/core'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { CartStoreProvider } from '@/entities/cart'
import { Toaster } from '@/shared/ui/common/sonner'
import { queryClient } from '@/shared/api'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
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
    </Worker>
  )
}
