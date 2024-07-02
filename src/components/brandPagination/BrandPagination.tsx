'use client'

import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
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
  if (!pages) return null

  const params = useSearchParams()
  const currentPage = parseInt(params.get('page') || '1')

  // Generating pagination links
  const items: number[] = Array(pages)
    .fill(null)
    .reduce(
      acc => {
        // In case of last pages, add previous pages to the array (instead of a single last page, you see also three previous ones)
        if (
          // If it's the last one
          acc[acc.length - 1] === pages &&
          // And the array is less than 4 links
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
      <Pagination className={cn('justify-end xl:justify-center', className)}>
        <PaginationContent className='gap-10'>
          <PaginationItem>
            <PaginationPrevious
              href={
                currentPage > 1
                  ? `?page=${currentPage - 1}`
                  : `?page=${currentPage}`
              }
            />
          </PaginationItem>
          {items.length <= 4 ? (
            items.map(page => {
              return (
                <PaginationItem
                  className='hidden xl:block'
                  key={page}
                >
                  <PaginationLink
                    isActive={page === currentPage}
                    href={`?page=${page}`}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            })
          ) : (
            // Last four pages
            <>
              <PaginationItem className='hidden xl:block'>
                <PaginationLink
                  isActive={items[0] === currentPage}
                  href={`?page=${items[0]}`}
                >
                  {items[0]}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className='hidden xl:block'>
                <PaginationLink
                  isActive={items[1] === currentPage}
                  href={`?page=${items[1]}`}
                >
                  {items[1]}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className='hidden xl:block'>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem className='hidden xl:block'>
                <PaginationLink
                  isActive={items[items.length - 1] === currentPage}
                  href={`?page=${items[items.length - 1]}`}
                >
                  {items[items.length - 1]}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationNext
              href={
                currentPage < pages
                  ? `?page=${currentPage + 1}`
                  : `?page=${currentPage}`
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}
