'use client'

import { useQuery } from '@tanstack/react-query'
import { BrandCarousel } from '@/components/brandCarousel'
import { QUERY_KEYS } from '@/constants/query.const'
import { Card } from './ui/Card'
import { CardSkeleton } from './ui/CardSkeleton'
import { dishService } from '@/services/dishes.service'

export const NewDishes = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [QUERY_KEYS.HITS_NEWS],
    queryFn: () => dishService.getHitsAndNews()
  })

  return (
    <section
      className='section'
      data-testid='new-dishes-section'
    >
      <div className='container'>
        <h2 className='heading'>Новинки</h2>

        {/* Mobile and laptop layout */}
        <div className='grid grid-cols-1 gap-6 md:hidden xl:grid xl:grid-cols-3 xl:gap-16'>
          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}

          {!isLoading &&
            isError &&
            Array.from({ length: 3 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}

          {!isLoading &&
            data &&
            data.news.map(dish => (
              <Card
                key={dish.id}
                dish={dish}
              />
            ))}
        </div>

        {/* Only tablet screens */}
        {isLoading && (
          <div className='relative hidden md:grid md:grid-cols-2 md:gap-[30px] '>
            {Array.from({ length: 2 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}

            <div className='absolute -top-[72.8px] right-0 flex h-10 w-[120px] items-center gap-10'>
              <div className='size-10 animate-pulse rounded-full border border-grey/10 bg-grey/30' />
              <div className='size-10 animate-pulse rounded-full border border-grey/10 bg-grey/30' />
            </div>
          </div>
        )}

        {!isLoading && data && (
          <BrandCarousel>
            {CarouselItem => (
              <>
                {data.news.map(dish => (
                  <CarouselItem
                    // Width substracted to a half of left margin
                    data-testid='carousel-item'
                    className='ml-[14px] basis-[calc(50%-7px)] first:ml-0 first:pl-10'
                    key={dish.id}
                  >
                    <Card dish={dish} />
                  </CarouselItem>
                ))}
              </>
            )}
          </BrandCarousel>
        )}
      </div>
    </section>
  )
}
