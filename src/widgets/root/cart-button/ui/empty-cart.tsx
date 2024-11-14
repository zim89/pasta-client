import Image from 'next/image'

import empty_image from '@/shared/assets/images/empty-cart.png'

export const EmptyCart = () => {
  return (
    <div className='flex flex-col gap-[84px] pt-16'>
      <div className='relative mx-auto size-[180px]'>
        <Image
          src={empty_image}
          alt='Empty cart image'
          fill
          sizes='100%'
          className='object-contain'
        />
      </div>
      <p className='text-center text-lg/[23.4px] font-medium'>
        Кошик порожній. Але це
        <br />
        ніколи не пізно виправити :)
      </p>
    </div>
  )
}
