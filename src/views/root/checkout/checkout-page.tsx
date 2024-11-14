import { PageHeading } from '@/shared/ui'

import { OrderForm } from '@/widgets/root/checkout-form'
import { OrderSection } from '@/widgets/root/checkout-form/ui/order-section'
import { PickupOrderForm } from '@/widgets/root/pickup-order'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/ui/common/tabs'
import { ShowError } from './ui/ShowError'

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
            <PickupOrderForm ordersSlot={<OrderSection />} />
          </TabsContent>
        </Tabs>
      </div>
      <ShowError />
    </div>
  )
}
