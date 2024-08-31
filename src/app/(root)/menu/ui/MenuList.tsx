'use client'

import { useEffect, useState } from 'react'
import { Dish } from '@/types/dish.types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { BrandPaginationBar2 } from '@/components/brandPagination/BrandPagination2'
import { LoadMoreButton } from '@/components/loadMoreButton/LoadMoreButton'
import { ProductGrid } from '@/components/productGrid/productGrid'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { itemsPerScreen, paginationItemsLimit } from '@/config/appConfig'
import { useLoadMore } from '@/hooks/useLoadMore'
import { useMedia } from '@/hooks/useMedia'
import { usePaginate } from '@/hooks/usePaginate'
import { calculateParams } from '@/helpers/brandPagination.helpers'
import { sortDishes } from '@/helpers/menuList.helpers'
import { Categories } from './Categories'

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
            className='ml-auto max-w-fit mb-6 bg-transparent border-0 p-0 text-lg justify-end gap-3'
          >
            <SelectValue placeholder={sortParam || 'Сортування'} />
          </SelectTrigger>
          <SelectContent className='text-[0.938rem] border-0 rounded-sm translate-x-0'>
            <SelectItem value='За популярністю'>За популярністю</SelectItem>
            <SelectItem value='За зростанням ціни'>
              За зростанням ціни
            </SelectItem>
            <SelectItem value='За спаданням ціни'>За спаданням ціни</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ProductGrid products={isMobileScreen ? expandedItems : paginated} />

      <BrandPaginationBar2
        pages={Math.floor(displayDishes.length / paginationItemsLimit)}
        className='hidden md:flex md:mt-8 md:mb-[4.5em] xl:mt-16 xl:mb-[7.5rem]'
      />

      {displayDishes.length >= itemsPerScreen * expansionCount ? (
        <LoadMoreButton
          onClick={() => {
            setExpansionCount(prev => prev + 1)
          }}
        />
      ) : (
        <div className='md:hidden mt-[5.25rem]' />
      )}
    </>
  )
}
