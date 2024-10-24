import Link from 'next/link'

export const PaymentLink = () => {
  return (
    <Link
      href='/payment?pickup=true'
      className='w-full rounded-[30px] bg-primary-light py-[12.5px] text-center text-[18px]/[23.4px] text-white md:max-w-80 xl:max-w-[413px]'
    >
      Оформити замовлення
    </Link>
  )
}
