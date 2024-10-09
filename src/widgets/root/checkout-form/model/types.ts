import { UseFormReturn } from 'react-hook-form'

export type OrderForm = UseFormReturn<
  {
    city: string
    street: string
    buildingNumber: string

    entrance: string
    appartmentHouse: string
    story: string
    intercom: string
  },
  unknown,
  undefined
>
