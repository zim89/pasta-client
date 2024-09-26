import Link from 'next/link'

import { AddIngredient } from '@/features/root/add-ingredient/ui/add-ingredient'
import { AddToCart } from '@/features/root/add-to-cart'
import { ProductCard, ProductSkeleton, type Dish } from '@/entities/dish'
import { APP_PAGES } from '@/shared/constants'

export const HitMobile = ({
  data,
  isLoading,
}: {
  data: Dish[]
  isLoading: boolean
}) => {
  const limit = 3

  return (
    <div className='space-y-6 md:hidden'>
      <ul className='grid grid-cols-1 gap-6 md:hidden'>
        {isLoading &&
          Array.from({ length: limit }).map((_, index) => (
            <li key={index}>
              <ProductSkeleton />
            </li>
          ))}

        {!isLoading &&
          data &&
          data.slice(0, limit).map(dish => (
            <li key={dish.id}>
              <ProductCard
                dish={dish}
                addIngredientSlot={
                  <AddIngredient disabled={dish.customizable ?? false} />
                }
                addToCartSlot={<AddToCart dish={dish} variant='btn' />}
              />
            </li>
          ))}
      </ul>
      <div className='flex items-center justify-center'>
        <Link
          href={APP_PAGES.MENU}
          className='border-b border-b-primary-light text-base/[20.8px]'
        >
          Подивитися все меню
        </Link>
      </div>
    </div>
  )
}
