'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { BrandPagination } from '@/components/brandPagination'
import { ProductCard } from '@/components/productCard'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Categories } from './Categories'
import { Dish, menu } from '@/data/menu.data'

const itemsLimit = 9

export const MenuList = () => {
  const [paginated, setPaginated] = useState<Dish[]>([])
  const params = useSearchParams()
  const page = parseInt(params.get('page') || '1')

  const [filter, setFilter] = useState('За популярністю')

  useEffect(() => {
    if (page === 1) {
      setPaginated(menu.slice(0, itemsLimit))
    } else {
      const startingIndex = itemsLimit * page - 1
      setPaginated(menu.slice(startingIndex, startingIndex + itemsLimit))
    }
  }, [menu, page])

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
      <div className='flex flex-wrap flex-col md:flex-row gap-6 md:gap-9'>
        {paginated.map((item, index) => (
          <ProductCard
            key={index}
            className='md:basis-1/2 xl:basis-[31.5%] w-full max-w-[338px] xl:max-w-full'
            dish={item}
          />
        ))}
      </div>
      <BrandPagination
        pages={Math.floor(menu.length / itemsLimit)}
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
