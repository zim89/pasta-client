import { AlignLeft } from 'lucide-react'
import Image from 'next/image'
import logo from '@/assets/icons/logo/logo-light.svg'
import { BurgerMenu } from '../burgerMenu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger
} from '../ui/dialog'
import { CartButton } from './ui/CartButton'
import { links } from '@/data/burgerLinks.data'

export const Header = () => {
  return (
    <header className='bg-primary'>
      <p className='bg-primary text-center text-white text-xs py-3 mt-7 md:mt-0'>
        Доставка щоденно з 12.00 до 20.00
      </p>
      <div className='container py-2'>
        <div className='flex justify-between items-center'>
          <div className='lg:hidden'>
            <BurgerMenu />
          </div>

          <div className='relative w-14 h-14 md:w-20'>
            <Image
              src={logo.src}
              layout='fill'
              sizes='100%'
              alt='Logo di Pasta La Pepito'
            />
          </div>
          <CartButton />
        </div>
      </div>
    </header>
  )
}
