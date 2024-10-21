'use client'

import type { MouseEventHandler } from 'react'
import { ShoppingCart } from 'lucide-react'

import { useCartStore, type CartIngredient } from '@/entities/cart'
import type { Dish } from '@/entities/dish'
import { cn } from '@/shared/lib/utils'

export const AddToCart = ({
  dish,
  count = 1,
  ingredients = [],
  variant = 'btn',
  className,
}: {
  dish: Dish
  count?: number
  ingredients?: CartIngredient[]
  variant: 'icon' | 'btn'
  className?: string
}) => {
  const { addToCart } = useCartStore(state => state)

  const onClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    addToCart({
      dish,
      count,
      ingredients,
    })
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-primary-light text-base/[20.8px] font-medium text-white transition-colors duration-300 hover:bg-primary',
        variant === 'icon'
          ? 'absolute right-0 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full'
          : 'h-11 w-[200px] rounded-4xl xl:w-[220px]',
        className,
      )}
    >
      {variant === 'icon' ? <ShoppingCart className='size-6' /> : 'До кошика'}
    </button>
  )
}
