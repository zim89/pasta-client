import { Feature } from '@/types/feature.types'
import Image from 'next/image'
import { BrandCarousel } from '@/components/brandCarousel'

type Props = {
  features: Feature[]
  classNames?: {
    carousel?: string
  }
}

export const TabletFeatures = ({ features, classNames }: Props) => {
  return (
    <BrandCarousel className={classNames?.carousel}>
      {CarouselItem => {
        return (
          <>
            {features.map(item => (
              <CarouselItem
                key={item.title}
                className='basis-1/3 pl-10'
              >
                <div
                  data-testid='feature-item-tablet'
                  className='border border-primary-light/50 rounded-[30px] flex flex-col items-center justify-center py-[20.5px] px-2 h-full'
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={72}
                    width={80}
                    className='mb-6'
                  />
                  <h3 className='text-base/[19.2px] font-medium mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-sm/[18.2px] text-center px-4'>
                    {item.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </>
        )
      }}
    </BrandCarousel>
  )
}
