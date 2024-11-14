import Link from 'next/link'
import { Picture } from '@/shared/ui'
import { ArrowLeftIcon } from '@/shared/ui/icons'

import { cn } from '@/shared/lib/utils'
import not_found_desktop from '@/shared/assets/images/not-found/not-found-desktop.png'
import not_found_mobile from '@/shared/assets/images/not-found/not-found-mobile.png'
import not_found_tablet from '@/shared/assets/images/not-found/not-found-tablet.png'

export const NotFoundPage = () => {
  return (
    <div className='page-wrap'>
      <div className='container'>
        <div className='flex flex-col gap-[42px] md:flex-row md:gap-14 xl:gap-[97px]'>
          <div className='xl:space-y[104px] md:w-[278px] md:space-y-0 xl:w-[463px]'>
            <h2 className='text-center font-alegreya text-[160px]/[176px] font-bold tracking-wider text-primary-light/50 md:text-left md:text-[180px]/[198px] xl:text-[300px]/[330px]'>
              404
            </h2>
            <div>
              <p className='hidden text-left text-base/[22.4px] md:block xl:text-2xl/[29.05px]'>
                Упс... Такої сторінки не існує, <br />
                або вона ще не створена.
              </p>
              <Link
                href='/'
                className={cn(
                  'btn-primary',
                  'mt-[60px] hidden gap-5 xl:mr-auto xl:flex xl:w-[305px]',
                )}
              >
                <ArrowLeftIcon />
                Повернутися на головну
              </Link>
            </div>
          </div>

          <div className='space-y-5 md:flex-1'>
            <Picture
              className=''
              src={not_found_mobile}
              alt='Not found image'
              sizes='100vw'
              sources={{
                '(min-width: 1440px)': not_found_desktop,
                '(min-width: 834px)': not_found_tablet,
              }}
            />
            <p className='text-center text-base/[22.4px] md:hidden'>
              Такої сторінки не існує, <br />
              або вона ще не створена.
            </p>
          </div>
        </div>

        <Link
          href='/'
          className={cn(
            'btn-primary',
            'mt-[34px] gap-5 md:mx-auto md:mt-14 md:w-[305px] xl:hidden',
          )}
        >
          <ArrowLeftIcon />
          Повернутися на головну
        </Link>
      </div>
    </div>
  )
}
