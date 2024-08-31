import { Dish } from '@/types/dish.types'
import Image from 'next/image'
import Link from 'next/link'
import hot_chilly from '@/assets/images/hits-pepper.png'
import { BrandCarousel } from '../brandCarousel'
import { ProductCard } from '../productCard'

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
            className='object-contain hidden xl:block -rotate-6 -mt-20 -ml-4'
          />
        </div>

        {/* Mobile and laptop layout */}
        <div className='flex flex-col gap-6 md:hidden xl:flex xl:gap-16 xl:justify-between xl:flex-row'>
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
                  className='basis-[calc(50%-23px)] first:ml-6 ml-[22px]'
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

        <div className='text-center mt-6 md:mt-8 xl:mt-10 md:text-right'>
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
