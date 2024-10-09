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
    <div className='flex flex-wrap gap-y-4 border-b border-b-primary-light pb-4 pt-4 xl:items-center xl:pt-6'>
      <div className='flex-2 relative size-20 overflow-hidden rounded-xl'>
        <Image
          src={item.dish.image}
          alt={item.dish.title}
          fill
          className='h-full w-full object-cover'
        />
      </div>
      <div className='inline-flex max-w-[240px] flex-[100%] flex-wrap gap-2 px-[22px] text-[18px]/[23.4px] font-medium'>
        <p>{item.dish.title}</p>
        {item.ingredients.length > 0 && (
          <Select>
            <SelectTrigger className='h-8 max-w-min gap-2'>
              <SelectValue placeholder='Інгредієнти' />
            </SelectTrigger>
            <SelectContent>
              {item.ingredients.map(ingr => (
                <SelectItem key={ingr.id} value={ingr.name}>
                  {ingr.name} - {formatMass(ingr.weight)} (
                  {ingr.price * ingr.count}₴)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      <div className='order-[2] mx-auto xl:order-none xl:mx-0'>
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

      <p className='xxl:mx-0 order-[3] ml-auto text-right text-[22px]/[26px] font-medium xl:order-none xl:mx-[47px] xl:flex-1 xl:text-[22px]/[28.6px]'>
        {item.price}₴
      </p>
      <div className='order-[1] self-center xl:order-none xl:ml-auto'>
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
    </div>
  )
}
