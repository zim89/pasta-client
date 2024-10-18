import { useQuery } from '@tanstack/react-query'

import { AddToCart } from '@/features/root/add-to-cart'
import { dishService, NewsCard } from '@/entities/dish'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/common/carousel'
import { QUERY_KEYS } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'

export const RecommendDishes = () => {
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.HITS_NEWS],
    queryFn: () => dishService.getHitsAndNews(),
  })
  return (
    <section className='space-y-6 md:space-y-7 xl:space-y-[60px] xl:rounded-xl xl:border xl:border-primary-light xl:p-10'>
      <h2 className={cn('title-2')}>Рекомендуємо</h2>
      {!isLoading && data && (
        <Carousel
          opts={{
            align: 'start',
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className='pb-16 md:-ml-[30px] md:pb-0 xl:-ml-6 xl:mb-20'>
            {data.hits.map(dish => (
              <CarouselItem
                key={dish.id}
                className='md:basis-1/2 md:pl-[30px] xl:basis-1/3 xl:pl-6'
              >
                <NewsCard
                  dish={dish}
                  addToCartSlot={<AddToCart dish={dish} variant='icon' />}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='absolute bottom-0 left-0 flex h-10 w-full items-center justify-center gap-10 md:-top-[68px] md:justify-end xl:!bottom-0 xl:top-auto'>
            <CarouselPrevious className='static translate-x-0 translate-y-0' />
            <CarouselNext className='static translate-x-0 translate-y-0' />
          </div>
        </Carousel>
      )}
    </section>
  )
}
