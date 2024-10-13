import Link from 'next/link'

export const ReturnToMenu = () => {
  return (
    <Link
      href='/menu'
      className='outline-link block w-full text-base md:w-80 xl:w-[413px]'
    >
      Повернутись до меню
    </Link>
  )
}
