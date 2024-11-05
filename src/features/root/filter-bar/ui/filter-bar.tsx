import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/ui/common/carousel'
import { cn } from '@/shared/lib/utils'
import { DISH_TYPES } from '../model'

export const FilterBar = () => {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()

  const onClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('page')
    params.delete('sort')
    if (category === 'Все меню') {
      params.delete('filter')
    } else {
      params.set('filter', category)
    }
    router.replace(`${path}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className='mb-8 h-[47px] max-w-screen-sm md:mb-10 md:max-w-max'>
      <Carousel
        opts={{
          align: 'start',
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className='-ml-5'>
          {DISH_TYPES.map(category => {
            const isActive =
              searchParams.get('filter') === category.label ||
              (category.value === 'Все меню' && !searchParams.has('filter'))

            return (
              <CarouselItem key={category.value} className='basis-auto pl-5'>
                <button
                  onClick={() => onClick(category.value)}
                  className={cn(
                    'h-[47px] rounded-[30px] border px-5 text-lg/[23.4px] xl:px-10',
                    isActive
                      ? 'border-primary-light text-primary-light'
                      : 'border-black/20 text-black',
                  )}
                >
                  {category.label}
                </button>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
