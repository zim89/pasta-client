import { PinIcon } from '@/shared/ui'
import { WithBlock } from '@/shared/ui/with-block'
import { Smartphone } from 'lucide-react'

import { Navbar } from './navbar'
import { SearchButton } from './search-button'

export const Header = () => {
  return (
    <header className='fixed z-20 w-full'>
      <div className='flex h-[110px] items-center bg-primary md:h-12'>
        <div className='container flex-1'>
          <div className='relative text-center text-xs/[15.6px] text-white md:text-sm/[18.2px]'>
            <p className='mb-4 md:absolute md:left-1/2 md:top-1/2 md:m-0 md:-translate-x-1/2 md:-translate-y-1/2'>
              Доставка щоденно з 12.00 до 20.00
            </p>

            <Navbar className='md:hidden' />

            <div className='hidden md:flex md:items-center md:justify-between'>
              <p className='flex items-center gap-0.5'>
                <PinIcon />
                <span>Kиїв, Еспланадна, 34/2</span>
              </p>
              <div className='flex items-center'>
                <SearchButton />
                <WithBlock>
                  <a
                    href='tel:+380966122720'
                    className='flex items-center gap-2'
                  >
                    <Smartphone className='size-6 stroke-[1.5px]' />
                    <p>+380 (96) 612 27 20</p>
                  </a>
                </WithBlock>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden md:block'>
        <div className='container'>
          <Navbar />
        </div>
      </div>
    </header>
  )
}
