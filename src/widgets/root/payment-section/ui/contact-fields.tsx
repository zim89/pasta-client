import { Input } from '@/shared/ui'
import { WithRequiredMark } from '@/shared/ui/with-required-mark'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/common/form'
import { cn } from '@/shared/lib/utils'
import { OrderForm } from '../../checkout-form/model'

type Props = {
  form: OrderForm
}

export const ContactFields = ({ form }: Props) => {
  return (
    <div className='flex w-full flex-col gap-6 rounded-[20px] border border-primary-light px-[10px] py-6 md:max-w-[320px] md:border-0 xl:max-w-[400px]'>
      <h3 className='mb-1 text-[18px]/[23.4px] font-medium md:text-[22px]/[28.6px]'>
        Контакти замовника
      </h3>

      <FormField
        control={form.control}
        name='name'
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel htmlFor='name' className='text-sm font-normal'>
              <WithRequiredMark text="Ім'я" />
            </FormLabel>
            <FormControl className='relative !mt-0'>
              <Input
                id='name'
                {...field}
                className={cn(
                  'placeholder:text-[15px] placeholder:text-gray-500',
                  fieldState.error?.message &&
                    'border-b-danger placeholder:text-opacity-0',
                )}
                placeholder="Ваше ім'я"
              />
            </FormControl>
            <FormMessage className='absolute text-[13px]/[16.9px] text-danger' />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='phone'
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel htmlFor='phone' className='text-sm font-normal'>
              <WithRequiredMark text='Телефон' />
            </FormLabel>
            <FormControl className='relative !mt-0'>
              <Input
                id='phone'
                {...field}
                placeholder='380ХХХХХХХХХ'
                className={cn(
                  'placeholder:text-[15px] placeholder:text-gray-500',
                  fieldState.error?.message &&
                    'border-b-danger placeholder:text-opacity-0',
                )}
                type='tel'
              />
            </FormControl>
            <FormMessage className='absolute text-[13px]/[16.9px] text-danger' />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='email'
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor='email' className='text-sm font-normal'>
              Email
            </FormLabel>
            <FormControl
              style={{
                marginTop: 0,
              }}
            >
              <Input
                id='email'
                {...field}
                placeholder='Ваш email'
                className='placeholder:text-[15px] placeholder:text-gray-500'
                type='email'
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}
