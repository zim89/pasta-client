import { cn } from '@/shared/lib/utils/cn-merge'
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadCNCarousel
} from '@/shared/ui/common/carousel'

type Props = {
  children(item: typeof CarouselItem): React.ReactNode
  className?: string
}

export const BrandCarousel = ({ children, className }: Props) => {
  return (
    <ShadCNCarousel
      className={cn('hidden md:block xl:hidden', className)}
      opts={{
        align: 'start',
        slidesToScroll: 1
      }}
    >
      <CarouselContent className='-ml-10'>
        {children(CarouselItem)}
      </CarouselContent>
      <div className='absolute -top-[72.8px] right-0 flex h-10 w-[120px] items-center gap-10'>
        <CarouselPrevious className='left-0 top-0 translate-x-0 translate-y-0' />
        <CarouselNext className='right-0 top-0 translate-x-0 translate-y-0' />
      </div>
    </ShadCNCarousel>
  )
}
