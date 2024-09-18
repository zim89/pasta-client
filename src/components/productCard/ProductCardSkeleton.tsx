'use client'

import { Skeleton } from '@/shared/ui/common/skeleton'

export const ProductCardSkeleton = () => {
  return (
    <div className='overflow-clip rounded-[30px] border border-grey/20'>
      {/* Image */}
      <Skeleton className='h-[261px] rounded-none bg-grey/30' />

      {/* Content */}
      <div className='relative h-[238px] p-4'>
        <Skeleton className='h-6 bg-grey/30' />
        <div className='absolute bottom-6 right-4 grid w-[200px] grid-cols-1 gap-4'>
          <Skeleton className='h-11 rounded-[30px] border border-grey/20 bg-grey/30' />
          <Skeleton className='h-11 rounded-[30px] border border-grey/20 bg-grey/30' />
        </div>
      </div>
    </div>
  )
}
