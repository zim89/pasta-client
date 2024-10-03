'use client'

import { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Search, X } from 'lucide-react'

import { AddIngredient } from '@/features/root/add-ingredient'
import { AddToCart } from '@/features/root/add-to-cart'
import { dishService, ProductCard, type Dish } from '@/entities/dish'
import { QUERY_KEYS } from '@/shared/constants'
import { SearchNotFound } from './ui'

export const SearchPage = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.DISHES],
    queryFn: () => dishService.getDishes(),
  })
  const [searchValue, setSearchValue] = useState('')
  const [filteredDishes, setFilteredDishes] = useState<Dish[] | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (data) {
      if (searchValue) {
        setFilteredDishes(
          data.filter(dish =>
            dish.title.toLowerCase().includes(searchValue.toLowerCase()),
          ),
        )
      } else {
        setFilteredDishes(data)
      }
    }
  }, [data, searchValue])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className='page-wrap'>
      <div className='container'>
        {/* Search input */}
        <div className='mb-8 flex justify-center xl:mb-[42px]'>
          <div className='relative flex-1 md:w-[400px] md:flex-none xl:w-[626px]'>
            <input
              type='text'
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              placeholder='Пошук'
              ref={inputRef}
              className='flex h-[46px] w-full items-center rounded-2.5xl border border-primary-light/50 px-[60px] text-base/[20.8px] outline-none placeholder:text-gray-500 focus:border-primary-light'
            />
            <Search className='absolute left-5 top-1/2 -translate-y-1/2 transform' />
            <button
              disabled={!!!searchValue}
              onClick={() => {
                setSearchValue('')
                inputRef.current?.focus()
              }}
              className='absolute right-5 top-1/2 -translate-y-1/2 transform text-gray-700 transition-colors duration-300 hover:text-black disabled:cursor-not-allowed'
            >
              <X />
            </button>
          </div>
        </div>

        {/* Data grid */}
        {filteredDishes && filteredDishes.length > 0 && (
          <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-[38px] xl:grid-cols-3 xl:gap-16'>
            {filteredDishes.map(dish => (
              <li key={dish.id}>
                <ProductCard
                  dish={dish}
                  addIngredientSlot={<AddIngredient dish={dish} />}
                  addToCartSlot={<AddToCart dish={dish} variant='btn' />}
                />
              </li>
            ))}
          </ul>
        )}

        {filteredDishes && filteredDishes.length === 0 && <SearchNotFound />}
      </div>
    </div>
  )
}
