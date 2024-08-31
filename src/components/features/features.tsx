import { Feature } from '@/types/feature.types'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { BrandCarousel } from '@/components/brandCarousel'
import features_veggies2 from '@/assets/images/features-veggies-2.png'
import features_veggies1 from '@/assets/images/features-veggies.png'
import { axiosBase } from '@/api/interceptors'
import { LaptopFeatures } from './ui/LaptopFeatures'
import { MobileFeatures } from './ui/MobileFeatures'
import { TabletFeatures } from './ui/TabletFeatures'
import { featureList } from '@/data/features.data'

export const Features = () => {
  const { data } = useQuery({
    queryKey: ['feature-main'],
    queryFn: async () => {
      const response = await axiosBase.get<Feature[]>(
        process.env.NEXT_PUBLIC_SERVER_URL + '/our-advantages'
      )

      return response.data
    }
  })

  if (!data) return null

  return (
    // On mobiles it's above Hits section, on larger screens it's below
    <section
      className='section order-[-1] md:order-1'
      data-testid='feature-section'
    >
      <div className='container'>
        <h2 className='heading'>Наші переваги</h2>

        {/* Mobile layout */}
        <MobileFeatures features={data} />

        {/* Tablet layout */}
        <TabletFeatures features={data} />

        {/* Laptop layout */}
        <LaptopFeatures features={data} />
      </div>
    </section>
  )
}
