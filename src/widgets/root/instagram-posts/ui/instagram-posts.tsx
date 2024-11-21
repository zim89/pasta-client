'use client'

import Image from 'next/image'

import { usePosts } from '@/entities/post'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/common/carousel'
import { cn } from '@/shared/lib/utils'

export const InstagramPosts = () => {
  const { data, cursor } = usePosts()

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
            opts={{
              align: 'start',
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className='-ml-5 items-center md:-ml-[27px] xl:-ml-[34.67px]'>
              {data.map(post => (
                <CarouselItem
                  key={post.id}
                  className={cn(
                    'group basis-[251px] pl-5 md:basis-1/3 md:pl-[27px] xl:basis-[306.67px] xl:pl-[34.67px] xl:[&:nth-child(4n+2)]:basis-[394.67px]',
                  )}
                >
                  <a
                    href={post.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative inline-block size-[231px] overflow-hidden rounded-[23.27px] border border-background transition-colors duration-300 hover:border-primary md:size-[220px] md:rounded-4xl xl:size-[272px] xl:group-[&:nth-child(4n+2)]:size-[360px]'
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

            <div className='absolute -top-[73px] right-0 flex h-10 items-center gap-10 xl:top-0'>
              <CarouselPrevious className='static translate-x-0 translate-y-0' />
              <CarouselNext className='static translate-x-0 translate-y-0' />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  )
}
