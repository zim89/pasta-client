'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { CategoryButton } from './CategoryButton'
import { categories } from '@/data/menu.data'

export const Categories = () => {
  return (
    <>
      {/* Mobile only */}
      <Carousel
        className='max-w-[calc(100vw-44px)] md:hidden mb-8'
        opts={{
          align: 'start',
          slidesToScroll: 3
        }}
      >
        <CarouselContent>
          <CarouselItem className='basis-auto'>
            <CategoryButton
              onClick={() => {}}
              label='Все меню'
            />
          </CarouselItem>
          {categories.map((cat, index) => {
            return (
              <CarouselItem
                className='basis-auto pl-[22px]'
                key={index}
              >
                <CategoryButton
                  onClick={() => {}}
                  label={cat}
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
      {/* Tablet/laptop displays */}
      <ul className='hidden md:flex justify-between mb-10'>
        <CategoryButton
          onClick={() => {}}
          label='Все меню'
        />
        {categories.map((cat, index) => (
          <CategoryButton
            key={index}
            label={cat}
            onClick={() => {}}
          />
        ))}
      </ul>
    </>
  )
}
