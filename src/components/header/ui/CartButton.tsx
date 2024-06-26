import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const CartButton = () => {
  return (
    <Button className='flex flex-col md:flex-row md:gap-5 md:px-8 text-[0.625rem] rounded-[18px] text-white md:text-black md:bg-white md:border md:border-primary md:hover:opacity-90'>
      <div>
        <span>0</span>

        <div className='-mt-[5px]'>
          <ShoppingCart size={24} />
        </div>
      </div>
      <span className='hidden md:inline text-sm'>00,00 грн</span>
    </Button>
  )
}
