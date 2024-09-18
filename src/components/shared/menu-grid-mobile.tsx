import { useState } from 'react'
import { ProductCard } from '../productCard'
import type { Dish } from '@/entities/dish/model/types'
import { PAGINATION_LIMIT_MOBILE } from '@/shared/constants/app.const'

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
              <ProductCard dish={dish} />
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
