'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageBreadcrumbs } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
import { ChevronLeft } from 'lucide-react'

import { ProductDetails } from '@/widgets/root/product-details'
import { dishService } from '@/entities/dish'
import { APP_PAGES, QUERY_KEYS } from '@/shared/constants'

export const DishDetailsPage = ({ slug }: { slug: string }) => {
  const { isLoading, data, error } = useQuery({
    queryKey: [QUERY_KEYS.DISH, slug],
    queryFn: () => dishService.getDishBySlug(slug),
    retry: false,
  })

  useEffect(() => {
    if (error) {
      const e = error as Error & { status: number }
      if (e.status === 404) {
        return notFound()
      }
    }
  }, [error])

  return (
    <div className='page-wrap'>
      <div className='container'>
        <PageBreadcrumbs
          crumbs={
            data
              ? [
                  { href: APP_PAGES.MENU, label: 'Меню' },
                  {
                    href: `${APP_PAGES.MENU}?filter=${data.type}`,
                    label: data.type,
                  },
                  { label: data.title },
                ]
              : [{ href: APP_PAGES.MENU, label: 'Меню' }, { label: '...' }]
          }
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
