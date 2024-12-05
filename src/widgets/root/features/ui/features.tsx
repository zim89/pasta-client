'use client'

import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

import { FeatureCard } from '@/entities/feature'
import { featureService } from '@/entities/feature/api'
import { QUERY_KEYS } from '@/shared/constants'
import decor_image from '@/shared/assets/images/decoration/features-veggies.png'
import decor_bottom_image from '@/shared/assets/images/decoration/features-veggies2.png'
import { FeatureSkeleton } from './feature-skeleton'
import { FeaturesSlider } from './feature-slider'

export const Features = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.FEATURES],
    queryFn: async () => {
      return await featureService.getFeatures()
    },
  })

  if (isLoading) return <FeatureSkeleton />
  if (!data) return

  return (
    <section className='section pt-10 md:pt-[72px] xl:pt-[77px]'>
      <div className='container'>
        <h2>Наші переваги</h2>

        {/* Mobile and Desktop screen */}
        <div className='relative'>
          <ul className='grid grid-cols-2 gap-[14px] md:hidden xl:grid xl:grid-cols-4 xl:gap-[53.33px]'>
            {data.map(item => (
              <li key={item.title}>
                <FeatureCard item={item} />
              </li>
            ))}
          </ul>
          <Image
            src={decor_image}
            width={217.35}
            height={147}
            alt='Features decoration image'
            className='absolute -left-20 -top-10 -z-10 hidden xl:block'
          />
          <Image
            src={decor_bottom_image}
            width={147}
            height={133.39}
            alt='Features decoration image'
            className='absolute -bottom-14 -right-9 -z-10 hidden xl:block'
          />
        </div>

        {/* Tablet screen */}
        <div className='hidden md:block xl:hidden'>
          <FeaturesSlider data={data} />
        </div>
      </div>
    </section>
  )
}
