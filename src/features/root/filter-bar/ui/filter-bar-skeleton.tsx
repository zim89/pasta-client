import { Skeleton } from '@/shared/ui'

export const FilterBarSkeleton = () => {
  return (
    <div className='flex gap-5'>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
        <Skeleton key={item} className='h-[47px] w-36 rounded-[30px]' />
      ))}
    </div>
  )
}
