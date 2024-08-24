'use client'

import { useEffect, useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import { Search, X } from 'lucide-react'
import { BrandPagination } from '@/components/brandPagination'
import { ProductGrid } from '@/components/productGrid'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { paginationItemsLimit } from '@/config/appConfig'
import { usePaginate } from '@/hooks/usePaginate'
import { close } from '@/helpers/search.helpers'
import { menu } from '@/data/menu.data'

export default function Page() {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)

  const [matched, setMatched] = useState(menu)
  const [_, { paginated }] = usePaginate(matched)

  useEffect(() => {
    setMatched(
      menu.filter(item =>
        item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    )
  }, [debouncedSearch])

  return (
    <div className='container'>
      <div className='flex justify-center'>
        <div className='flex items-center bg-white border border-opacity-50 border-primary-light px-5 rounded-2.5xl py-[0.125rem] my-8 w-full md:max-w-[20em] xl:max-w-[39.125em]'>
          <Search size={24} />
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='text'
            placeholder='Пошук'
            className='border-0 focus-visible:-ring-1 placeholder:font-inter text-base'
            style={{
              backgroundColor: 'transparent'
            }}
          />
          {search && (
            <X
              size={24}
              className='text-grey'
              onClick={close.bind(null, setSearch)}
            />
          )}
        </div>
      </div>

      <ProductGrid products={paginated} />
      <BrandPagination
        pages={Math.floor(matched.length / paginationItemsLimit)}
        className='hidden md:flex md:mt-8 md:mb-[72px] xl:mt-16 xl:mb-[120px]'
      />
      <Button className='md:hidden p-0 font-normal w-full mt-6 mb-[60px]'>
        <span className='inline-block border-b border-b-primary-light'>
          Подивитися все меню
        </span>
      </Button>
    </div>
  )
}
