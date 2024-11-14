import { DesktopComposition } from './desktop-composition'
import { MobileComposition } from './mobile-composition'
import { TabletComposition } from './tablet-composition'

type Props = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  form: any
}

export const PaymentSection = ({ form }: Props) => {
  return (
    <>
      <MobileComposition form={form} />
      <TabletComposition form={form} />
      <DesktopComposition form={form} />
    </>
  )
}
