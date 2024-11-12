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

export type OrderForm = UseFormReturn<ControlledFields, unknown, undefined>
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
  unknown,
  undefined
>
