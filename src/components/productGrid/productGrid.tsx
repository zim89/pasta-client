import type { Dish } from '@/types/dish.types'
import { ProductCard } from '@/components/productCard'

export const ProductGrid = ({ products }: { products: Dish[] }) => {
  return (
    <div className='flex flex-col flex-wrap gap-6 md:flex-row md:gap-9'>
      {products.map(item => (
        <ProductCard
          key={item.id}
          className='w-full max-w-[21.125rem] md:basis-1/2 xl:max-w-full xl:basis-[31.5%]'
          dish={item}
        />
      ))}
    </div>
  )
}
