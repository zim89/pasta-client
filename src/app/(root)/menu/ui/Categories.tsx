'use client'

import { Dish } from '@/types/dish.types'
import { useRouter } from 'next/navigation'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { CategoryButton } from './CategoryButton'

type Props = {
  dishes: Dish[]
}

export const Categories = ({ dishes }: Props) => {
  const router = useRouter()

  const categories = dishes.reduce((acc, curr) => {
    return acc.add(curr.type)
  }, new Set<string>())

  return (
    <Carousel
      className='max-w-[calc(100vw-44px)] mb-8'
      opts={{
        align: 'start',
        slidesToScroll: 3
      }}
    >
      <CarouselContent>
        <CarouselItem className='basis-auto'>
          <CategoryButton
            onClick={() => router.replace('/menu')}
            label='Все меню'
          />
        </CarouselItem>
        {Array.from(categories)
          .sort()
          .map((cat, index) => {
            return (
              <CarouselItem
                className='basis-auto pl-[22px]'
                key={index}
              >
                <CategoryButton
                  onClick={() => router.replace(`?filter=${cat}`)}
                  label={cat}
                />
              </CarouselItem>
            )
          })}
      </CarouselContent>
    </Carousel>
  )
}
