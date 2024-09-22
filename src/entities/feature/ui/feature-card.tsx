import Image from 'next/image'

import type { Feature } from '@/entities/feature'

export const FeatureCard = ({ item }: { item: Feature }) => {
  return (
    <div className='flex flex-col items-center rounded-[25.91px] border border-primary-light/70 bg-card-background/90 px-3 py-2.5 md:px-2 md:py-[16.5px] xl:border-2 xl:bg-card-background/85 xl:px-[32px] xl:py-[30.5px]'>
      <div className='mb-3 md:mb-6'>
        <Image
          src={item.icon}
          alt={item.title}
          height={62}
          width={62}
          className='md:hidden'
        />
        <Image
          src={item.icon}
          alt={item.title}
          height={72}
          width={80}
          className='hidden md:block'
        />
      </div>

      <h3 className='mb-[6.91px] h-[34px] text-center text-sm/[16.8px] font-semibold md:mb-2 md:h-auto md:text-base/[19.2px] md:font-medium xl:text-lg/[23.4px]'>
        {item.title}
      </h3>
      <p className='w-[80%] text-center text-xs/[14.4px] text-black/70 md:w-[70%] md:text-sm/[18.2px] xl:h-[84px] xl:w-full xl:text-base/[20.8px] xl:text-black'>
        <span className='xl:hidden'>{item.desc}</span>
        <span className='hidden xl:inline'>{item.desc_full}</span>
      </p>
    </div>
  )
}
