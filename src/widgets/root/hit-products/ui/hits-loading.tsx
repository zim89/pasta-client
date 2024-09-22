import { ProductSkeleton } from '@/entities/dish'

export const HitsLoading = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-[30px] xl:hidden'>
        {Array.from({ length: 2 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
      <div className='hidden xl:grid xl:grid-cols-3 xl:gap-16 xl:pt-[72px]'>
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </>
  )
}
