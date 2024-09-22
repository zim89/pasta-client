import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/common'

import { AddToCart } from '@/features/root/add-to-cart'
import { NewsCard, type Dish } from '@/entities/dish'

export const NewsSlider = ({ data }: { data: Dish[] }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        slidesToScroll: 2,
      }}
    >
      <CarouselContent className='-ml-[30px]'>
        {data.map(dish => (
          <CarouselItem key={dish.id} className='basis-1/2 pl-[30px]'>
            <NewsCard
              dish={dish}
              addToCartSlot={<AddToCart variant='icon' />}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='absolute -top-[73px] right-0 flex h-10 items-center gap-10'>
        <CarouselPrevious className='static translate-x-0 translate-y-0' />
        <CarouselNext className='static translate-x-0 translate-y-0' />
      </div>
    </Carousel>
  )
}
