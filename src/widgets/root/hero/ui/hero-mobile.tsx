import Image from 'next/image'
import Link from 'next/link'

import { APP_PAGES } from '@/shared/constants'
import poster_sm from '@/shared/assets/images/hero/hero-sm.png'

export const HeroMobile = () => {
  return (
    <div className='space-y-4 md:hidden'>
      <Image src={poster_sm} alt='Hero poster' />
      <div className='mx-auto w-[280px] space-y-6'>
        <h1 className='text-center font-alegreya text-[44px]/[52.8px] font-medium text-primary-dark'>
          Pasta <br />
          La Pepito
        </h1>
        <p className='text-center text-base/[20.8px]'>
          Відчуйте аромат і неперевершений смак наших італійських страв, якими
          тепер можна насолоджуватися прямо вдома.
        </p>
        <Link
          href={APP_PAGES.MENU}
          className='relative block w-full rounded-[30px] bg-primary-light py-[12.5px] text-center text-lg/[23.4px] font-medium text-white'
        >
          Подивитися меню
        </Link>
      </div>
    </div>
  )
}
