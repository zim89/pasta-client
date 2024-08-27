'use client'

export const CardSkeleton = () => {
  return (
    <div
      className='flex animate-pulse gap-[22px] overflow-clip rounded-xl border border-grey/10 bg-grey/5 xl:gap-[18px] xl:rounded-[30px]'
      data-testid='card'
    >
      <div className='relative h-[159px] w-[135px] animate-pulse bg-grey/30 xl:h-[196px] xl:w-[196px] ' />
      {/* Image */}
      <div className='relative h-full flex-1'>
        <div className='absolute bottom-[17px] right-[17px] size-10 animate-pulse rounded-full bg-grey/30 ' />
      </div>
    </div>
  )
}
