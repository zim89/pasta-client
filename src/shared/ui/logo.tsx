import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/shared/lib/utils'
import logoLight from '@/shared/assets/icons/logo/logo-light.svg'
import logoPrimary from '@/shared/assets/icons/logo/logo-primary.svg'
import { WithBlock } from './with-block'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <WithBlock>
      <Link href='/' className={cn(className)}>
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
    </WithBlock>
  )
}
