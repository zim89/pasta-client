import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const CartButton = () => {
  return (
    <Button className='flex flex-col text-[0.625rem] text-white'>
      <span>0</span>
      <div className='-mt-[5px]'>
        <ShoppingCart size={24} />
      </div>
    </Button>
  )
}
