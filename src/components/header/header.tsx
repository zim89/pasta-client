import { Instagram, Search, Smartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logoLight from '@/assets/icons/logo/logo-light.svg'
import logoPrimary from '@/assets/icons/logo/logo-primary.svg'
import { BurgerMenu } from '../burgerMenu'
import { PinIcon } from '../icons-pack'
import { Button } from '../ui/button'
import { CartButton } from './ui/CartButton'
import { Links } from './ui/Links'

export const Header = () => {
  return (
    <header className='md:bg-transparent mt-7 md:mt-0'>
      <div className='bg-primary'>
        <div className='container py-2'>
          <div className='flex items-center justify-center md:justify-between pt-1 pb-3 text-white text-sm'>
            <p className='hidden md:flex md:items-center'>
              <PinIcon />
              <span>Kиїв, Еспланадна, 34/2</span>
            </p>
            <p className='text-center xl:mx-[44px]'>
              Доставка щоденно з 12.00 до 20.00
            </p>
            <Button className='hidden xl:block ml-auto mr-[44px]'>
              <Search size={20} />
            </Button>
            <p className='hidden md:flex md:items-center md:gap-1'>
              <Smartphone size={20} />
              <span>+380 (96) 612 27 20</span>
            </p>
            <p className='hidden xl:block ml-5 mr-[44px]'>
              +380 (96) 612 27 20
            </p>
            <a
              href='https://www.instagram.com/la_pepito.kyiv/'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden xl:flex items-center justify-center size-12 text-white transition-colors duration-300  hover:text-accent'
            >
              <Instagram className='size-7 flex-none' />
            </a>
          </div>
        </div>
      </div>
      <div className='bg-primary md:bg-[transparent] backdrop-blur-sm'>
        <div className='flex justify-between items-center container'>
          <div className='xl:hidden'>
            <BurgerMenu />
          </div>

          <Link
            href='/'
            className='relative w-14 h-14 md:w-20'
          >
            <Image
              src={logoLight.src}
              className='md:hidden'
              color='black'
              fill
              sizes='100%'
              alt='Logo di Pasta La Pepito'
            />
            <Image
              src={logoPrimary.src}
              className='hidden md:block'
              color='black'
              fill
              sizes='100%'
              alt='Logo di Pasta La Pepito'
            />
          </Link>
          <Links />
          <CartButton />
        </div>
      </div>
    </header>
  )
}
