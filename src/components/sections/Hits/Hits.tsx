'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { ProductCard, ProductCardSkeleton } from '@/components/productCard'
import { SectionTitle } from '@/components/shared/SectionTitle'
import pepper_img from '@/assets/images/hits/pepper.png'
import { QUERY_KEYS } from '@/constants/query.const'
import { SectionSlider } from '../../shared/SectionSlider'
import { MenuLink } from './ui/MenuLink'
import { SkeletonList } from './ui/SkeletonList'
import { dishService } from '@/services/dishes.service'

export const Hits = () => {
  const { isLoading, isError, data, error } = useQuery({
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
