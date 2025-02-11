import {
  Button,
  Pagination,
  PaginationContent,
  PaginationItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/common'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

type Props = {
  hidden?: boolean
  currentPage: number
  setCurrentPage(page: number): void
  setLimit: (value: number) => void
  countItems: number
  limitParam: number
}

export const AdminPagination = ({
  hidden,
  countItems,
  limitParam,
  currentPage,
  setCurrentPage,
  setLimit,
}: Props) => {
  const totalPages = Math.ceil(countItems / limitParam)

  const startItem = (currentPage - 1) * limitParam + 1
  const endItem = Math.min(currentPage * limitParam, countItems)

  const formattedString = `${startItem}-${endItem} з ${countItems}`

  return (
    <div className={cn('flex items-center justify-end', hidden && 'hidden')}>
      <Select
        defaultValue='5'
        onValueChange={value => value && setLimit(Number(value))}
      >
        <p className='mx-2 hidden text-sm xl:block'>Показати:</p>
        <SelectTrigger
          className='bg-transparent ml-2 mr-8 hidden max-w-min justify-start border-none p-0 xl:flex'
          icon={
            <Play className='mx-2 size-2 rotate-90 -scale-y-150 fill-gray-700 stroke-none' />
          }
        >
          <SelectValue placeholder='Показати записи' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='5'>5</SelectItem>
          <SelectItem value='10'>10</SelectItem>
          <SelectItem value='20'>20</SelectItem>
          <SelectItem value='50'>50</SelectItem>
        </SelectContent>
      </Select>
      <span className='mr-8 text-sm'>{formattedString}</span>
      {totalPages > 0 && (
        <Pagination className='mx-0 max-w-min justify-end gap-4 py-2'>
          <PaginationContent>
            <PaginationItem className='ml-auto'>
              <Button
                className='border-none p-0 text-sm text-black'
                onClick={() => {
                  setCurrentPage(currentPage - 1)
                }}
                disabled={currentPage === 1}
              >
                <ChevronLeft className='size-4' />
              </Button>
            </PaginationItem>
            {Array.from({ length: totalPages })
              .fill(null)
              .map((_, index) => {
                const isActive = index === currentPage - 1

                return (
                  <PaginationItem key={index}>
                    <Button
                      className={cn(
                        'hidden size-7 rounded-full border-none p-0 text-sm hover:bg-black hover:bg-opacity-15 xl:flex',
                        isActive && 'bg-black bg-opacity-15',
                      )}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  </PaginationItem>
                )
              })}
            <PaginationItem>
              <Button
                className='border-none p-0 text-sm text-black'
                onClick={() => {
                  setCurrentPage(currentPage + 1)
                }}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className='size-4' />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
