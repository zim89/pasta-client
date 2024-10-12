import { PageHeading, PinIcon } from '@/shared/ui'
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
              <div className='mr-auto max-h-min w-full flex-col rounded-[20px] border border-primary-light border-opacity-50 px-[10px] py-6 md:max-w-[250px] md:border-0 md:p-0'>
                <h3 className='mb-[18px] text-[18px]/[23.4px] font-medium xl:text-[26px]/[31.47px]'>
                  Адреса ресторану
                </h3>
                <p className='inline-flex w-full items-center gap-[6px] border-b border-b-primary-light py-[10px] text-base/[20.8px] text-primary-light'>
                  <PinIcon /> <span>Київ</span>
                </p>
                <p className='mt-2'>вул. Еспланадна, буд. 34/2</p>
              </div>
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
