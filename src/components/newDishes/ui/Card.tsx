import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { Dish } from '@/entities/dish/model/types'
import { formatMass } from '@/shared/lib/utils/menu-funcs'
import { Button } from '@/shared/ui/common/button'

export type Props = { dish: Dish }

export const Card = ({ dish }: Props) => {
  return (
    <div
      className='flex w-full overflow-clip rounded-4xl border border-primary-light'
      data-testid='card'
    >
      <div className='relative min-h-[159px] w-full max-w-[135px] xl:max-w-[160px]'>
        <Image
          data-testid='card-poster'
          src={dish.image}
          fill
          className='object-cover'
          alt={dish.title}
        />
      </div>
      <div className='m-4 flex flex-1 flex-col justify-around'>
        <h3
          className='text-sm font-semibold'
          data-testid='card-name'
        >
          {dish.title}
        </h3>
        {dish.weight && (
          <span
            className='my-3 inline-block text-sm opacity-70'
            data-testid='card-attr-mass'
          >
            Вага: {formatMass(dish.weight)}
          </span>
        )}
        <div className='flex items-center justify-between'>
          <span
            className='text-[1.375rem] font-semibold'
            data-testid='card-attr-price'
          >
            {dish.price}₴
          </span>
          <Button className='rounded-full bg-primary-light p-2 text-white'>
            <ShoppingCart size={24} />
          </Button>
        </div>
      </div>
    </div>
  )
}
