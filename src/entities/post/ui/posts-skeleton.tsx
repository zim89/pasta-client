'use client'

import { useEffect, useState } from 'react'
import { Skeleton } from '@/shared/ui'
import { useMediaQuery } from 'usehooks-ts'

export const PostsSkeleton = () => {
  const [count, setCount] = useState(2)

  const isDesktop = useMediaQuery('(min-width: 1440px)')
  const isTablet = useMediaQuery('(min-width: 834px)')

  useEffect(() => {
    if (isDesktop) {
      setCount(4)
    } else if (isTablet) {
      setCount(3)
    } else {
      setCount(2)
    }
  }, [isDesktop, isTablet])

  return (
    <div className='flex items-center gap-5 overflow-hidden md:gap-[27px] xl:gap-[34.67px] xl:pt-12'>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          className='size-[211px] flex-none rounded-[23.27px] md:size-[220px] md:rounded-4xl xl:size-[272px] xl:[&:nth-child(2)]:size-[360px]'
        />
      ))}
    </div>
  )
}
