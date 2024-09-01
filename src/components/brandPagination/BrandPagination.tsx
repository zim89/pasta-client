'use client'

import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { calculateParams } from '@/helpers/brandPagination.helpers'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '../ui/pagination'

type Props = {
  pages: number
  className?: string
}
export const BrandPagination = ({ pages, className }: Props) => {
  const params = useSearchParams()

  if (!pages) return null
  const currentPage = parseInt(params.get('page') || '1')

  // Generating pagination links
  const items: number[] = Array(pages)
    .fill(null)
    .reduce(
      acc => {
        // In case of last pages, add previous pages to the array (instead of a single last page, you see also the first page and three previous ones)
        if (
          // If it's the last one
          acc[acc.length - 1] === pages &&
          // And the array is less than 3 links
          acc.length < 4 &&
          // But also don't include 0 as a link
          acc[0] - 1 !== 0
        ) {
          acc.unshift(acc[0] - 1)
        }

        if (acc[acc.length - 1] + 1 > pages) return acc

        return acc.concat(acc[acc.length - 1] + 1)
      },
      [currentPage]
    )

  return (
    <>
      <Pagination
        className={cn(
          'max-w-screen-sm justify-end xl:justify-center',
          className
        )}
        data-testid='pagination-wrapper'
      >
        <PaginationContent
          className='gap-16'
          data-testid='pagination'
        >
          <PaginationItem>
            <PaginationPrevious
              data-testid='pagination-prev'
              className={cn(
                currentPage === 1 &&
                  'pointer-events-none cursor-auto border-grey/50 text-grey/50'
              )}
              href={
                currentPage > 1
                  ? calculateParams(params, 'page', `${currentPage - 1}`)
                  : calculateParams(params, 'page', `${currentPage}`)
              }
            />
          </PaginationItem>
          {items.length <= 4 ? (
            <div className='flex items-center gap-5'>
              <PaginationItem>
                <PaginationLink
                  isActive={currentPage === 1}
                  href={calculateParams(params, 'page', '1')}
                  data-testid='pagination-link'
                >
                  1
                </PaginationLink>
              </PaginationItem>
              {items.map(page => {
                if (page === 1) return null

                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={page === currentPage}
                      href={calculateParams(params, 'page', `${page}`)}
                      data-testid='pagination-link'
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}
            </div>
          ) : (
            // Last five pages
            <div className='flex items-center gap-5'>
              {items[0] !== 1 && (
                <PaginationItem>
                  <PaginationLink
                    isActive={currentPage === 1}
                    href={calculateParams(params, 'page', '1')}
                    data-testid='pagination-link'
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink
                  isActive={items[0] === currentPage}
                  href={calculateParams(params, 'page', `${items[0]}`)}
                  data-testid='pagination-link'
                >
                  {items[0]}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  isActive={items[1] === currentPage}
                  href={calculateParams(params, 'page', `${items[1]}`)}
                  data-testid='pagination-link'
                >
                  {items[1]}
                </PaginationLink>
              </PaginationItem>

              {items[0] === 1 && (
                <PaginationItem>
                  <PaginationLink
                    isActive={items[2] === currentPage}
                    href={calculateParams(params, 'page', `${items[2]}`)}
                    data-testid='pagination-link'
                  >
                    {items[2]}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationEllipsis data-testid='pagination-ellipsis' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  isActive={items[items.length - 1] === currentPage}
                  data-testid='pagination-link'
                  href={calculateParams(
                    params,
                    'page',
                    `${items[items.length - 1]}`
                  )}
                >
                  {items[items.length - 1]}
                </PaginationLink>
              </PaginationItem>
            </div>
          )}
          <PaginationItem>
            <PaginationNext
              data-testid='pagination-next'
              href={
                currentPage < pages
                  ? calculateParams(params, 'page', `${currentPage + 1}`)
                  : calculateParams(params, 'page', `${currentPage}`)
              }
              className={cn(
                currentPage === pages &&
                  'pointer-events-none cursor-auto border-grey/50 text-grey/50'
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}
