import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { APP_PAGES } from '@/shared/constants'
import img_placeholder from '@/shared/assets/images/placeholders/img-square.png'
import { formatMass } from '../lib'
import type { Dish } from '../model'

export const NewsCard = ({
  dish,
  addToCartSlot,
}: {
  dish: Dish
  addToCartSlot: ReactNode
}) => {
  // shadow-[2px_5px_12px_rgb(214 220 220)]
  return (
    <Link
      href={`${APP_PAGES.MENU}/${dish.slug}`}
      className='flex gap-[22px] overflow-hidden rounded-xl border border-primary-light/50 shadow-none transition-shadow duration-300 hover:border-background hover:shadow-[2px_5px_12px_0_rgb(214,220,220)] xl:gap-[18px] xl:rounded-[30px]'
    >
      <div className='relative h-[159px] w-[135px] xl:h-[196px] xl:w-[196px]'>
        <Image
          src={dish.image ? dish.image : img_placeholder}
          fill
          sizes='100%'
          className='object-cover'
          alt={dish.title}
        />
      </div>
      <div className='flex-1 space-y-4 pb-[25px] pr-[18px] pt-[21px] xl:space-y-[22px] xl:pb-[14px] xl:pr-[18px] xl:pt-[18px]'>
        <h3 className='h-8 text-sm/[16.94px] font-semibold xl:h-[63px] xl:text-base/[20.8px] xl:font-medium'>
          {dish.title}
        </h3>

        {dish.weight ? (
          <p className='pb-2 text-sm/[16.94px] opacity-70 xl:pb-0 xl:text-[13px]/[16.9px] xl:opacity-80'>
            Вага: {formatMass(dish.weight)}
          </p>
        ) : (
          <p className='pb-2 text-sm/[16.94px] opacity-70 xl:pb-0 xl:text-[13px]/[16.9px] xl:opacity-80'>
            Вага: не вказано
          </p>
        )}

        <div className='relative'>
          <p className='text-base/[19.36px] font-semibold xl:text-[22px]/[28.6px] xl:font-medium'>
            {dish.price}₴
          </p>

          {addToCartSlot && addToCartSlot}
        </div>
      </div>
    </Link>
  )
}
