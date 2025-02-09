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
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

type Props = {
  hidden?: boolean
  totalPages: number
  currentPage: number
  setCurrentPage(page: number): void
  setLimit: (value: number) => void
}

export const AdminPagination = ({
  hidden,
  totalPages,
  currentPage,
  setCurrentPage,
  setLimit,
}: Props) => {
  return (
    <div
      className={cn('flex items-center justify-between', hidden && 'hidden')}
    >
      <Select
        defaultValue='5'
        onValueChange={value => value && setLimit(Number(value))}
      >
        <p className='mx-2'>Показати</p>
        <SelectTrigger className='max-w-min justify-start'>
          <SelectValue placeholder='Показати записи' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='5'>5</SelectItem>
          <SelectItem value='10'>10</SelectItem>
          <SelectItem value='20'>20</SelectItem>
          <SelectItem value='50'>50</SelectItem>
        </SelectContent>
      </Select>
      <span></span>
      {totalPages > 0 && (
        <Pagination className='mx-0 justify-end gap-4 py-2'>
          <PaginationContent>
            <PaginationItem className='ml-auto'>
              <Button
                className='border-none text-lg text-black'
                onClick={() => {
                  setCurrentPage(currentPage - 1)
                }}
                disabled={currentPage === 1}
              >
                <ChevronLeft className='mt-[3px] !min-w-6' />
                Назад
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
                        'rounded-md border-none text-xl hover:bg-black hover:bg-opacity-15',
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
                className='border-none text-lg text-black'
                onClick={() => {
                  setCurrentPage(currentPage + 1)
                }}
                disabled={currentPage === totalPages}
              >
                Далі
                <ChevronRight className='mt-[3px] !min-w-6' />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
