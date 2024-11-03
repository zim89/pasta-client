'use client'

import { CSSProperties, useEffect, useState } from 'react'
import { PinIcon } from '@/shared/ui'
import { PhoneIcon } from '@/shared/ui/icons'

import { ADDRESS_SHORT, ORDER_TIME, PHONE_SHORT } from '@/shared/constants'
import { InstagramButton } from '../../footer/ui'
import { Navbar } from './navbar'
import { SearchButton } from './search-button'

// Threshold at which the header's background opacity reaches its maximum value (100% white)
const THRESHOLD = 600

export const Header = () => {
  const [headerOffsetState, setHeaderOffsetState] = useState(0)

  useEffect(() => {
    // When the page after a reload initially is scrolled down, it then fill the header appropriately
    setHeaderOffsetState(() => Math.min(window.scrollY, THRESHOLD))

    // When the user scrolls, the header offset changes accordingly
    const handleScroll = () => {
      // Cancelling the scroll tracking for optimization purposes
      if (window.scrollY > THRESHOLD * 2) return
      setHeaderOffsetState(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className='fixed z-20 w-full bg-white'
      style={
        {
          '--tw-bg-opacity': (headerOffsetState / THRESHOLD).toFixed(1),
        } as CSSProperties
      }
    >
      <div className='flex h-[110px] items-center bg-primary md:h-12'>
        <div className='container flex-1'>
          <div className='relative text-center text-xs/[15.6px] text-white md:text-sm/[18.2px]'>
            <p className='mb-4 md:absolute md:left-1/2 md:top-1/2 md:m-0 md:-translate-x-1/2 md:-translate-y-1/2'>
              {ORDER_TIME}
            </p>

            <Navbar className='md:hidden' />

            <div className='hidden md:flex md:items-center md:justify-between'>
              <p className='flex items-center gap-0.5'>
                <PinIcon />
                <span>{ADDRESS_SHORT}</span>
              </p>
              <div className='flex items-center gap-6 xl:gap-10'>
                <SearchButton />

                <a
                  href='tel:+380966122720'
                  className='flex items-center gap-1 text-white transition-colors duration-300 hover:text-accent xl:pl-6'
                >
                  <PhoneIcon />
                  <p>{PHONE_SHORT}</p>
                </a>

                <InstagramButton className='hidden xl:flex' />
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
