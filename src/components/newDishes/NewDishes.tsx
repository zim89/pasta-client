'use client'

import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/constants/query.const'
import { BrandCarousel } from '../brandCarousel'
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

            <div className='flex gap-10 items-center absolute h-10 w-[120px] -top-[72.8px] right-0'>
              <div className='size-10 rounded-full border border-grey/10 bg-grey/30 animate-pulse' />
              <div className='size-10 rounded-full border border-grey/10 bg-grey/30 animate-pulse' />
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
                    className='basis-[calc(50%-7px)] first:pl-10 ml-[14px] first:ml-0'
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
