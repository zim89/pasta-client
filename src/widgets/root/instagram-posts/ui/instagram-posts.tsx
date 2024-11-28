'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { usePosts } from '@/entities/post'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/shared/ui/common/carousel'
import { cn } from '@/shared/lib/utils'

export const InstagramPosts = () => {
  const { data, cursor } = usePosts()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className='section pt-10 md:pt-[72px]'>
      <div className='container'>
        <h2 className='xl:!mb-5'>
          Приєднуйтесь до <br className='xl:hidden' />
          нас в <span className='text-primary'>Instagram</span>
        </h2>

        {cursor}

        {data && (
          <Carousel
            className='xl:pt-12'
            setApi={setApi}
            opts={{
              align: 'start',
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className='-ml-5 items-center md:-ml-[27px] xl:-ml-[34.67px] xl:h-[360px]'>
              {data.map((post, idx) => (
                <CarouselItem
                  key={post.id}
                  className={cn(
                    'group h-[251px] basis-[251px] pl-5 transition-all duration-500 md:h-[220px] md:basis-1/3 md:pl-[27px] xl:h-[272px] xl:basis-[306.67px] xl:pl-[34.67px]',
                    idx === current && 'xl:h-[360px] xl:basis-[384.67px]',
                  )}
                >
                  <a
                    href={post.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative inline-block size-full overflow-hidden rounded-[23.27px] border border-background transition-colors duration-300 hover:border-primary md:rounded-4xl'
                  >
                    <Image
                      src={post.image}
                      alt='Instagram post image'
                      fill
                      sizes='100%'
                      className='object-cover'
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className='absolute -top-[73px] right-0 hidden h-10 items-center gap-10 md:flex xl:top-0'>
              <CarouselPrevious className='static translate-x-0 translate-y-0' />
              <CarouselNext className='static translate-x-0 translate-y-0' />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  )
}
