import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/common'

import { AddIngredient } from '@/features/root/add-ingredient/ui/add-ingredient'
import { AddToCart } from '@/features/root/add-to-cart'
import { ProductCard, type Dish } from '@/entities/dish'
import { APP_PAGES } from '@/shared/constants'

export const HitsSlider = ({ data }: { data: Dish[] }) => {
  return (
    <div className='space-y-8 xl:space-y-10'>
      <Carousel
        opts={{
          align: 'start',
          slidesToScroll: 1,
        }}
        className='xl:pt-[72px]'
      >
        <CarouselContent className='-ml-[38px] xl:-ml-16'>
          {data.map(dish => (
            <CarouselItem
              key={dish.id}
              className='basis-1/2 pl-[38px] xl:basis-1/3 xl:pl-16'
            >
              <ProductCard
                dish={dish}
                addIngredientSlot={<AddIngredient dish={dish} />}
                addToCartSlot={<AddToCart dish={dish} variant='btn' />}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='absolute -top-[73px] right-0 flex h-10 items-center gap-10 xl:top-0'>
          <CarouselPrevious className='static translate-x-0 translate-y-0' />
          <CarouselNext className='static translate-x-0 translate-y-0' />
        </div>
      </Carousel>
      <div className='flex justify-end'>
        <Link
          href={APP_PAGES.MENU}
          className='border-b border-b-black text-lg/[23.4px]'
        >
          Подивитися все меню
        </Link>
      </div>
    </div>
  )
}
