import Image from 'next/image'

import { Skeleton } from '@/shared/ui/common/skeleton'
import camera_160_icon from '@/shared/assets/icons/camera-160.png'

export const ProductSkeleton = () => {
  return (
    <div className='rounded-[30px] border border-gray-400'>
      <Skeleton className='relative h-[260px]'>
        <Image
          src={camera_160_icon}
          alt='Camera icon'
          width={160}
          height={160}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'
        />
      </Skeleton>
      <div className='px-5 py-4'>
        <Skeleton className='mb-[26px] h-6 w-1/2 rounded' />
        <div className='mb-8 space-y-3'>
          <Skeleton className='h-3 rounded' />
          <Skeleton className='h-3 rounded' />
        </div>
        <div className='space-y-5'>
          <div className='flex items-center justify-between'>
            <Skeleton className='h-4 w-[76px] rounded' />
            <Skeleton className='h-11 w-[220px] rounded-[30px]' />
          </div>
          <div className='flex items-center justify-between'>
            <Skeleton className='h-[31px] w-[63px] rounded' />
            <Skeleton className='h-11 w-[220px] rounded-[30px]' />
          </div>
        </div>
      </div>
    </div>
  )
}
