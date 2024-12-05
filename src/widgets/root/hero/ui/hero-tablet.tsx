import Image from 'next/image'
import Link from 'next/link'
import { Picture } from '@/shared/ui'

import { APP_PAGES } from '@/shared/constants'
import poster_md from '@/shared/assets/images/hero/hero-md.png'
import poster_xl from '@/shared/assets/images/hero/hero-xl.png'
import parsley_desktop from '@/shared/assets/images/hero/parsley-hero-desktop.png'
import parsley_tablet from '@/shared/assets/images/hero/parsley-hero-tablet.png'

export const HeroTablet = () => {
  return (
    <div className='hidden md:block'>
      <div className='relative h-[480px] xl:h-[758px]'>
        <Image
          src={poster_md}
          alt='Hero Image'
          fill
          sizes='100vw'
          className='block h-auto w-full object-cover xl:hidden'
          priority
        />
        <Image
          src={poster_xl}
          alt='Hero Image'
          fill
          sizes='100vw'
          className='hidden h-auto w-full object-cover xl:block'
        />
        <div className='container relative h-full'>
          <div className='absolute left-[60px] top-[86px] w-[292px] xl:left-20 xl:top-[114px] xl:w-[600px]'>
            <h1 className='mb-6 font-alegreya text-[70px]/none font-medium text-primary-dark xl:mb-8 xl:text-[130px]/[143px] xl:font-bold xl:tracking-wide'>
              Pasta <br />
              La Pepito
            </h1>
            <p className='mb-[76px] text-sm/[19.6px] xl:mb-[72px] xl:w-[408px] xl:text-base'>
              Відчуйте аромат і неперевершений смак італійських страв, якими
              тепер можна насолоджуватися прямо вдома
            </p>
            <div className='relative'>
              <Link
                href={APP_PAGES.MENU}
                className='relative z-10 ml-7 block w-[198px] rounded-[30px] bg-primary-light py-3 text-center text-sm/[18.2px] font-medium text-white xl:ml-0 xl:w-[274px] xl:py-[12.5px] xl:text-lg/[23.4px]'
              >
                Подивитися меню
              </Link>
              <Picture
                className='absolute -bottom-[10px] -left-[14px] block h-auto w-[88.5px] xl:-bottom-0 xl:-left-[38px]'
                src={parsley_tablet}
                alt='Hero Image'
                sizes='100vw'
                sources={{
                  '(min-width: 1440px)': parsley_desktop,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
