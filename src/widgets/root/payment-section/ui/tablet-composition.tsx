import { CommentField } from './comment-field'
import { ContactFields } from './contact-fields'
import { DeliveryFields } from './delivery-fields'
import { PaymentMethodField } from './payment-method-field'
import { TotalSection } from './total-section'

type Props = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  form: any
}

export const TabletComposition = ({ form }: Props) => {
  return (
    <div className='hidden md:block xl:hidden'>
      <div className='flex justify-between'>
        <ContactFields form={form} />
        <DeliveryFields form={form} />
      </div>

      <div className='mb-9'>
        <CommentField form={form} />
      </div>

      <div className='flex items-center justify-between'>
        <PaymentMethodField form={form} />
        <TotalSection />
      </div>
    </div>
  )
}
