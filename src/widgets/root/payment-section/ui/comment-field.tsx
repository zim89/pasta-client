import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Textarea,
} from '@/shared/ui'

import { OrderForm } from '@/widgets/root/checkout-form/model'

type Props = {
  form: OrderForm
}

export const CommentField = ({ form }: Props) => {
  return (
    <FormField
      control={form.control}
      name='comment'
      render={({ field }) => (
        <FormItem className='px-[10px] xl:mt-11'>
          <FormLabel className='text-sm font-normal'>Ваш коментар</FormLabel>
          <FormControl
            style={{
              marginTop: 0,
            }}
          >
            <Textarea
              {...field}
              placeholder='Ваш коментар до замовлення'
              className='placelder:text-[15px] max-w-[718px] resize-none rounded-none border-0 border-b border-b-gray-500 px-0 shadow-none outline-none placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 xl:pb-5 xl:pt-4'
              style={{
                backgroundColor: 'transparent',
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
