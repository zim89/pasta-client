import Image from 'next/image'

import type { Dish } from '@/entities/dish'
import img_placeholder from '@/shared/assets/images/placeholders/img-square.png'

export const DishCard = ({ dish, price }: { dish: Dish; price: number }) => {
  return (
    <div className='flex gap-4 border-t border-primary-light pt-4 md:w-[200px] md:flex-col-reverse md:gap-6 md:border-0 md:p-0 xl:w-[240px]'>
      {/* Dish desc */}
      <div className='flex flex-1 flex-col justify-between font-medium md:justify-start md:gap-5'>
        <h2 className='text-lg/[23.4px] md:text-center md:text-xl/[26px]'>
          {dish.title}
        </h2>
        <p className='text-[26px]/[31.47px] md:text-center'>{price}₴</p>
      </div>

      {/* Dish image */}
      <div className='relative h-[104px] w-[104px] overflow-hidden rounded-[8.81px] md:h-[200px] md:w-[200px] md:rounded-xl xl:h-[240px] xl:w-[240px]'>
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
