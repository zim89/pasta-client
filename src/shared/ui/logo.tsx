import Image from 'next/image'
import Link from 'next/link'

import logoLight from '@/shared/assets/icons/logo/logo-light.svg'
import logoPrimary from '@/shared/assets/icons/logo/logo-primary.svg'

export const Logo = () => {
  return (
    <Link href='/' className='py-2 md:py-0'>
      {/* Mobile logo */}
      <Image
        src={logoLight.src}
        className='ml-4 md:hidden'
        width={54.94}
        height={58.04}
        alt='Logo di Pasta La Pepito'
      />
      {/* Tablet/Laptop logo */}
      <Image
        src={logoPrimary.src}
        className='hidden md:block'
        width={74}
        height={82}
        alt='Logo di Pasta La Pepito'
      />
    </Link>
  )
}
