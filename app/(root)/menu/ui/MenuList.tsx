'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { BrandPagination } from '@/components/brandPagination'
import { LoadMoreButton } from '@/components/loadMoreButton/LoadMoreButton'
import { ProductGrid } from '@/components/productGrid/productGrid'
import { Categories } from './Categories'
import { Dish } from '@/entities/dish/model/types'
import {
  PAGINATION_LIMIT,
  PAGINATION_LIMIT_MOBILE
} from '@/shared/constants/app.const'
import { useLoadMore } from '@/shared/lib/hooks/useLoadMore'
import { useMedia } from '@/shared/lib/hooks/useMedia'
import { usePaginate } from '@/shared/lib/hooks/usePaginate'
import { calculateParams } from '@/shared/lib/utils/brand-pagination-funcs'
import { sortDishes } from '@/shared/lib/utils/menu-funcs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/ui/common/select'

export const MenuList = () => {
  const { isMobileScreen } = useMedia()
  const router = useRouter()
  const params = useSearchParams()

  const filterParam = params.get('filter')
  const sortParam = params.get('sort')

  const { data: dishes } = useQuery({
    queryKey: ['Dishes'],

    queryFn: async () => {
      const dishes = await axios.get<Dish[]>(
        process.env.NEXT_PUBLIC_SERVER_URL + '/dish'
      )

      return dishes.data
    }
  })

  const [displayDishes, setDisplayDishes] = useState(dishes || [])

  const { expandedItems, expansionCount, setExpansionCount } =
    useLoadMore(displayDishes)
  const [_, { paginated }] = usePaginate(displayDishes)

  useEffect(() => {
    if (filterParam && dishes) {
      const filtered = dishes.filter(dish => dish.type === filterParam)

      setDisplayDishes(() => filtered)
    } else if (!filterParam && dishes) {
      setDisplayDishes(() => dishes)
    }
  }, [filterParam, dishes])

  useEffect(() => {
    if (sortParam && filterParam) {
      let result = sortDishes(paginated, sortParam)

      setDisplayDishes(result)
    } else if (sortParam && !filterParam && dishes) {
      let result = sortDishes(dishes, sortParam)

      // It's iterated to cause a rerender, as the array's size stays the same; so I forced to update the reference
      setDisplayDishes(() => [...result])
    }
  }, [sortParam, filterParam])

  if (!dishes) return

  return (
    <>
      <Categories dishes={dishes} />
      <div className='hidden md:block'>
        <Select
          value={sortParam || ''}
          onValueChange={val => {
            router.replace(calculateParams(params, 'sort', val))
          }}
        >
          <SelectTrigger
            iconClassName='opacity-100 text-black mt-1'
            className='bg-transparent mb-6 ml-auto max-w-fit justify-end gap-3 border-0 p-0 text-lg'
          >
            <SelectValue placeholder={sortParam || 'Сортування'} />
          </SelectTrigger>
          <SelectContent className='translate-x-0 rounded-sm border-0 text-[0.938rem]'>
            <SelectItem value='За популярністю'>За популярністю</SelectItem>
            <SelectItem value='За зростанням ціни'>
              За зростанням ціни
            </SelectItem>
            <SelectItem value='За спаданням ціни'>За спаданням ціни</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ProductGrid products={isMobileScreen ? expandedItems : paginated} />

      <BrandPagination
        pages={Math.floor(displayDishes.length / PAGINATION_LIMIT)}
        className='hidden md:mb-[4.5em] md:mt-8 md:flex xl:mb-[7.5rem] xl:mt-16'
      />

      {displayDishes.length >= PAGINATION_LIMIT_MOBILE * expansionCount ? (
        <LoadMoreButton
          onClick={() => {
            setExpansionCount(prev => prev + 1)
          }}
        />
      ) : (
        <div className='mt-[5.25rem] md:hidden' />
      )}
    </>
  )
}
