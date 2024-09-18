import { BrandCarousel } from '../brandCarousel'
import { Card } from './ui/Card'
import { Dish } from '@/entities/dish/model/types'

type Props = {
  newDishes: Dish[]
}

export const NewDishes = ({ newDishes }: Props) => {
  return (
    <section
      className='section'
      data-testid='new-dishes-section'
    >
      <div className='container'>
        <h2 className='heading'>Новинки</h2>
        {/* Mobile and laptop layout */}
        <div className='flex flex-col gap-6 md:hidden xl:flex xl:flex-row xl:justify-between xl:gap-24'>
          {newDishes.map(dish => (
            <Card
              key={dish.id}
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
                  data-testid='carousel-item'
                  className='ml-[14px] basis-[calc(50%-7px)] first:ml-0 first:pl-10'
                  key={dish.id}
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
