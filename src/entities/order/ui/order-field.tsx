'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui'
import { QuantityController } from '@/shared/ui/quantity-controller'
import { Trash2 } from 'lucide-react'

import { DeleteItemModal } from '@/widgets/root/delete-item-modal'
import { CartItem, useCartStore } from '@/entities/cart'
import { formatMass } from '@/entities/dish/lib'

type Props = {
  item: CartItem
  removeDish: (id: string) => void
  changeQuantity: (op: 'INCREASE' | 'DECREASE', id: string) => void
}

export const OrderField = ({ item, removeDish }: Props) => {
  const [deleteModalOpened, setDeleteModalOpened] = useState(false)
  const { incrementItem, decrementItem } = useCartStore(state => state)

  return (
    <div className='flex flex-col gap-y-4 border-b border-b-primary-light py-4 xl:flex-row xl:justify-between xl:pt-6'>
      {/* First row: Poster, title and ingredients */}
      <div className='flex w-full gap-3 xl:max-w-[360px]'>
        <div className='relative max-h-[90px] w-full max-w-[90px] overflow-hidden rounded-xl'>
          <Image
            src={item.dish.image}
            alt={item.dish.title}
            fill
            className='h-full w-full object-cover'
          />
        </div>
        <div className='w-full text-base/[20.8px] font-medium md:text-[18px]/[23.4px]'>
          <p className='mb-2'>{item.dish.title}</p>
          <div className='flex flex-col rounded-xl bg-primary-lightest px-3 py-2 text-sm/[18.2px]'>
            <h3 className='mb-1 font-medium'>Додаткові інгредієнти:</h3>
            <p className='font-normal'>
              {item.ingredients.length > 0
                ? item.ingredients.reduce(
                    (acc, prev) =>
                      acc.length
                        ? acc + ', ' + prev.name + ` (${prev.count})`
                        : acc + prev.name + ` (${prev.count})`,
                    '',
                  )
                : 'немає'}
            </p>
          </div>
        </div>
      </div>

      {/* Second row: Price, quantity and delete btn */}
      <div className='flex items-center gap-3 xl:gap-10'>
        <div className='w-[90px] xl:w-auto'>
          <DeleteItemModal
            handleOpenChange={val => setDeleteModalOpened(val)}
            opened={deleteModalOpened}
            title='Delete Item'
            handleConfirm={() => {
              removeDish(item.id)
              setDeleteModalOpened(false)
            }}
            openingButton={
              <button
                type='button'
                onClick={() => setDeleteModalOpened(true)}
                className='ml-auto'
              >
                <Trash2 size={24} className='text-gray-500' />
              </button>
            }
          />
        </div>

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
