import Link from 'next/link'
import { APP_PAGES } from '@/shared/config/pages-url.config'

export const MenuLink = () => {
  return (
    <div className='mt-6 flex justify-center md:mt-8 md:justify-end xl:mt-10'>
      <Link
        className='inline-block border-b border-b-primary-light text-base/[20.8px] md:text-lg/[23.4px]'
        href={APP_PAGES.MENU}
      >
        Подивитися все меню
      </Link>
    </div>
  )
}
