import { useSearchParams } from 'next/navigation'
import { BrandSelect } from '@/shared/ui/brand-select'

import { OrderForm } from '@/widgets/root/checkout-form/model'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/common/form'
import { cn } from '@/shared/lib/utils'
import { calculateDays, calculateTime, isItTimeString } from '../lib'

type Props = {
  form: OrderForm
}

export const DeliveryFields = ({ form }: Props) => {
  const params = useSearchParams()
  const isPickup = !!params.get('pickup')

  const { deliveryDate } = form.getValues()

  const timeFrames =
    deliveryDate && isItTimeString(deliveryDate)
      ? calculateTime(deliveryDate)
      : calculateTime()

  console.log(isItTimeString(deliveryDate))

  return (
    <div className='flex w-full flex-col gap-6 rounded-[20px] border border-primary-light px-[10px] py-6 md:max-w-[320px] md:border-0 xl:max-w-full'>
      <h3 className='mb-1 text-[18px]/[23.4px] font-medium md:text-[22px]/[28.6px]'>
        Час доставки
      </h3>

      <div className='flex flex-1 flex-col xl:flex-row xl:justify-between xl:gap-[138px]'>
        <FormField
          control={form.control}
          name='deliveryDate'
          render={({ field }) => (
            <FormItem className='xl:flex-1'>
              <FormLabel className='text-sm font-normal'>Дата</FormLabel>
              <FormControl
                style={{
                  marginTop: 0,
                }}
              >
                <BrandSelect
                  data={calculateDays()}
                  placeholder='Оберіть дату'
                  onValueChange={e => field.onChange(e)}
                  value={field.value}
                  classNames={{
                    item: {
                      root: 'py-[10.5px]',
                    },
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          disabled={isPickup}
          control={form.control}
          name='deliveryTime'
          render={({ field, fieldState }) => (
            <FormItem className='xl:flex-1'>
              <FormLabel className='text-sm font-normal'>Час</FormLabel>
              <FormControl
                style={{
                  marginTop: 0,
                }}
              >
                <BrandSelect
                  data={
                    timeFrames.length
                      ? deliveryDate === 'today'
                        ? timeFrames.slice(2)
                        : timeFrames
                      : [
                          {
                            label: 'Заклад зачинений.',
                            value: 'UNAVAILABLE',
                          },
                        ]
                  }
                  classNames={{
                    trigger: {
                      root: cn(
                        fieldState.error?.message &&
                          'border-b-danger text-background',
                      ),
                    },
                    item: {
                      root: 'py-[10.5px]',
                    },
                  }}
                  placeholder='Оберіть час'
                  onValueChange={e => field.onChange(e)}
                  value={field.value}
                  disabled={isPickup}
                />
              </FormControl>
              <FormMessage className='text-[13px]/[16.9px] text-danger' />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
