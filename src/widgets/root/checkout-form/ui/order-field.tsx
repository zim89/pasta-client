'use client'

import React from 'react'
import { QuantityController } from '@/shared/ui/quantity-controller'

import { CartItem, useCartStore } from '@/entities/cart'
import img_placeholder from '@/shared/assets/images/placeholders/img-square.png'
import { OrderItemCard } from '../../../../entities/order/ui/order-item-card'

type Props = {
  item: CartItem
  changeQuantity: (op: 'INCREASE' | 'DECREASE', id: string) => void
  editIngredientSlot?: React.ReactNode
  deleteOrderItemSlot: React.ReactNode
  editable?: boolean
}

export const OrderField = ({
  item,
  editIngredientSlot,
  deleteOrderItemSlot,
}: Props) => {
  const { incrementItem, decrementItem } = useCartStore(state => state)

  return (
    <div className='flex flex-col gap-y-4 border-b border-b-primary-light py-4 xl:flex-row xl:justify-between xl:pt-6'>
      {/* First row: Poster, title and ingredients */}
      <OrderItemCard
        image={item.dish.image || img_placeholder.src}
        ingredients={item.ingredients}
        title={item.dish.title}
        editIngredientSlot={editIngredientSlot}
      />

      {/* Second row: Price, quantity and delete btn */}

      <div className='flex items-center gap-3 xl:gap-10'>
        {deleteOrderItemSlot}

        <div className='xl:order-[-1]'>
          <QuantityController
            value={item.count}
            decrementProps={{
              disabled: item.count <= 1,
            }}
            incrementProps={{
              disabled: item.dish.orderCount <= item.count,
            }}
            decrease={() => decrementItem(item.id)}
            increase={() => incrementItem(item.id)}
          />
        </div>

        <p className='ml-auto text-center text-xl/[26px] font-medium xl:order-[-1] xl:w-14'>
          {item.price}₴
        </p>
      </div>
    </div>
  )
}
