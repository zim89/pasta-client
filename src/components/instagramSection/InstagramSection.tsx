import Image from 'next/image'
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadCNCarousel
} from '@/shared/ui/common/carousel'

export default function InstagramSection() {
  return (
    <section className='section pb-4 md:order-[-1]'>
      <div className='container'>
        <h2 className='heading !text-start md:max-w-[290px] xl:!mb-32 xl:max-w-full xl:!text-center'>
          Приєднуйтесь до нас в{' '}
          <a
            href='/'
            className='text-primary'
          >
            Instagram
          </a>
        </h2>
        <ShadCNCarousel
          opts={{
            align: 'start',
            slidesToScroll: 1
          }}
        >
          <div className='absolute -top-[72.8px] right-0 hidden h-10 w-[120px] items-center gap-10 md:flex'>
            <CarouselPrevious className='left-0 top-0 translate-x-0 translate-y-0' />
            <CarouselNext className='right-0 top-0 translate-x-0 translate-y-0' />
          </div>
          <CarouselContent className='gap-5 md:gap-7 xl:gap-0'>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem
                className='relative h-[211px] basis-[211px] transition-all first:ml-5 md:h-[220px] md:basis-[220px] xl:h-[360px] xl:basis-[310px]'
                key={index}
              >
                <Image
                  src='https://placehold.co/512x512.png'
                  fill
                  className='self-center justify-self-center rounded-3xl transition-transform xl:max-h-[272px] xl:max-w-[272px] xl:hover:scale-125'
                  alt='Placeholder image'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </ShadCNCarousel>
      </div>
    </section>
  )
}
