import Image from 'next/image'

import not_found_img from '@/shared/assets/images/filter-not-found.png'

export const MenuNoResults = () => {
  return (
    <div className='flex flex-col items-center gap-[49.16px] pt-10'>
      <div className='relative h-[329.84px] w-[530px]'>
        <Image
          src={not_found_img}
          alt='No results image'
          fill
          sizes='100%'
          className='object-cover'
        />
      </div>
      <p className='text-center text-2xl/[29.05px] text-primary-dark'>
        Ми наразі працюємо над наповненням цього розділу!
      </p>
    </div>
  )
}
