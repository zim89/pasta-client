import { useEffect, useState } from 'react'

import { AddIngredient } from '@/features/root/add-ingredient'
import { AddToCart } from '@/features/root/add-to-cart'
import { ProductCard, type Dish } from '@/entities/dish'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/shared/ui/common/carousel'

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
          slidesToScroll: 2,
        }}
      >
        <CarouselContent className='-ml-[38px]'>
          {data.map(dish => (
            <CarouselItem key={dish.id} className='basis-1/2 pl-[38px]'>
              <ProductCard
                dish={dish}
                addIngredientSlot={
                  <AddIngredient disabled={dish.customizable} />
                }
                addToCartSlot={<AddToCart dish={dish} variant='btn' />}
              />
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
