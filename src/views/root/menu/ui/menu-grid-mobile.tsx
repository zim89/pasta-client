import { useState } from 'react'

import { AddIngredient } from '@/features/root/add-ingredient'
import { AddToCart } from '@/features/root/add-to-cart'
import { ProductCard, type Dish } from '@/entities/dish'
import { PAGINATION_LIMIT_MOBILE } from '@/shared/constants'

export const MenuGridMobile = ({ data }: { data: Dish[] }) => {
  const [page, setPage] = useState(1)
  const pages = Math.ceil(data.length / PAGINATION_LIMIT_MOBILE)
  const sliceEnd = page * PAGINATION_LIMIT_MOBILE

  return (
    <>
      <ul className='grid grid-cols-1 gap-6'>
        {data.length > 0 &&
          data.slice(0, sliceEnd).map(dish => (
            <li key={dish.id}>
              <ProductCard
                dish={dish}
                addIngredientSlot={
                  <AddIngredient disabled={dish.customizable} />
                }
                addToCartSlot={<AddToCart dish={dish} variant='btn' />}
              />
            </li>
          ))}
      </ul>

      {pages > 1 && page !== pages && (
        <div className='flex items-center justify-center'>
          <button
            disabled={page === pages}
            onClick={() => setPage(prev => prev + 1)}
            className='text-base/[20.8px]pb-px border-b border-b-primary-light transition-colors duration-300'
          >
            Подивитися ще...
          </button>
        </div>
      )}
    </>
  )
}
