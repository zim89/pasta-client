import { PaymentForm } from '../model/types'
import { ContactSection } from './contact-section'
import { DeliverySection } from './delivery-section'
import { PaymentSection } from './payment-section'
import { TotalSection } from './total-section'

type Props = {
  form: PaymentForm
}

export const MobileComposition = ({ form }: Props) => {
  return (
    <div className='flex flex-col gap-8 md:hidden'>
      <ContactSection form={form} />
      <DeliverySection form={form} />
      <PaymentSection form={form} />
      <TotalSection />
    </div>
  )
}
