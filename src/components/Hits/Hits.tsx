import Link from 'next/link'
import { BrandCarousel } from '../brandCarousel'
import { ProductCard } from '../productCard'
import { menu } from '@/data/menu.data'

export default function Hits() {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='heading'>Хіти</h2>

        {/* Mobile and laptop layout */}
        <div className='flex flex-col gap-6 md:hidden xl:flex xl:gap-16 xl:justify-between xl:flex-row'>
          {menu.slice(0, 3).map((dish, index) => (
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
              {menu.slice(3, 6).map((dish, index) => (
                <CarouselItem
                  // Width substracted to a half of left margin (first slide's margin and the rest)
                  className='basis-[calc(50%-23px)] first:ml-6 ml-[22px]'
                  key={index}
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

        <div className='text-center mt-6 md:mt-8 md:text-right'>
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
