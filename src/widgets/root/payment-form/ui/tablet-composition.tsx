import { PaymentForm } from '../model/types'
import { CommentSection } from './comment-section'
import { ContactSection } from './contact-section'
import { DeliverySection } from './delivery-section'
import { PaymentSection } from './payment-section'
import { TotalSection } from './total-section'

type Props = {
  form: PaymentForm
}

export const TabletComposition = ({ form }: Props) => {
  return (
    <div className='hidden md:block xl:hidden'>
      <div className='flex justify-between'>
        <ContactSection form={form} />
        <DeliverySection form={form} />
      </div>

      <div className='mb-9'>
        <CommentSection form={form} />
      </div>

      <div className='flex items-center justify-between'>
        <PaymentSection form={form} />
        <TotalSection />
      </div>
    </div>
  )
}
