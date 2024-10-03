'use client'

import { ShoppingCart } from 'lucide-react'

import { useCartStore } from '@/entities/cart'
import type { Dish } from '@/entities/dish'
import { cn } from '@/shared/lib/utils'

export const AddToCart = ({
  dish,
  variant = 'btn',
  className,
}: {
  dish: Dish
  variant: 'icon' | 'btn'
  className?: string
}) => {
  const { toggleCartDrawer, addToCart } = useCartStore(state => state)

  const onClick = () => {
    addToCart({
      dish,
      ingredients: [],
    })
    toggleCartDrawer()
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
