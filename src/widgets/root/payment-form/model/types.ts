import { UseFormReturn } from 'react-hook-form'

export type PaymentForm = UseFormReturn<
  {
    name: string
    phone: string
    email: string
    deliveryDate: string
    deliveryTime: string
    paymentMethod: string
    comment: string
  },
  unknown,
  undefined
>
