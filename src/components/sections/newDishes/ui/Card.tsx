import type { NewDishes } from '@/types/dish.types'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { formatMass } from '@/helpers/newDishes.helpers'
import { NewsTitle } from './NewsTitle'
import { NewDish } from '@/data/newDishes.data'

export type Props = { dish: NewDish }

export const Card = ({ dish }: { dish: NewDishes }) => {
  return (
    <div
      className='flex gap-[22px] rounded-xl border border-primary-light/50 overflow-clip xl:gap-[18px] xl:rounded-[30px]'
      data-testid='card'
    >
      <div className='relative w-[135px] h-[159px] xl:h-[196px] xl:w-[196px]'>
        <Image
          data-testid='card-poster'
          src={dish.image}
          fill
          sizes='100%'
          className='object-cover'
          alt={dish.title}
        />
      </div>
      <div className='flex-1 pt-[21px] pb-[25px] pr-[18px] space-y-4 xl:pt-[18px] xl:pr-[18px] xl:pb-[14px] xl:space-y-[22px]'>
        <NewsTitle title={dish.title} />

        <p
          className='text-sm/[16.94px] opacity-70 pb-2 xl:text-[13px]/[16.9px] xl:opacity-80 xl:pb-0'
          data-testid='card-attr-mass'
        >
          Вага: {formatMass(dish.weight)}
        </p>

        <div className='relative'>
          <p
            className='font-semibold text-base/[19.36px] px-[5.5px] xl:text-[22px]/[28.6px] xl:font-medium'
            data-testid='card-attr-price'
          >
            {dish.price}₴
          </p>
          <Button className='absolute top-1/2 -translate-y-1/2 right-0 bg-primary-light rounded-full p-2 text-white'>
            <ShoppingCart size={24} />
          </Button>
        </div>
      </div>
    </div>
  )
}
