import { UseFormReturn } from 'react-hook-form'

export type SharedFields = {
  email?: string | undefined
  comment?: string | undefined
  name: string
  phone: string
  deliveryDate: string
  deliveryTime: string
  paymentMethod: string
}

export type ControlledFields = {
  city: string
  street: string
  buildingNumber: string
  appartmentHouse?: string | undefined
  story?: string | undefined
  intercom?: string | undefined
  entrance?: string | undefined
} & SharedFields

export type PickupFields = SharedFields

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type OrderForm = UseFormReturn<ControlledFields, any, undefined>
export type PickupOrderForm = UseFormReturn<
  {
    email?: string | undefined
    comment?: string | undefined
    name: string
    phone: string
    deliveryDate: string
    deliveryTime: string
    paymentMethod: string
  },
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  any,
  undefined
>
