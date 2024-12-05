'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { PageBreadcrumbs, PageHeading } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
import { useMediaQuery } from 'usehooks-ts'

import { FilterBar } from '@/features/root/filter-bar'
import { SortDropdown } from '@/features/root/sort-dropdown'
import { SortSkeleton } from '@/features/root/sort-dropdown/ui/sort-skeleton'
import { dishService } from '@/entities/dish'
import { QUERY_KEYS } from '@/shared/constants'
import decor_image from '@/shared/assets/images/decoration/parsley-menu.png'
import { MenuList } from './ui'
import { MenuSkeleton } from './ui/menu-skeleton'

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile])

  return (
    <div className='page-wrap'>
      <div className='container'>
        <PageBreadcrumbs crumbs={crumbs} />
        <PageHeading title='Наше меню' image={decor_image} />
        <FilterBar />
        {isLoading ? <SortSkeleton /> : <SortDropdown />}
        {isLoading ? <MenuSkeleton /> : data && <MenuList data={data} />}
      </div>
    </div>
  )
}
