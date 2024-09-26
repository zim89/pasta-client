import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/common'

import { FeatureCard, type Feature } from '@/entities/feature'

export const FeaturesSlider = ({ data }: { data: Feature[] }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        slidesToScroll: 1,
      }}
    >
      <CarouselContent className='-ml-[42px]'>
        {data.map(item => (
          <CarouselItem key={item.title} className='basis-1/3 pl-[42px]'>
            <FeatureCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='absolute -top-[73px] right-0 flex h-10 items-center gap-10'>
        <CarouselPrevious className='static translate-x-0 translate-y-0' />
        <CarouselNext className='static translate-x-0 translate-y-0' />
      </div>
    </Carousel>
  )
}
