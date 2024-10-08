'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { PageBreadcrumbs, PageHeading } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
import { useMediaQuery } from 'usehooks-ts'

import { FilterBar } from '@/features/root/filter-bar'
import { SortDropdown } from '@/features/root/sort-dropdown'
import { dishService } from '@/entities/dish'
import { QUERY_KEYS } from '@/shared/constants'
import { MenuList } from './ui'

const crumbs = [{ label: 'Меню' }]

export const MenuPage = () => {
  const router = useRouter()
  const path = usePathname()
  const isMobile = useMediaQuery('(max-width: 833px)')

  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.DISHES],
    queryFn: () => dishService.getDishes(),
  })

  useEffect(() => {
    if (isMobile) router.replace(path, { scroll: false })
  }, [isMobile])

  return (
    <div className='page-wrap'>
      <div className='container'>
        <PageBreadcrumbs crumbs={crumbs} />
        <PageHeading title='Наше меню' />
        <FilterBar />
        <SortDropdown />
        {!isLoading && data && <MenuList data={data} />}
      </div>
    </div>
  )
}
