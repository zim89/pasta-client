import type { Dish } from '@/types/dish.types'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { formatMass } from '@/helpers/newDishes.helpers'
import { NewsCardTitle } from './NewsTitle'

export const Card = ({ dish }: { dish: Dish }) => {
  return (
    <div
      className='flex gap-[22px] overflow-clip rounded-xl border border-primary-light/50 xl:gap-[18px] xl:rounded-[30px]'
      data-testid='card'
    >
      <div className='relative h-[159px] w-[135px] xl:h-[196px] xl:w-[196px]'>
        <Image
          data-testid='card-poster'
          src={dish.image}
          fill
          sizes='100%'
          className='object-cover'
          alt={dish.title}
        />
      </div>
      <div className='flex-1 space-y-4 pb-[25px] pr-[18px] pt-[21px] xl:space-y-[22px] xl:pb-[14px] xl:pr-[18px] xl:pt-[18px]'>
        <NewsCardTitle title={dish.title} />

        <p
          className='pb-2 text-sm/[16.94px] opacity-70 xl:pb-0 xl:text-[13px]/[16.9px] xl:opacity-80'
          data-testid='card-attr-mass'
        >
          Вага: {formatMass(dish.weight)}
        </p>

        <div className='relative'>
          <p
            className='px-[5.5px] text-base/[19.36px] font-semibold xl:text-[22px]/[28.6px] xl:font-medium'
            data-testid='card-attr-price'
          >
            {dish.price}₴
          </p>
          <Button className='absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-primary-light p-2 text-white'>
            <ShoppingCart size={24} />
          </Button>
        </div>
      </div>
    </div>
  )
}
