import Image from 'next/image'

import type { Feature } from '@/entities/feature'

export const FeatureCard = ({ item }: { item: Feature }) => {
  return (
    <div className='flex flex-col items-center rounded-[25.91px] border border-primary-light/70 bg-card-background/90 px-3 py-2.5 md:px-2 md:py-[16.5px] xl:border-2 xl:bg-card-background/85 xl:px-[32px] xl:py-[30.5px]'>
      <div className='mb-3 md:mb-6'>
        <div className='relative h-[62px] w-[62px] md:h-[72px] md:w-[80px]'>
          <Image src={item.image} alt={item.title} fill className='md:hidden' />
          <Image
            src={item.image}
            alt={item.title}
            fill
            className='hidden md:block'
          />
        </div>
      </div>

      <h3 className='mb-[6.91px] h-[34px] text-center text-sm/[16.8px] font-semibold md:mb-2 md:h-auto md:text-base/[19.2px] md:font-medium xl:text-lg/[23.4px]'>
        {item.title}
      </h3>
      <p className='w-[80%] px-4 text-center text-xs/[14.4px] text-black/70 md:w-[70%] md:text-sm/[18.2px] xl:h-[84px] xl:w-full xl:text-base/[20.8px] xl:text-black'>
        <span className=''>{item.description}</span>
      </p>
    </div>
  )
}
