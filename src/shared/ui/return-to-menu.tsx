import Link from 'next/link'

import { APP_PAGES } from '../constants'

export const ReturnToMenu = () => {
  return (
    <Link
      href={APP_PAGES.MENU}
      className='outline-link block w-full text-base md:w-80 xl:w-[413px]'
    >
      Повернутися до меню
    </Link>
  )
}
