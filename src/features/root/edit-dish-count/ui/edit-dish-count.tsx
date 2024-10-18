import { useState } from 'react'

import { AddIngredient } from '@/features/root/add-ingredient'
import { AddToCart } from '@/features/root/add-to-cart'
import type { Dish } from '@/entities/dish'

export const EditDishCount = ({ dish }: { dish: Dish }) => {
  const [count, setCount] = useState(1)
  const totalPrice = dish.price * count

  return (
    <div className='flex flex-col gap-6 xl:gap-14'>
      <AddIngredient
        dish={dish}
        count={count}
        className='w-full xl:w-[220px]'
      />

      <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
          <button
            disabled={count === 1}
            onClick={() => setCount(prev => prev - 1)}
            className='flex size-10 items-center justify-center rounded-md border border-gray-400 text-[26px]/[31.47px] text-gray-500 transition-colors duration-300 hover:text-black disabled:text-gray-400'
          >
            -
          </button>
          <span className='flex size-10 items-center justify-center rounded-md border border-gray-400 text-[20px]/[26px] text-black'>
            {count}
          </span>
          <button
            onClick={() => setCount(prev => prev + 1)}
            className='flex size-10 items-center justify-center rounded-md border border-gray-400 text-[26px]/[31.47px] text-gray-500 transition-colors duration-300 hover:text-black disabled:text-gray-400'
          >
            +
          </button>
        </div>
        <p className='text-[26px]/[31.47px] font-medium tracking-wide md:text-[32px]/[41.6px]'>
          {totalPrice}₴
        </p>

        <AddToCart
          dish={dish}
          count={count}
          variant='btn'
          className='hidden xl:block'
        />
      </div>

      <AddToCart
        dish={dish}
        count={count}
        variant='btn'
        className='w-full xl:hidden'
      />
    </div>
  )
}
