import { AddIngredient } from '@/features/root/add-ingredient/ui/add-ingredient'
import { AddToCart } from '@/features/root/add-to-cart'
import { ProductCard, type Dish } from '@/entities/dish'

export const ProductsGrid = ({ data }: { data: Dish[] }) => {
  return (
    <ul className='grid grid-cols-1 gap-6 xl:grid-cols-3 xl:gap-16'>
      {data.length > 0 &&
        data.map(dish => (
          <li key={dish.id}>
            <ProductCard
              dish={dish}
              addIngredientSlot={<AddIngredient dish={dish} />}
              addToCartSlot={<AddToCart dish={dish} variant='btn' />}
            />
          </li>
        ))}
    </ul>
  )
}
