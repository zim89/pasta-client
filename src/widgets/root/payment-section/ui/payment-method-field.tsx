import { Label, RadioGroup, RadioGroupItem } from '@/shared/ui'

import { OrderForm } from '@/widgets/root/checkout-form/model'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/common/form'

type Props = {
  form: OrderForm
}

export const PaymentMethodField = ({ form }: Props) => {
  return (
    <div className='flex flex-col gap-6 rounded-[20px] border border-primary-light px-[10px] py-6 md:border-0'>
      <h3 className='mb-1 text-[18px]/[23.4px] font-medium md:text-[22px]/[28.6px]'>
        Тип оплати
      </h3>

      <FormField
        control={form.control}
        name='paymentMethod'
        render={({ field }) => (
          <FormItem>
            <FormControl
              style={{
                marginTop: 0,
              }}
            >
              <RadioGroup required defaultValue={field.value}>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem {...field} id='card' required />
                  <Label htmlFor='card'>Карткою онлайн</Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
