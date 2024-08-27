import { ProductCardSkeleton } from '@/components/productCard'
import { Skeleton } from '@/components/ui/skeleton'

export const SkeletonList = () => {
  return (
    <div className='relative pt-[72px] xl:grid-cols-3 xl:gap-16'>
      <div className='grid grid-cols-2 gap-[38px] xl:hidden'>
        {Array.from({ length: 2 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
      <div className='hidden xl:grid xl:grid-cols-3 xl:gap-16'>
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>

      <div className='absolute right-0 top-0 flex h-10 w-[120px] items-center gap-10'>
        <Skeleton className='h-10 w-10 rounded-full border border-grey/10 bg-grey/30' />
        <Skeleton className='h-10 w-10 rounded-full border border-grey/10 bg-grey/30' />
      </div>
    </div>
  )
}
