import { ReturnToMenu } from '@/shared/ui/return-to-menu'

import { OrderForm } from '@/widgets/root/checkout-form'
import { ProceedOrder } from '@/features/root/proceed-order'

export const CheckoutPage = () => {
  return (
    <div className='page-wrap'>
      <div className='container'>
        <OrderForm
          proceedOrderSlot={<ProceedOrder />}
          returnToMenuSlot={<ReturnToMenu />}
        />
      </div>
    </div>
  )
}
