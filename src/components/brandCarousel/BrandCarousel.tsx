import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadCNCarousel
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

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
      <div className='flex gap-10 items-center absolute h-10 w-[120px] -top-[72.8px] right-0'>
        <CarouselPrevious className='top-0 left-0 translate-x-0 translate-y-0' />
        <CarouselNext className='top-0 right-0 translate-x-0 translate-y-0' />
      </div>
    </ShadCNCarousel>
  )
}
