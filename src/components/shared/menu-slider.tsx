import { useEffect, useState } from 'react'
import type { Dish } from '@/types/dish.types'
import { ProductCard } from '@/components/productCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'

export const MenuSlider = ({ data }: { data: Dish[] }) => {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    api.scrollTo(0)
  }, [data])

  return (
    <div className='pb-[72px]'>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          slidesToScroll: 2
        }}
      >
        <CarouselContent className='-ml-[38px]'>
          {data.map(dish => (
            <CarouselItem
              key={dish.id}
              className='basis-1/2 pl-[38px]'
            >
              <ProductCard dish={dish} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {data.length > 2 && (
          <div className='absolute -bottom-[72px] right-0 flex items-center gap-10'>
            <CarouselPrevious className='static translate-x-0 translate-y-0' />
            <CarouselNext className='static translate-x-0 translate-y-0' />
          </div>
        )}
      </Carousel>
    </div>
  )
}
