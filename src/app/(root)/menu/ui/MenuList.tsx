'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { BrandPagination } from '@/components/brandPagination'
import { ProductCard } from '@/components/productCard'
import { ProductGrid } from '@/components/productGrid'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { paginationItemsLimit } from '@/config/appConfig'
import { usePaginate } from '@/hooks/usePaginate'
import { Categories } from './Categories'
import { menu } from '@/data/menu.data'

export const MenuList = () => {
  const [_, { paginated, setPaginated }] = usePaginate(menu)

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
          <SelectContent className='text-[15px] border-0 rounded-sm translate-x-0'>
            <SelectItem value='За популярністю'>За популярністю</SelectItem>
            <SelectItem value='За зростанням ціни'>
              За зростанням ціни
            </SelectItem>
            <SelectItem value='За спаданням ціни'>За спаданням ціни</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ProductGrid products={paginated} />

      <BrandPagination
        pages={Math.floor(menu.length / paginationItemsLimit)}
        className='hidden md:flex md:mt-8 md:mb-[72px] xl:mt-16 xl:mb-[120px]'
      />
      <Button className='md:hidden p-0 font-normal w-full mt-6 mb-[60px]'>
        <span className='inline-block border-b border-b-primary-light'>
          Подивитися все меню
        </span>
      </Button>
    </>
  )
}
