import { OrderControllers } from '@/shared/ui/order-controllers'

import { DesktopComposition } from './desktop-composition'
import { MobileComposition } from './mobile-composition'
import { TabletComposition } from './tablet-composition'

type Props = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  form: any
  proceedOrderSlot: React.ReactNode
}

export const PaymentSection = ({ form, proceedOrderSlot }: Props) => {
  return (
    <>
      <MobileComposition form={form} />
      <TabletComposition form={form} />
      <DesktopComposition form={form} />
      <OrderControllers
        className='mt-10 md:mt-[60px]'
        proceedOrderSlot={proceedOrderSlot}
      />
    </>
  )
}
