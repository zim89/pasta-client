import { OrderForm } from '../../checkout-form/model'
import { CommentField } from './comment-field'
import { ContactFields } from './contact-fields'
import { DeliveryFields } from './delivery-fields'
import { PaymentMethodField } from './payment-method-field'
import { TotalSection } from './total-section'

type Props = {
  form: OrderForm
}

export const DesktopComposition = ({ form }: Props) => {
  return (
    <div className='hidden xl:block'>
      <div className='flex justify-between gap-[142px]'>
        <ContactFields form={form} />
        <div className='flex flex-1 flex-col'>
          <DeliveryFields form={form} />
          <CommentField form={form} />
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <PaymentMethodField form={form} />
        <TotalSection />
      </div>
    </div>
  )
}
