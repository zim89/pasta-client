import Image from 'next/image'
import Link from 'next/link'
import hot_chilly from '@/assets/images/hits-pepper.png'
import { BrandCarousel } from '../brandCarousel'
import { ProductCard } from '../productCard'
import { Dish } from '@/entities/dish/model/types'

type Props = {
  dishes: Dish[]
}

export default function Hits({ dishes }: Props) {
  return (
    <section
      className='section'
      data-testid='hits-wrapper'
    >
      <div className='container'>
        <div className='flex items-center justify-normal xl:justify-center'>
          <h2 className='heading xl:ml-28'>Хіти</h2>
          <Image
            src={hot_chilly}
            alt='Chilly'
            width={146.34}
            height={59.95}
            className='-ml-4 -mt-20 hidden -rotate-6 object-contain xl:block'
          />
        </div>

        {/* Mobile and laptop layout */}
        <div className='flex flex-col gap-6 md:hidden xl:flex xl:flex-row xl:justify-between xl:gap-16'>
          {dishes.slice(0, 3).map((dish, index) => (
            <ProductCard
              className='w-full'
              key={index}
              dish={dish}
            />
          ))}
        </div>

        {/* Only tablet screens */}
        <BrandCarousel>
          {CarouselItem => (
            <>
              {dishes.map((dish, index) => (
                <CarouselItem
                  // Width substracted to a half of left margin (first slide's margin and the rest)
                  className='ml-[22px] basis-[calc(50%-23px)] first:ml-6'
                  key={index}
                  data-testid='carousel-item'
                >
                  <ProductCard
                    dish={dish}
                    className='h-full'
                  />
                </CarouselItem>
              ))}
            </>
          )}
        </BrandCarousel>

        <div className='mt-6 text-center md:mt-8 md:text-right xl:mt-10'>
          <Link
            className='border-b border-b-primary-light'
            href='/menu'
          >
            Подивитися все меню
          </Link>
        </div>
      </div>
    </section>
  )
}
