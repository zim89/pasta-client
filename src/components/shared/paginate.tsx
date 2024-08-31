'use client'

import { useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import { PAGINATION_LIMIT } from '@/constants/app.const'

export const Paginate = ({ total }: { total: number }) => {
  const path = usePathname()
  const searchParams = useSearchParams()

  const pages = Math.ceil(total / PAGINATION_LIMIT)
  const page = parseInt(searchParams.get('page') || '1')

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  if (total <= PAGINATION_LIMIT) return null

  return (
    <>
      {pages > 1 && (
        <Pagination>
          <PaginationContent className='gap-16'>
            <PaginationItem>
              <PaginationPrevious
                href={
                  path + '?' + createQueryString('page', (page - 1).toString())
                }
                className={cn(
                  page === 1 &&
                    'pointer-events-none cursor-auto border-grey/50 text-grey/50'
                )}
              />
            </PaginationItem>

            <div className='flex items-center gap-5'>
              {Array.from({ length: pages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href={
                      path +
                      '?' +
                      createQueryString('page', (index + 1).toString())
                    }
                    isActive={index + 1 === page}
                    className={cn(
                      'text-lg/[23.4px]',
                      index + 1 === page && 'border-primary-light text-black'
                    )}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </div>

            <PaginationItem>
              <PaginationNext
                href={
                  path + '?' + createQueryString('page', (page + 1).toString())
                }
                className={cn(
                  page === pages &&
                    'pointer-events-none cursor-auto border-grey/50 text-grey/50'
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  )
}
