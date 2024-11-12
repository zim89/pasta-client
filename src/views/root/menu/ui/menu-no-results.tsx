import Image from 'next/image'

import not_found_img from '@/shared/assets/images/filter-not-found.png'

export const MenuNoResults = () => {
  return (
    <div className='flex flex-col items-center gap-14 pt-[39px] md:pt-[27px] xl:gap-[49.16px] xl:pt-10'>
      <div className='relative h-[180px] w-[288px] md:h-[244px] md:w-[391px] xl:h-[329.84px] xl:w-[530px]'>
        <Image
          src={not_found_img}
          alt='No results image'
          fill
          sizes='100%'
          className='object-cover'
        />
      </div>
      <p className='text-center text-xl/[24.2px] text-primary-dark xl:text-2xl/[29.05px]'>
        Ми наразі працюємо над наповненням цього <br className='md:hidden' />
        розділу!
      </p>
    </div>
  )
}
