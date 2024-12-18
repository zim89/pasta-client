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

type Props = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  form: any
}

export const DeliverySection = ({ form }: Props) => {
  return (
    <div className='flex w-full max-w-[400px] flex-col gap-7 rounded-[20px] border border-primary-light px-[10px] py-6 md:border-0 md:py-0'>
      <h3 className='mb-1 text-[18px]/[23.4px] font-medium xl:text-center xl:text-[26px]/[31.47px]'>
        Адреса доставки
      </h3>

      <FormField
        control={form.control}
        name='city'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-sm font-normal'>Місто</FormLabel>
            <FormControl
              style={{
                marginTop: 0,
              }}
            >
              <Input id='city' className='text-gray-500' {...field} disabled />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='street'
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel className='text-sm font-normal'>
              <WithRequiredMark text='Вулиця' />
            </FormLabel>
            <FormControl className='relative !mt-0'>
              <Input
                id='street'
                className={cn(
                  fieldState.error?.message &&
                    'border-b-danger placeholder:text-opacity-0',
                )}
                {...field}
                placeholder='Введіть вулицю'
              />
            </FormControl>
            <FormMessage className='absolute text-[13px]/[16.9px] text-danger' />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='buildingNumber'
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel className='text-sm font-normal'>
              <WithRequiredMark text='Номер будинку' />
            </FormLabel>
            <FormControl className='relative !mt-0'>
              <Input
                {...field}
                className={cn(
                  fieldState.error?.message &&
                    'border-b-danger placeholder:text-opacity-0',
                )}
                placeholder='Введіть номер будинку'
                required
              />
            </FormControl>
            <FormMessage className='absolute text-[13px]/[16.9px] text-danger' />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='entrance'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-sm font-normal'>{`Під'їзд`}</FormLabel>
            <FormControl
              style={{
                marginTop: 0,
              }}
            >
              <Input {...field} placeholder="Введіть номер під'їзду" />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='appartmentHouse'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-sm font-normal'>
              Номер квартири
            </FormLabel>
            <FormControl
              style={{
                marginTop: 0,
              }}
            >
              <Input {...field} placeholder='Введіть номер квартири' />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='story'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-sm font-normal'>Поверх</FormLabel>
            <FormControl
              style={{
                marginTop: 0,
              }}
            >
              <Input {...field} placeholder='Введіть номер поверху' />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='intercom'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-sm font-normal'>Код домофону</FormLabel>
            <FormControl
              style={{
                marginTop: 0,
              }}
            >
              <Input {...field} placeholder='Введіть код домофону' />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}
