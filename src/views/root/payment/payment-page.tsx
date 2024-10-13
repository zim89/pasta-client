import { PageHeading } from '@/shared/ui'

import { PaymentForm } from '@/widgets/root/payment-form/ui/payment-form'

export const PaymentPage = () => {
  return (
    <div className='page-wrap'>
      <div className='container'>
        <PageHeading title='Оплата замовлення' />
        <PaymentForm />
      </div>
    </div>
  )
}
