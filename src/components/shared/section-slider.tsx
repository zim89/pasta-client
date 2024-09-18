'use client'

import { NewsCard } from '@/components/sections/new-dishes/ui/news-card'
import { ProductCard } from '../productCard'
import type { Dish } from '@/entities/dish/model/types'
import { useMedia } from '@/shared/lib/hooks/useMedia'
import { cn } from '@/shared/lib/utils/cn-merge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/shared/ui/common/carousel'

export const SectionSlider = ({
  data,
  type
}: {
  data: Dish[]
  type: 'hits' | 'news'
}) => {
  const { isLaptopScreen } = useMedia()

  return (
    <Carousel
      opts={{
        align: 'start',
        slidesToScroll: 1
      }}
    >
      <CarouselContent
        className={cn(
          type === 'hits' ? 'pt-[72px]' : 'pt-0',
          isLaptopScreen ? '-ml-16' : '-ml-[38px]'
        )}
      >
        {data.map(dish => (
          <CarouselItem
            key={dish.id}
            className={cn(
              isLaptopScreen ? 'basis-1/3 pl-16' : 'basis-1/2 pl-[38px]'
            )}
          >
            {type === 'hits' && <ProductCard dish={dish} />}
            {type === 'news' && <NewsCard dish={dish} />}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        className={cn(
          'absolute right-0 flex h-10 items-center gap-10',
          type === 'hits' ? 'top-0' : '-top-[72px]'
        )}
      >
        <CarouselPrevious className='static translate-x-0 translate-y-0' />
        <CarouselNext className='static translate-x-0 translate-y-0' />
      </div>
    </Carousel>
  )
}
