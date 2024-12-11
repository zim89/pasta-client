import { ProductSkeleton } from '@/entities/dish'

export const MenuSkeleton = () => {
  return (
    <>
      <div className='grid grid-cols-1 gap-[30px] md:grid-cols-1 xl:hidden'>
        {Array.from({ length: 2 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
      <div className='hidden xl:grid xl:grid-cols-3 xl:gap-16'>
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </>
  )
}
