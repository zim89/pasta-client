'use client'

import { useRouter } from 'next/navigation'
import { Picture } from '@/shared/ui'
import { ArrowLeftIcon } from '@/shared/ui/icons'

import { cn } from '@/shared/lib/utils'
import not_found_desktop from '@/shared/assets/images/not-found/not-found-desktop.png'
import not_found_mobile from '@/shared/assets/images/not-found/not-found-mobile.png'
import not_found_tablet from '@/shared/assets/images/not-found/not-found-tablet.png'

export const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className='page-wrap'>
      <div className='container'>
        <div className='flex flex-col gap-[42px] md:flex-row md:gap-14 xl:gap-[97px]'>
          <div className='relative md:h-[274px] md:w-[278px] md:space-y-0 xl:h-[520px] xl:w-[463px] xl:space-y-[104px]'>
            <h2 className='text-center font-alegreya text-[160px]/[176px] font-bold tracking-wider text-primary-light/50 md:absolute md:-top-10 md:left-0 md:text-left md:text-[180px]/[198px] xl:-top-16 xl:text-[300px]/[330px]'>
              404
            </h2>
            <div className='md:absolute md:bottom-0 md:left-0 md:pb-[27px] xl:pb-14'>
              <p className='hidden text-left text-base/[22.4px] md:block xl:text-2xl/[29.05px]'>
                Упс... Такої сторінки не існує, <br />
                або вона ще не створена.
              </p>
              <button
                onClick={() => router.back()}
                className={cn(
                  'btn-primary',
                  'mt-[78px] hidden gap-5 xl:mr-auto xl:flex xl:w-[305px]',
                )}
              >
                <ArrowLeftIcon />
                Повернутися назад
              </button>
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

        <button
          onClick={() => router.back()}
          className={cn(
            'btn-primary',
            'mt-[34px] gap-5 md:mx-auto md:mt-14 md:w-[305px] xl:hidden',
          )}
        >
          <ArrowLeftIcon />
          Повернутися назад
        </button>
      </div>
    </div>
  )
}
