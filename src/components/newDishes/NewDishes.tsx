import { BrandCarousel } from '../brandCarousel'
import { Card } from './ui/Card'
import { newDishes } from '@/data/newDishes.data'

export const NewDishes = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='heading'>Новинки</h2>
        {/* Mobile and laptop layout */}
        <div className='flex flex-col gap-6  md:hidden xl:flex xl:gap-24 xl:justify-between xl:flex-row'>
          {newDishes.map(dish => (
            <Card
              key={dish.productId}
              dish={dish}
            />
          ))}
        </div>

        {/* Only tablet screens */}
        <BrandCarousel>
          {CarouselItem => (
            <>
              {newDishes.map(dish => (
                <CarouselItem
                  // Width substracted to a half of left margin
                  className='basis-[calc(50%-7px)] first:pl-10 ml-[14px] first:ml-0'
                  key={dish.productId}
                >
                  <Card dish={dish} />
                </CarouselItem>
              ))}
            </>
          )}
        </BrandCarousel>
      </div>
    </section>
  )
}
