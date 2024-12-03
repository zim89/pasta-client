import Image from 'next/image'

import type { Dish } from '@/entities/dish'
import img_placeholder from '@/shared/assets/images/placeholders/img-square.png'

export const DishCard = ({ dish, price }: { dish: Dish; price: number }) => {
  return (
    <div className='flex flex-row gap-4 md:w-[313px] md:flex-row-reverse md:gap-5 xl:w-auto xl:flex-col-reverse'>
      {/* Dish desc */}
      <div className='flex flex-col justify-between font-medium md:gap-5'>
        <h2 className='text-lg/[23.4px] md:text-xl/[26px] xl:text-center'>
          {dish.title}
        </h2>
        <p className='text-[26px]/[31.47px] xl:text-center'>{price}₴</p>
      </div>

      {/* Dish image */}
      <div className='relative size-[104px] flex-none overflow-hidden rounded-[8.81px] md:size-[120px] md:rounded-xl xl:h-[240px] xl:w-[240px]'>
        <Image
          src={dish.image || img_placeholder}
          alt={dish.title}
          fill
          sizes='100%'
          className='object-cover'
        />
      </div>
    </div>
  )
}
