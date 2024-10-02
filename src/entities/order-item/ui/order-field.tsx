import { useState } from 'react'
import Image from 'next/image'
import { QuantityController } from '@/shared/ui/quantity-controller'
import { Trash2 } from 'lucide-react'

import { DeleteItemModal } from '@/widgets/root/delete-item-modal'
import { OrderItem } from '../model'

type Props = {
  item: OrderItem
  removeDish: (id: number) => void
  changeQuantity: (op: 'INCREASE' | 'DECREASE', id: number) => void
}

export const OrderField = ({ item, removeDish, changeQuantity }: Props) => {
  const [deleteModalOpened, setDeleteModalOpened] = useState(false)

  return (
    <div className='flex flex-wrap gap-y-4 border-b border-b-primary-light pb-4 pt-4 xl:items-center xl:pt-6'>
      <div className='flex-2 relative size-20 overflow-hidden rounded-xl'>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className='h-full w-full object-cover'
        />
      </div>
      <p className='inline-flex max-w-[240px] flex-[100%] flex-wrap px-[22px] text-[18px]/[23.4px] font-medium'>
        Паста з креветками та шпинатом
      </p>
      <div className='order-[2] mx-auto xl:order-none xl:mx-0'>
        <QuantityController
          value={item.quantity}
          decrease={() => changeQuantity('DECREASE', item.id)}
          increase={() => changeQuantity('INCREASE', item.id)}
          handleRemove={() => removeDish(item.id)}
        />
      </div>
      <p className='order-[3] self-center text-[22px]/[26px] font-medium xl:order-none xl:mx-[47px] xl:text-[22px]/[28.6px]'>
        {item.price}₴
      </p>
      <div className='order-[1] self-center xl:order-none xl:ml-auto'>
        <DeleteItemModal
          handleOpenChange={val => setDeleteModalOpened(val)}
          opened={deleteModalOpened}
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
