import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { APP_PAGES } from '@/shared/constants'
import { formatMeasurement } from '../lib/dish.helpers'
import type { Dish } from '../model'
import { HitLabel } from './hit-label'

export const ProductCard = ({
  dish,
  addIngredientSlot,
  addToCartSlot,
  isHit = false,
}: {
  dish: Dish
  addIngredientSlot: ReactNode
  addToCartSlot: ReactNode
  isHit?: boolean
}) => {
  return (
    <div className='relative w-full overflow-hidden rounded-[30px] border border-primary-light/50'>
      <Link href={`${APP_PAGES.MENU}/${dish.slug}`}>
        <div className='relative aspect-[5/3.8417]'>
          <Image
            src={dish.image ? dish.image : 'https://placehold.co/600x400.png'}
            fill
            sizes='100%'
            alt={dish.title}
            className='object-cover'
          />
        </div>
      </Link>
      <div className='p-4'>
        <Link href={`${APP_PAGES.MENU}/${dish.slug}`}>
          <h4 className='mb-1 h-[46px] text-xl/[26px] font-medium'>
            <span>{dish.title}</span>
          </h4>
          <p className='mb-6 line-clamp-2 h-9 text-sm/[18.2px] opacity-70'>
            {dish.composition}
          </p>
        </Link>

        <div className='flex items-center justify-between'>
          <div className='flex flex-1 flex-col gap-4 xl:gap-5'>
            <div className='flex items-center justify-between'>
              <p className='text-sm/[18.2px] opacity-70'>
                {formatMeasurement(dish)}
              </p>
              <div className='w-[200px] xl:w-[220px]'>{addIngredientSlot}</div>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-[26px]/[31.47px] font-medium'>
                {dish.price.toFixed(0)}₴
              </p>
              <div className='w-[200px] xl:w-[220px]'>{addToCartSlot}</div>
            </div>
          </div>
        </div>
      </div>

      {isHit && <HitLabel />}
    </div>
  )
}
