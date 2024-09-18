'use client'

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { useMediaQuery } from 'usehooks-ts'
import { FilterBar } from '@/components/shared/filter-bar'
import { MenuList } from '@/components/shared/menu-list'
import { PageBreadcrumb } from '@/components/shared/page-breadcrumb'
import { PageTitle } from '@/components/shared/page-title'
import { SortBar } from '@/components/shared/sort-bar'
import { dishService } from '@/entities/dish/api/dishes.service'
import { APP_PAGES } from '@/shared/constants' 
import { QUERY_KEYS } from '@/shared/constants'

const crumbs = [{ href: APP_PAGES.MENU, label: 'Меню' }]

export default function Page() {
  const router = useRouter()
  const path = usePathname()
  const isMobile = useMediaQuery('(max-width: 833px)')

  const { isLoading, isError, data, error } = useQuery({
    queryKey: [QUERY_KEYS.DISHES],
    queryFn: () => dishService.getDishes()
  })

  useEffect(() => {
    if (isMobile) router.replace(path, { scroll: false })
  }, [isMobile])

  return (
    <div className='pb-[60px] pt-8 md:pb-[72px] md:pt-6 xl:pb-[120px] xl:pt-[42px]'>
      <div className='container'>
        <PageBreadcrumb crumbs={crumbs} />
        <PageTitle title='Наше меню' />
        <FilterBar />
        <SortBar />
        {!isLoading && data && <MenuList data={data} />}
      </div>
    </div>
  )
}
