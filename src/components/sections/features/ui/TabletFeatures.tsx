import Image from 'next/image'
import { BrandCarousel } from '@/components/brandCarousel'
import { Feature } from '@/entities/advantage/model/types'

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
                  className='flex h-full flex-col items-center justify-center rounded-[30px] border border-primary-light/50 px-2 py-[20.5px]'
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={72}
                    width={80}
                    className='mb-6'
                  />
                  <h3 className='mb-2 text-base/[19.2px] font-medium'>
                    {item.title}
                  </h3>
                  <p className='px-4 text-center text-sm/[18.2px]'>
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
