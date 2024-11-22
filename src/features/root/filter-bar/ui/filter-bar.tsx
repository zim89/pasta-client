import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { categoryService } from '@/entities/category'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/ui/common/carousel'
import { QUERY_KEYS } from '@/shared/constants'
import { cn } from '@/shared/lib/utils'

export const FilterBar = () => {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()

  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: () => categoryService.getCategories(),
  })

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
    <div className='mb-8 h-[47px] max-w-screen-sm md:mb-10 md:max-w-[300%]'>
      <Carousel
        opts={{
          align: 'start',
          slidesToScroll: 1,
        }}
      >
        {!isLoading && data && (
          <>
            <CarouselContent className='-ml-5'>
              <CarouselItem className='basis-auto pl-5'>
                <button
                  onClick={() => onClick('Все меню')}
                  className={cn(
                    'h-[47px] rounded-[30px] border px-5 text-lg/[23.4px] xl:px-10',
                    !searchParams.get('filter')
                      ? 'border-primary-light text-primary-light'
                      : 'border-black/20 text-black',
                  )}
                >
                  Все меню
                </button>
              </CarouselItem>
              {data.map(category => {
                const isActive = searchParams.get('filter') === category.name

                return (
                  <CarouselItem key={category.name} className='basis-auto pl-5'>
                    <button
                      onClick={() => onClick(category.name)}
                      className={cn(
                        'h-[47px] rounded-[30px] border px-5 text-lg/[23.4px] capitalize xl:px-10',
                        isActive
                          ? 'border-primary-light text-primary-light'
                          : 'border-black/20 text-black',
                      )}
                    >
                      {category.name}
                    </button>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </>
        )}
      </Carousel>
    </div>
  )
}
