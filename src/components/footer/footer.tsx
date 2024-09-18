import Image from 'next/image'
import Link from 'next/link'
import { InstagramButton } from './ui/instagram-button'
import veggies from '@/shared/assets/images/footer-veggies.png'
import { payList } from '@/shared/data/footer.data'
import { additionalLinks, navLinks } from '@/shared/data/links.data'
import { LogoLightIcon, PinIcon } from '@/shared/ui/icons-pack'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className='bg-primary-dark py-[26px] md:py-8 xl:pb-10'
      data-testid='footer'
    >
      <div className='container'>
        <div className='mb-8 space-y-2 text-sm/[18.2px] text-white md:hidden'>
          <p className='flex items-center'>
            <PinIcon />
            <span>м. Kиїв, вул. Еспланадна, 34/2</span>
          </p>
          <p>+380 (96) 612 27 20</p>
          <p>+380 (96) 612 27 20</p>
        </div>

        <div className='hidden md:mb-10 md:flex md:gap-[45.67px] xl:justify-between'>
          <Link href='/'>
            <LogoLightIcon />
          </Link>
          <ul className='space-y-2'>
            {navLinks.map(item => (
              <li
                key={item.label}
                data-testid='nav-link'
              >
                <Link
                  href={item.href}
                  className='textLink-light'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='space-y-2'>
            {additionalLinks.map(item => (
              <li
                key={item.label}
                data-testid='additional-link'
              >
                <Link
                  href={item.href}
                  className='textLink-light'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className='space-y-2 text-right text-[13px]/[16.9px] text-white xl:text-sm/[18.2px]'>
            <p className='flex items-center'>
              <PinIcon />
              <span>м. Kиїв, вул. Еспланадна, 34/2</span>
            </p>
            <p>+380 (96) 612 27 20</p>
            <p>+380 (96) 612 27 20</p>
            <InstagramButton />
          </div>
        </div>

        {/* FIXME: Add valid links */}
        <ul className='mb-8 flex items-baseline justify-between md:hidden'>
          <Link
            href='/'
            className='textLink-light'
          >
            Договір публічної оферти
          </Link>
          <Link
            href='/'
            className='textLink-light'
          >
            Політика конфіденційності
          </Link>
        </ul>

        <div className='flex flex-col items-end gap-8 md:flex-row-reverse md:justify-between'>
          <ul className='flex items-center justify-between md:justify-start md:gap-[33.68px]'>
            {payList.map(item => (
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

          <Image
            src={veggies}
            width={259}
            height={120}
            className='-mb-4 hidden xl:block'
            alt=''
          />

          <p className='text-sm/[18.2px] text-white md:text-[13px]/[16.9px] xl:text-sm'>
            © Ресторан «Pasta la Pepito»,{' '}
            <span data-testid='current-year'>{currentYear}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
