'use client'

import { useState } from 'react'
import { Dish } from '@/types/dish.types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BrandPagination } from '@/components/brandPagination'
import { LoadMoreButton } from '@/components/loadMoreButton/LoadMoreButton'
import { ProductGrid } from '@/components/productGrid'
import { ProductGrid2 } from '@/components/productGrid/productGrid'
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
import { Categories } from './Categories'
import { menu } from '@/data/menu.data'

export const MenuList = () => {
  const { isMobileScreen } = useMedia()

  const { data: dishes } = useQuery({
    queryKey: ['Dishes'],

    queryFn: async () => {
      const dishes = await axios.get<Dish[]>(
        process.env.NEXT_PUBLIC_SERVER_URL + '/dish'
      )

      return dishes.data
    }
  })

  const { expandedItems, expansionCount, setExpansionCount } = useLoadMore(
    dishes || []
  )
  const [_, { paginated }] = usePaginate(dishes || [])
  const [filter, setFilter] = useState('За популярністю')

  return (
    <>
      <Categories />
      <div className='hidden md:block'>
        <Select
          defaultValue={'За популярністю'}
          onValueChange={val => setFilter(val)}
        >
          <SelectTrigger
            iconClassName='opacity-100 text-black mt-1'
            className='ml-auto max-w-fit mb-6 bg-transparent border-0 p-0 text-lg justify-end gap-3'
          >
            <SelectValue placeholder={filter} />
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

      <ProductGrid2 products={isMobileScreen ? expandedItems : paginated} />

      <BrandPagination
        pages={Math.floor(menu.length / paginationItemsLimit)}
        className='hidden md:flex md:mt-8 md:mb-[4.5em] xl:mt-16 xl:mb-[7.5rem]'
      />

      {menu.length >= itemsPerScreen * expansionCount ? (
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
