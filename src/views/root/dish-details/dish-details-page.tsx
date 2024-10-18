'use client'

import Link from 'next/link'
import { PageBreadcrumbs } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
import { ChevronLeft } from 'lucide-react'

import { ProductDetails } from '@/widgets/root/product-details'
import { dishService } from '@/entities/dish'
import { APP_PAGES, QUERY_KEYS } from '@/shared/constants'

export const DishDetailsPage = ({ slug }: { slug: string }) => {
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.DISH, slug],
    queryFn: () => dishService.getDishBySlug(slug),
  })

  return (
    <div className='page-wrap'>
      <div className='container'>
        <PageBreadcrumbs
          crumbs={[
            { href: APP_PAGES.MENU, label: 'Меню' },
            { label: data ? data.title : '...' },
          ]}
        />

        <Link
          href={APP_PAGES.MENU}
          className='mb-5 flex items-center gap-2 text-sm/[18.2px] font-medium md:hidden'
        >
          <ChevronLeft className='size-4' />
          Назад
        </Link>

        {data && !isLoading && <ProductDetails dish={data} />}
      </div>
    </div>
  )
}
