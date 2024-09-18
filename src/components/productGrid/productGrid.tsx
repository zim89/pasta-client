import { ProductCard } from '../productCard/ProductCard'
import { Dish } from '@/entities/dish/model/types'

type Props = {
  products: Dish[]
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className='flex flex-col flex-wrap gap-6 md:flex-row md:gap-8'>
      {products.map((item, index) => (
        <ProductCard
          key={index}
          className='w-full max-w-[21.125rem] md:basis-1/2 xl:max-w-full xl:basis-[31.5%]'
          dish={item}
        />
      ))}
    </div>
  )
}
