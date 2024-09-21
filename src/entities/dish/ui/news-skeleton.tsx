import Image from 'next/image'

import { Skeleton } from '@/shared/ui/common/skeleton'
import camera_100_icon from '@/shared/assets/icons/camera-100.png'

export const NewsSkeleton = () => {
  return (
    <div className='flex overflow-hidden rounded-4xl border border-gray-500'>
      <Skeleton className='relative size-[196px]'>
        <Image
          src={camera_100_icon}
          alt='Camera icon'
          width={100}
          height={100}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'
        />
      </Skeleton>
      <div className='h-full flex-1 space-y-[22px] px-[18px] py-[18.5px]'>
        <div className='space-y-[13.5px]'>
          <Skeleton className='h-3 rounded' />
          <Skeleton className='h-3 rounded' />
          <Skeleton className='h-3 rounded' />
        </div>
        <Skeleton className='h-3 w-1/2 rounded' />
        <div className='flex items-center justify-between'>
          <Skeleton className='h-[29px] w-14 rounded' />
          <Skeleton className='size-10 rounded-full' />
        </div>
      </div>
    </div>
  )
}
