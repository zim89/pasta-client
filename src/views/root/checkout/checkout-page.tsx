import { PageHeading } from '@/shared/ui'
import { PickupAddress } from '@/shared/ui/pickup-address'
import { ReturnToMenu } from '@/shared/ui/return-to-menu'

import { OrderForm } from '@/widgets/root/checkout-form'
import { OrderControllers } from '@/widgets/root/checkout-form/ui/order-controllers'
import { OrderSection } from '@/widgets/root/checkout-form/ui/order-section'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/ui/common/tabs'
import { PaymentLink } from './ui/PaymentLink'

export const CheckoutPage = () => {
  return (
    <div className='page-wrap'>
      <div className='container'>
        <PageHeading title='Кошик' />
        <Tabs defaultValue='delivery'>
          <TabsList className='grid w-full grid-cols-2 rounded-[30px] bg-primary-lighter text-base/[20.8px] md:text-[18px]/[23.4px]'>
            <TabsTrigger className='rounded-[30px]' value='delivery'>
              Доставка
            </TabsTrigger>
            <TabsTrigger className='rounded-[30px]' value='pickup'>
              Самовивіз
            </TabsTrigger>
          </TabsList>
          <TabsContent value='delivery'>
            <OrderForm />
          </TabsContent>
          <TabsContent value='pickup'>
            <div className='my-12 flex flex-col gap-8 md:flex-row md:gap-[62px] xl:gap-[180px]'>
              <PickupAddress />
              <div className='xl:w-[700px]'>
                <OrderSection />
              </div>
            </div>
            <OrderControllers
              proceedOrderSlot={<PaymentLink />}
              returnToMenuSlot={<ReturnToMenu />}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
