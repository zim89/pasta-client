import { ShoppingCart } from 'lucide-react'

export const CartButton = () => {
  return (
    <>
      <ShoppingCart className='size-[30px] stroke-[1.5px] md:hidden' />

      <button className='hidden items-center gap-5 rounded-[20px] border border-primary-lightest/50 bg-white px-8 py-1.5 text-black md:flex'>
        <span className='relative flex h-[34px] items-end'>
          <span className='absolute left-1/2 top-0 -translate-x-1/2 text-xs/none'>
            0
          </span>
          <ShoppingCart className='size-6 stroke-[1.5px]' />
        </span>
        <span className='text-sm/[16.8px]'>0,00 грн.</span>
      </button>
    </>
  )
}
