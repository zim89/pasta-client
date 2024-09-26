'use client'

import { useQuery } from '@tanstack/react-query'

import { AddToCart } from '@/features/root/add-to-cart'
import { dishService, NewsCard, NewsSkeleton } from '@/entities/dish'
import { QUERY_KEYS } from '@/shared/constants'
import { NewsSlider } from './news-slider'

export const NewProducts = () => {
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.HITS_NEWS],
    queryFn: () => dishService.getHitsAndNews(),
  })

  return (
    <section className='section pt-10 md:pt-[60px] xl:pt-20'>
      <div className='container'>
        <h2>Новинки</h2>

        {/* Mobile and Desktop layout */}
        <div className='grid grid-cols-1 gap-6 md:hidden xl:grid xl:grid-cols-3 xl:gap-16'>
          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <NewsSkeleton key={index} />
            ))}

          {!isLoading &&
            data &&
            data.news
              .slice(0, 3)
              .map(dish => (
                <NewsCard
                  addToCartSlot={<AddToCart dish={dish} variant='icon' />}
                  key={dish.id}
                  dish={dish}
                />
              ))}
        </div>

        {/* Tablet screens */}
        <div className='hidden md:block xl:hidden'>
          {isLoading && (
            <div className='relative grid grid-cols-2 gap-[30px]'>
              {Array.from({ length: 2 }).map((_, index) => (
                <NewsSkeleton key={index} />
              ))}
            </div>
          )}

          {!isLoading && data && <NewsSlider data={data.news} />}
        </div>
      </div>
    </section>
  )
}
