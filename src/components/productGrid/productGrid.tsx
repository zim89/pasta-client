import { ProductCard } from '../productCard'
import { Dish } from '@/data/menu.data'

type Props = {
  products: Dish[]
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className='flex flex-wrap flex-col md:flex-row gap-6 md:gap-9'>
      {products.map((item, index) => (
        <ProductCard
          key={index}
          className='md:basis-1/2 xl:basis-[31.5%] w-full max-w-[21.125rem] xl:max-w-full'
          dish={item}
        />
      ))}
    </div>
  )
}
