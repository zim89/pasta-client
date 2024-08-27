'use client'

import { useEffect, useState } from 'react'
import { Dish } from '@/types/dish.types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BrandPagination } from '@/components/brandPagination'
import { ProductGrid } from '@/components/productGrid'
import { ProductGrid2 } from '@/components/productGrid/productGrid2'
import { paginationItemsLimit } from '@/config/appConfig'
import { useMedia } from '@/hooks/useMedia'
import { usePaginate } from '@/hooks/usePaginate'

export type Props = {
  debouncedSearch: string
}

export const SearchPageDisplay = ({ debouncedSearch }: Props) => {
  const { isMobileScreen } = useMedia()

  const { data: dishes } = useQuery({
    queryKey: ['Dishes'],
    queryFn: async () => {
      try {
        const dishes = await axios.get<Dish[]>(
          process.env.NEXT_PUBLIC_SERVER_URL + '/dish'
        )

        return dishes.data
      } catch (err) {
        console.error('Error fetching dishes:', err)
      }
    }
  })

  const [matched, setMatched] = useState(dishes || [])
  const [_, { paginated, setPaginated }] = usePaginate(matched)

  // Filtering menu items
  useEffect(() => {
    if (dishes) {
      setMatched(
        dishes.filter(item =>
          item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
      )
    }
  }, [debouncedSearch, dishes])

  // When menu is filtered, then it matches pagination results
  useEffect(() => {
    setPaginated(matched.slice(0, paginationItemsLimit))
  }, [matched])

  return (
    <>
      <ProductGrid2 products={isMobileScreen ? matched : paginated} />
      <BrandPagination
        pages={Math.floor(matched.length / paginationItemsLimit)}
        className='hidden md:flex md:mt-8 md:mb-[4.5rem] xl:mt-16 xl:mb-[7.5rem]'
      />
      <div className='md:hidden mt-[5.25rem]' />
    </>
  )
}
