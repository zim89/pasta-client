'use client'

import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

import { dishService } from '@/entities/dish'
import { QUERY_KEYS } from '@/shared/constants'
import pepper_img from '@/shared/assets/images/decoration/pepper.png'
import { HitMobile } from './hit-mobile'
import { HitsLoading } from './hits-loading'
import { HitsSlider } from './hits-slider'

export const HitProducts = () => {
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.HITS_NEWS],
    queryFn: () => dishService.getHitsAndNews(),
  })

  return (
    <section className='section pt-10 md:pt-[72px] xl:pt-[100px]'>
      <div className='container'>
        <div className='relative'>
          <h2 className='xl:!mb-0'>Хіти</h2>
          <Image
            src={pepper_img}
            alt='pepper image'
            height={59.95}
            width={146.34}
            className='absolute left-[680px] top-1/2 hidden -translate-y-1/2 -rotate-3 xl:block'
          />
        </div>

        {/* Mobile */}
        <HitMobile data={data ? data.hits : []} isLoading={isLoading} />

        {/* Tablet and Desktop */}
        <div className='hidden md:block'>
          {isLoading && <HitsLoading />}

          {!isLoading && data && <HitsSlider data={data.news} />}
        </div>
      </div>
    </section>
  )
}
