import Image from 'next/image'
import Link from 'next/link'
import { LogoLightIcon, PinIcon } from '@/shared/ui'

import { ADDRESS, APP_PAGES, PHONE } from '@/shared/constants'
import { ADDITIONAL_LINKS, FOOTER_LINKS } from '@/shared/data'
import decor_img from '@/shared/assets/images/decoration/footer-veggies.png'
import { DeliveryModal } from '../../delivery-modal'
import { PAY_LIST } from '../model'
import { InstagramButton } from './instagram-button'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className='relative bg-primary-dark py-[26px] md:py-8 xl:pb-10'
      data-testid='footer'
    >
      <Image
        src={decor_img}
        width={259}
        height={120}
        alt='Features decoration image'
        className='absolute bottom-[7px] left-1/2 hidden -translate-x-1/2 xl:block'
      />
      <div className='container relative z-10'>
        <div className='mb-8 space-y-2 text-sm/[18.2px] text-white md:hidden'>
          <p className='flex items-center'>
            <PinIcon />
            <span>{ADDRESS}</span>
          </p>
          <p>{PHONE}</p>
        </div>

        <div className='hidden md:mb-10 md:flex md:gap-[45.67px] xl:justify-between'>
          <Link href='/'>
            <LogoLightIcon />
          </Link>

          <ul className='space-y-2'>
            {FOOTER_LINKS.map(item => (
              <li key={item.label} data-testid='nav-link'>
                <Link href={item.href} className='textLink-light text-nowrap'>
                  {item.label}
                </Link>
              </li>
            ))}
            <li data-testid='nav-link'>
              <DeliveryModal className='textLink-light text-nowrap border-0' />
            </li>
          </ul>
          <ul className='space-y-2'>
            {ADDITIONAL_LINKS.map(item => (
              <li key={item.label} data-testid='additional-link'>
                <Link href={item.href} className='textLink-light text-nowrap'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className='space-y-2 text-right text-[13px]/[16.9px] text-white xl:text-sm/[18.2px]'>
            <p className='flex items-center text-nowrap'>
              <PinIcon />
              <span>{ADDRESS}</span>
            </p>
            <p>{PHONE}</p>
            <InstagramButton className='ml-auto' />
          </div>
        </div>

        <ul className='mb-8 flex items-baseline justify-between md:hidden'>
          <Link href={APP_PAGES.PUBLIC_OFFER} className='textLink-light'>
            Договір публічної оферти
          </Link>

          <Link href={APP_PAGES.PRIVACY_POLICY} className='textLink-light'>
            Політика конфіденційності
          </Link>
        </ul>

        <div className='flex flex-col gap-8 md:flex-row-reverse md:justify-between'>
          <ul className='flex items-center justify-between md:justify-start md:gap-[33.68px]'>
            {PAY_LIST.map(item => (
              <li key={item.label}>
                <Image
                  data-testid='payment-item'
                  src={item.src}
                  alt={item.label}
                  width={item.width}
                  height={17.64}
                />
              </li>
            ))}
          </ul>

          <p className='text-sm/[18.2px] text-white md:text-[13px]/[16.9px] xl:text-sm'>
            © Ресторан «Pasta la Pepito»,{' '}
            <span data-testid='current-year'>{currentYear}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
