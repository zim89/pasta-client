import React from 'react'

export const CardSkeleton = () => {
  return (
    <div
      className='flex gap-[22px] rounded-xl border border-grey/30 animate-pulse overflow-clip xl:gap-[18px] xl:rounded-[30px] bg-grey/5'
      data-testid='card'
    >
      <div className='relative w-[135px] h-[159px] bg-grey/30 animate-pulse xl:h-[196px] xl:w-[196px] ' />
      {/* Image */}
      <div className='relative flex-1 h-full'>
        <div className='absolute size-10 bottom-[17px] right-[17px] bg-grey/30 animate-pulse rounded-full ' />
      </div>
    </div>
  )
}
