import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
import {
  BooleanInput,
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
} from 'react-admin'

import { categoryService } from '@/entities/category'
import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { QUERY_KEYS } from '@/shared/constants'
import { requiredField, valueRange } from '@/shared/lib/utils/validations'
import { SelectInput } from '../../../../shared/ui/admin/select-input/SelectInput'
import { CustomCreateFormToolbar } from '../../custom-create-form-toolbar'

export const CreateProduct = () => {
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: () => categoryService.getCategories(),
  })

  return (
    <Create resource='dish' className='w-full'>
      <SimpleForm
        defaultValues={{
          price: 0,
          weight: 0,
          volume: 0,
        }}
        toolbar={<CustomCreateFormToolbar />}
      >
        <TextInput source='title' label='Назва' validate={requiredField} />

        <SelectInput
          source='category'
          inputProps={{ validate: [requiredField] }}
          selectProps={{ required: true, disabled: isLoading || !data }}
        >
          <SelectTrigger className='h-12 rounded-none rounded-tl-[4px] rounded-tr-[4px] border-0 border-b border-b-gray-700 bg-gray-300 text-[16px] text-gray-700 transition-colors hover:border-b-[#181818] hover:bg-[#dadada] focus:ring-0 focus:ring-offset-0'>
            <SelectValue placeholder='Оберіть категорію *' />
          </SelectTrigger>
          <SelectContent className='mb-5'>
            {data?.map(item => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectInput>

        <TextInput source='composition' label='Композиція' />
        <div className='flex gap-2'>
          <NumberInput
            source='price'
            label='Ціна'
            min={0}
            format={val => parseInt(val)}
            type='number'
            validate={[requiredField, ...valueRange(1)]}
          />
          <NumberInput
            source='weight'
            min={0}
            label='Вага (грам)'
            format={val => parseInt(val)}
            type='number'
            validate={[...valueRange(0)]}
          />
          <NumberInput
            source='volume'
            type='number'
            min={0}
            format={val => parseInt(val)}
            label="Об'єм (л)"
            validate={[...valueRange(0)]}
          />
        </div>
        <BrandImageInput source='image' validate={requiredField} />
        <BooleanInput source='customizable' label='Кастомізація' />
      </SimpleForm>
    </Create>
  )
}
