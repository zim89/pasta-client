import { PaymentForm } from '../model/types'
import { CommentSection } from './comment-section'
import { ContactSection } from './contact-section'
import { DeliverySection } from './delivery-section'
import { PaymentSection } from './payment-section'
import { TotalSection } from './total-section'

type Props = {
  form: PaymentForm
}

export const DesktopComposition = ({ form }: Props) => {
  return (
    <div className='hidden xl:block'>
      <div className='flex justify-between gap-[142px]'>
        <ContactSection form={form} />
        <div className='flex flex-1 flex-col'>
          <DeliverySection form={form} />
          <CommentSection form={form} />
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <PaymentSection form={form} />
        <TotalSection />
      </div>
    </div>
  )
}
