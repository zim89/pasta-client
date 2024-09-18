import { ProductCard } from '../productCard'
import type { Dish } from '@/entities/dish/model/types'

export const MenuGrid = ({ data }: { data: Dish[] }) => {
  return (
    <ul className='grid grid-cols-1 gap-6 xl:grid-cols-3 xl:gap-16'>
      {data.length > 0 &&
        data.map(dish => (
          <li key={dish.id}>
            <ProductCard dish={dish} />
          </li>
        ))}
    </ul>
  )
}
