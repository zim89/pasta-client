import Image from 'next/image'

import not_found_img from '@/shared/assets/images/search/not-found.png'

export const SearchNotFound = () => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <Image
        src={not_found_img}
        alt='Not found image'
        width={323}
        height={225}
      />
      <p className='text-center text-lg/[23.4px]'>Тут поки немає даних</p>
    </div>
  )
}
