'use client'

import { useEffect, useState } from 'react'
import { BrandPagination } from '@/components/brandPagination'
import { ProductGrid } from '@/components/productGrid'
import { paginationItemsLimit } from '@/config/appConfig'
import { useMedia } from '@/hooks/useMedia'
import { usePaginate } from '@/hooks/usePaginate'
import { menu } from '@/data/menu.data'

export type Props = {
  debouncedSearch: string
}

export const SearchPageDisplay = ({ debouncedSearch }: Props) => {
  const { isMobileScreen } = useMedia()
  const [matched, setMatched] = useState(menu)
  const [_, { paginated, setPaginated }] = usePaginate(matched)

  // Filtering menu items
  useEffect(() => {
    setMatched(
      menu.filter(item =>
        item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    )
  }, [debouncedSearch])

  // When menu is filtered, then it matches pagination results
  useEffect(() => {
    setPaginated(matched.slice(0, paginationItemsLimit))
  }, [matched])

  return (
    <>
      <ProductGrid products={isMobileScreen ? matched : paginated} />
      <BrandPagination
        pages={Math.floor(matched.length / paginationItemsLimit)}
        className='hidden md:flex md:mt-8 md:mb-[4.5rem] xl:mt-16 xl:mb-[7.5rem]'
      />
      <div className='md:hidden mt-[5.25rem]' />
    </>
  )
}
