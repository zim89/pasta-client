'use client'

import { useRouter } from 'next/navigation'
import { CategoryButton } from './_CategoryButton'
import { Dish } from '@/entities/dish/model/types'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/shared/ui/common/carousel'

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
      className='mb-8 max-w-[calc(100vw-44px)]'
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
