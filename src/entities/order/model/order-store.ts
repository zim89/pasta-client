import { createStore } from 'zustand'

export type OrderState = {
  shippingAddress: {
    city: string
    street: string
    houseNumber: string
    entrance?: string
    appartmentNumber?: string
    story?: string
    intercomCode?: string
  }
  orderDetails: {
    name: string
    phone: string
    date: string
    time: string
    payType: string
    email?: string
    comment?: string
  }
}

export type OrderActions = {
  setShippingAddress: (address: OrderState['shippingAddress']) => void
}

export type OrderStore = OrderState & OrderActions

export const defaultInitState: OrderState = {
  shippingAddress: {
    city: '',
    street: '',
    houseNumber: '',
    entrance: '',
    appartmentNumber: '',
    story: '',
    intercomCode: '',
  },
  orderDetails: {
    name: '',
    phone: '',
    payType: '',
    date: '',
    time: '',
    email: '',
    comment: '',
  },
}

export const initOrderStore = (): OrderState => {
  return defaultInitState
}

export const createOrderStore = (initState: OrderState = defaultInitState) =>
  createStore<OrderStore>()(set => ({
    ...initState,
    setShippingAddress: (address: OrderState['shippingAddress']) =>
      set(() => ({ shippingAddress: address })),
  }))
