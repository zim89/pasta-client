'use client'

import { useQuery } from '@tanstack/react-query'
import { SectionSlider } from '@/components/shared/section-slider'
import { SectionTitle } from '@/components/shared/section-title'
import { QUERY_KEYS } from '@/constants/query.const'
import { Card } from './ui/card'
import { CardSkeleton } from './ui/card-skeleton'
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
        <SectionTitle title='Новинки' />

        {/* Mobile and laptop layout */}
        <div className='grid grid-cols-1 gap-6 md:hidden xl:grid xl:grid-cols-3 xl:gap-16'>
          {isLoading &&
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
        <div className='hidden md:block xl:hidden'>
          {isLoading && (
            <div className='relative grid grid-cols-2 gap-[30px] '>
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
            <SectionSlider
              data={data.news}
              type='news'
            />
          )}
        </div>
      </div>
    </section>
  )
}
