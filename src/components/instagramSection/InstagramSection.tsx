import Image from 'next/image'
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as ShadCNCarousel
} from '@/components/ui/carousel'

export default function InstagramSection() {
  return (
    <section className='section md:order-[-1] pb-4'>
      <div className='container'>
        <h2 className='heading md:max-w-[290px] xl:max-w-full !text-start xl:!text-center xl:!mb-32'>
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
          <div className='hidden md:flex gap-10 items-center absolute h-10 w-[120px] -top-[72.8px] right-0'>
            <CarouselPrevious className='top-0 left-0 translate-x-0 translate-y-0' />
            <CarouselNext className='top-0 right-0 translate-x-0 translate-y-0' />
          </div>
          <CarouselContent className='gap-5 md:gap-7 xl:gap-0'>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem
                className='relative transition-all basis-[211px] md:basis-[220px] xl:basis-[310px] h-[211px] md:h-[220px] xl:h-[360px] first:ml-5'
                key={index}
              >
                <Image
                  src='https://placehold.co/512x512.png'
                  fill
                  className='rounded-3xl xl:hover:scale-125 transition-transform justify-self-center self-center xl:max-w-[272px] xl:max-h-[272px]'
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
