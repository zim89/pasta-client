import { ShoppingCart } from 'lucide-react'

import type { Dish } from '@/entities/dish'
import { cn } from '@/shared/lib/utils'

export const AddToCart = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dish,
  variant = 'btn',
  className,
}: {
  dish: Dish
  variant: 'icon' | 'btn'
  className?: string
}) => {
  return (
    <button
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
