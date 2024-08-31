'use client'

import type { Dish } from '@/types/dish.types'
import { usePagination } from '@/hooks/usePagination'
import { MenuGrid } from './menu-grid'
import { MenuGridMobile } from './menu-grid-mobile'
import { MenuSlider } from './menu-slider'
import { Paginate } from './paginate'

export const MenuList = ({ data }: { data: Dish[] }) => {
  const { paginatedData, total } = usePagination(data)

  return (
    <>
      <div className='hidden md:block xl:hidden'>
        <MenuSlider data={paginatedData} />
      </div>

      <div className='hidden xl:block xl:space-y-16'>
        <MenuGrid data={paginatedData} />
        <Paginate total={total} />
      </div>

      <div className='space-y-6 md:hidden'>
        <MenuGridMobile data={data} />
      </div>
    </>
  )
}
