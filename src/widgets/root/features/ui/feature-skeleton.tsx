import { Skeleton } from '@/shared/ui'

export const FeatureSkeleton = () => {
  return (
    <div className='section container pt-10 md:pt-[72px] xl:pt-[77px]'>
      <h2>Наші переваги</h2>
      <div className='grid grid-cols-2 gap-[14px] md:flex md:gap-[42px] xl:gap-[53px]'>
        {[1, 2, 3, 4].map(item => {
          return (
            <Skeleton
              key={item}
              className='size-[164px] w-full rounded-[30px] md:h-[200px] md:w-[210px] md:last:hidden xl:size-[280px] xl:last:block'
            ></Skeleton>
          )
        })}
      </div>
    </div>
  )
}
