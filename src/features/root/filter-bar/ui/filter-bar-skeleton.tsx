import { Skeleton } from '@/shared/ui'

export const FilterBarSkeleton = () => {
  return (
    <div className='mb-[22px] flex flex-wrap justify-center gap-1 md:gap-x-[41px] md:gap-y-6 xl:gap-x-[53px] xl:gap-y-5'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
        <Skeleton key={item} className='h-[47px] w-36 rounded-[30px]' />
      ))}
    </div>
  )
}
