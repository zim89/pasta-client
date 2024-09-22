'use client'

import { useMedia } from '@/hooks/useMedia'
import { useMediaQuery } from 'usehooks-ts'

import { NewsCard, ProductCard, type Dish } from '@/entities/dish'
import type { Feature } from '@/entities/feature'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/common/carousel'
import { cn } from '../lib/utils'

export const SectionSlider = ({
  data,
  type,
}: {
  data: Dish[] | Feature[]
  type: 'hits' | 'news' | 'features' | 'instagram'
}) => {
  const isDesktop = useMediaQuery('(min-width: 1440px)')

  return (
    <Carousel
      opts={{
        align: 'start',
        slidesToScroll: 1,
      }}
    >
      <CarouselContent
        className={cn(
          type === 'hits' ? 'pt-[72px]' : 'pt-0',
          isDesktop ? '-ml-16' : '-ml-[38px]',
        )}
      >
        {data.map(dish => (
          <CarouselItem
            key={dish.id}
            className={cn(
              isDesktop ? 'basis-1/3 pl-16' : 'basis-1/2 pl-[38px]',
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
          type === 'hits' ? 'top-0' : '-top-[72px]',
        )}
      >
        <CarouselPrevious className='static translate-x-0 translate-y-0' />
        <CarouselNext className='static translate-x-0 translate-y-0' />
      </div>
    </Carousel>
  )
}
