import Image from 'next/image'

import { EditDishCount } from '@/features/root/edit-dish-count'
import type { Dish } from '@/entities/dish'
import { DeliveryModal } from '../../delivery-modal'
import { RecommendDishes } from '../../recommend-dishes'

export const ProductDetails = ({ dish }: { dish: Dish }) => {
  return (
    <div className='space-y-10 md:space-y-6 xl:space-y-[77px]'>
      <section className='flex flex-col gap-5 md:flex-row md:gap-12 xl:gap-[100px]'>
        <div className='relative h-[251px] overflow-hidden rounded-[16.89px] border-[0.56px] border-black/30 md:h-[367px] md:w-[347px] md:rounded-4xl xl:h-[454px] xl:w-[620px]'>
          <Image
            src={dish.image}
            alt={dish.title}
            fill
            sizes='100%'
            className='object-cover'
          />
        </div>

        <div className='flex-1 space-y-6 xl:space-y-14'>
          {/* Dish meta */}
          <div className='space-y-4 text-black/70 xl:space-y-8'>
            <h1 className='text-[22px]/[28.6px] font-medium text-black xl:text-[32px]/[41.6px] xl:tracking-wide'>
              {dish.title}
            </h1>
            <p className='flex items-baseline justify-between text-[13px]/[16.9px] xl:text-sm/[18.2px]'>
              <span>Вага: {dish.weight} г</span>
              <span></span>
            </p>
            <p className='text-sm/[18.2px] xl:text-base/[20.8px]'>
              {dish.composition}
            </p>
          </div>

          {/* Dish actions */}
          <EditDishCount dish={dish} />

          <DeliveryModal />
        </div>
      </section>

      <RecommendDishes />
    </div>
  )
}
