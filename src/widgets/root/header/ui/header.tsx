import { PinIcon } from '@/shared/ui'
import { Search, Smartphone } from 'lucide-react'

import { Navbar } from './navbar'

export const Header = () => {
  return (
    <header className='fixed z-20 w-full'>
      <div className='bg-primary'>
        <div className='container'>
          <div className='relative pb-[7px] pt-3 text-center text-xs/[15.6px] text-white md:pb-4 md:text-sm/[18.2px]'>
            <p className='mb-4 md:absolute md:left-1/2 md:top-[13px] md:m-0 md:-translate-x-1/2'>
              Доставка щоденно з 12.00 до 20.00
            </p>

            <Navbar className='md:hidden' />

            <div className='hidden md:flex md:items-center md:justify-between'>
              <p className='flex items-center gap-0.5'>
                <PinIcon />
                <span>Kиїв, Еспланадна, 34/2</span>
              </p>
              <div className='flex items-center gap-3'>
                <Search className='size-5 stroke-[1.5px]' />
                <a href='tel:+380966122720' className='flex items-center gap-3'>
                  <Smartphone className='size-5 stroke-[1.5px]' />
                  <p>+380 (96) 612 27 20</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute -bottom-[82px] left-0 right-0 z-10 hidden md:block xl:-bottom-[90px]'>
        <div className='container'>
          <Navbar />
        </div>
      </div>
    </header>
  )
}
