import Image from 'next/image'
import Link from 'next/link'
import { LogoLightIcon, PinIcon } from '@/components/icons-pack'
import { InstagramButton } from './ui/instagram-button'
import { payList } from '@/data/footer.data'
import { additionalLinks, navLinks } from '@/data/links.data'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className='py-[26px] bg-primary-dark md:py-8 xl:pb-10'
      data-testid='footer'
    >
      <div className='container'>
        <div className='mb-8 space-y-2 text-white text-sm/[18.2px] md:hidden'>
          <p className='flex items-center'>
            <PinIcon />
            <span>м. Kиїв, вул. Еспланадна, 34/2</span>
          </p>
          <p>+380 (96) 612 27 20</p>
          <p>+380 (96) 612 27 20</p>
        </div>

        <div className='hidden md:flex md:gap-[45.67px] md:mb-10 xl:justify-between'>
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

          <div className='space-y-2 text-[13px]/[16.9px] text-white text-right xl:text-sm/[18.2px]'>
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
        <ul className='mb-8 flex justify-between items-baseline md:hidden'>
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

        <div className='flex flex-col gap-8 md:flex-row-reverse md:justify-between'>
          <ul className='flex justify-between items-center md:justify-start md:gap-[33.68px]'>
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

          <p className='text-white text-sm/[18.2px] md:text-[13px]/[16.9px] xl:text-sm'>
            © Ресторан «Pasta la Pepito»,{' '}
            <span data-testid='current-year'>{currentYear}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
