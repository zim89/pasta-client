'use client'

import { createContext, useContext, useRef, type ReactNode } from 'react'
import { useStore } from 'zustand'

import {
  createOrderStore,
  initOrderStore,
  type OrderStore,
} from './order-store'

export type OrderStoreApi = ReturnType<typeof createOrderStore>

export const OrderStoreContext = createContext<OrderStoreApi | undefined>(
  undefined,
)

export type OrderStoreProviderProps = {
  children: ReactNode
}

export const OrderStoreProvider = ({ children }: OrderStoreProviderProps) => {
  const storeRef = useRef<OrderStoreApi>()
  if (!storeRef.current) {
    storeRef.current = createOrderStore(initOrderStore())
  }

  return (
    <OrderStoreContext.Provider value={storeRef.current}>
      {children}
    </OrderStoreContext.Provider>
  )
}

export const useOrderStore = <T,>(selector: (store: OrderStore) => T): T => {
  const orderStoreContext = useContext(OrderStoreContext)

  if (!orderStoreContext) {
    throw new Error(`useOrderStore must be used within OrderStoreProvider`)
  }

  return useStore(orderStoreContext, selector)
}
