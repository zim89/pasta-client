import Image from 'next/image'
import { QuantityController } from '@/shared/ui/quantity-controller'
import { Trash2 } from 'lucide-react'

import { Dish } from '@/entities/dish'

type Props = {
  dish: Dish
  removeDish: () => void
}

export const OrderField = ({ dish, removeDish }: Props) => {
  return (
    <div className='flex items-center border-b border-b-primary-light py-4'>
      <div className='relative size-20 overflow-hidden rounded-xl'>
        <Image
          src={dish.image}
          alt={dish.title}
          fill
          className='h-full w-full object-cover'
        />
      </div>
      <p className='mx-[22px] w-[240px] overflow-hidden text-ellipsis whitespace-pre text-[18px]/[23.4px] font-medium'>
        {dish.title}
      </p>
      <QuantityController value={1} decrease={() => {}} increase={() => {}} />
      <p className='mx-[47px] text-[22px]/[28.6px] font-medium'>
        {dish.price}₴
      </p>
      <button type='button' onClick={removeDish} className='ml-auto'>
        <Trash2 size={24} className='text-gray-500' />
      </button>
    </div>
  )
}
