'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { ProductCard, ProductCardSkeleton } from '@/components/productCard'
import { SectionTitle } from '@/components/shared/section-title'
import { SectionSlider } from '../../shared/section-slider'
import { MenuLink } from './ui/menu-link'
import { SkeletonList } from './ui/skeleton-list'
import { dishService } from '@/entities/dish/api/dishes.service'
import pepper_img from '@/shared/assets/images/hits/pepper.png'
import { QUERY_KEYS } from '@/shared/constants/query.const'

export const HitDishes = () => {
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.HITS_NEWS],
    queryFn: () => dishService.getHitsAndNews()
  })

  return (
    <section
      className='section'
      data-testid='hits-wrapper'
    >
      <div className='container'>
        <div className='relative'>
          <SectionTitle
            title='Хіти'
            styles='md:mb-0 xl:mb-0'
          />
          <Image
            src={pepper_img}
            alt='pepper image'
            height={59.95}
            width={146.34}
            className='absolute left-[680px] top-1/2 hidden -translate-y-1/2 -rotate-3 xl:block'
          />
        </div>

        {/* Mobile */}
        <div className='grid grid-cols-1 gap-6 md:hidden'>
          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}

          {!isLoading &&
            data &&
            data.hits.slice(0, 3).map(dish => (
              <ProductCard
                key={dish.id}
                dish={dish}
              />
            ))}
        </div>

        {/* Tablet and Desktop */}
        <div className='hidden md:block'>
          {isLoading && <SkeletonList />}

          {!isLoading && data && (
            <SectionSlider
              data={data.hits}
              type='hits'
            />
          )}
        </div>

        <MenuLink />
      </div>
    </section>
  )
}
