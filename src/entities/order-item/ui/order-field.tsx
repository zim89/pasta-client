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
    <div className='flex items-center border-b border-b-primary-light py-4'>
      <div className='relative size-20 overflow-hidden rounded-xl'>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className='h-full w-full object-cover'
        />
      </div>
      <p className='mx-[22px] w-[240px] overflow-hidden text-ellipsis whitespace-pre text-[18px]/[23.4px] font-medium'>
        {item.title}
      </p>
      <QuantityController
        value={item.quantity}
        decrease={() => changeQuantity('DECREASE', item.id)}
        increase={() => changeQuantity('INCREASE', item.id)}
      />
      <p className='mx-[47px] text-[22px]/[28.6px] font-medium'>
        {item.price}₴
      </p>
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
  )
}
