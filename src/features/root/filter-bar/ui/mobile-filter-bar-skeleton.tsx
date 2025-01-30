import { Skeleton } from '@/shared/ui'

export const MobileFilterBarSkeleton = () => {
  return (
    <div className='flex gap-5'>
      {[1, 2, 3].map(item => (
        <Skeleton key={item} className='h-[47px] w-36 rounded-[30px]' />
      ))}
    </div>
  )
}
