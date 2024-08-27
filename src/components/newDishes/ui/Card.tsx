import { Dish } from '@/types/dish.types'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { formatMass } from '@/helpers/newDishes.helpers'

export type Props = { dish: Dish }

export const Card = ({ dish }: Props) => {
  return (
    <div
      className='flex rounded-4xl border border-primary-light overflow-clip w-full'
      data-testid='card'
    >
      <div className='relative w-full max-w-[135px] xl:max-w-[160px] min-h-[159px]'>
        <Image
          data-testid='card-poster'
          src={dish.image}
          fill
          className='object-cover'
          alt={dish.title}
        />
      </div>
      <div className='m-4 flex-1 flex flex-col justify-around'>
        <h3
          className='text-sm font-semibold'
          data-testid='card-name'
        >
          {dish.title}
        </h3>
        {dish.weight && (
          <span
            className='inline-block text-sm my-3 opacity-70'
            data-testid='card-attr-mass'
          >
            Вага: {formatMass(dish.weight)}
          </span>
        )}
        <div className='flex items-center justify-between'>
          <span
            className='font-semibold text-[1.375rem]'
            data-testid='card-attr-price'
          >
            {dish.price}₴
          </span>
          <Button className='bg-primary-light rounded-full p-2 text-white'>
            <ShoppingCart size={24} />
          </Button>
        </div>
      </div>
    </div>
  )
}
