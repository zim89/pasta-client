'use client'

import { usePathname } from 'next/navigation'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/common/pagination'
import { PAGINATION_LIMIT } from '@/shared/constants'
import { useQueryString } from '../lib/hooks/useQueryString'
import { cn } from '../lib/utils'

export const PagePagination = ({ total }: { total: number }) => {
  const path = usePathname()
  const { searchParams, createQueryString } = useQueryString()

  const pages = Math.ceil(total / PAGINATION_LIMIT)
  const page = parseInt(searchParams.get('page') || '1')

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
                  'border-primary-light/50 text-primary-light/50 transition-colors duration-300 hover:border-primary-light hover:text-primary-light',
                  page === 1 &&
                    'pointer-events-none cursor-auto border-gray-500/50 text-gray-500/50',
                )}
              />
            </PaginationItem>

            <div className='flex items-center gap-5'>
              {Array.from({ length: pages }).map((_, index) => {
                const isActive = index + 1 === page

                return (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href={
                        path +
                        '?' +
                        createQueryString('page', (index + 1).toString())
                      }
                      isActive={isActive}
                      className={cn(
                        'border border-primary-light text-lg/[23.4px] text-primary-dark opacity-100 transition-colors duration-300 hover:border-primary-light hover:bg-primary-lighter',
                        isActive &&
                          'pointer-events-none bg-primary-light/50 hover:border-primary-light hover:bg-primary-light/50',
                      )}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}
            </div>

            <PaginationItem>
              <PaginationNext
                href={
                  path + '?' + createQueryString('page', (page + 1).toString())
                }
                className={cn(
                  'border-primary-light/50 text-primary-light/50 transition-colors duration-300 hover:border-primary-light hover:text-primary-light',
                  page === pages &&
                    'pointer-events-none cursor-auto border-gray-500/50 text-gray-500/50',
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  )
}
