'use client'

import { PagePagination, ProductsGrid } from '@/shared/ui'

import type { Dish } from '@/entities/dish'
import { useDishPagination } from '@/shared/lib/hooks'
import { MenuGridMobile } from './menu-grid-mobile'
import { MenuNoResults } from './menu-no-results'
import { MenuSlider } from './menu-slider'

export const MenuList = ({ data }: { data: Dish[] }) => {
  const { paginatedData, total } = useDishPagination(data)

  if (paginatedData.length === 0) {
    return <MenuNoResults />
  }

  return (
    <>
      <div className='md:hidden'>
        <MenuGridMobile data={paginatedData} />
      </div>

      <div className='hidden md:block xl:hidden'>
        <MenuSlider data={paginatedData} />
      </div>

      <div className='hidden xl:block xl:space-y-16'>
        <ProductsGrid data={paginatedData} />
        <PagePagination total={total} />
      </div>
    </>
  )
}
