import { ContactFields } from './contact-fields'
import { DeliveryFields } from './delivery-fields'
import { PaymentMethodField } from './payment-method-field'
import { TotalSection } from './total-section'

type Props = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  form: any
}

export const MobileComposition = ({ form }: Props) => {
  return (
    <div className='flex flex-col gap-8 md:hidden'>
      <ContactFields form={form} />
      <DeliveryFields form={form} />
      <PaymentMethodField form={form} />
      <TotalSection />
    </div>
  )
}
