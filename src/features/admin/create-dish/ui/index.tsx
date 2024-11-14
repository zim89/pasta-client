import {
  BooleanInput,
  Create,
  SimpleForm,
  TextInput,
  useUnique,
} from 'react-admin'

import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { CustomCreateFormToolbar } from '../../custom-create-form-toolbar'

export const CreateProduct = () => {
  const unique = useUnique()

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
        <TextInput source='title' label='Назва' validate={unique()} />
        <TextInput source='type' label='Тип' />
        <TextInput source='composition' label='Композиція' />
        <div className='flex gap-2'>
          <TextInput source='price' label='Ціна' />
          <TextInput source='weight' label='Вага (грам)' />
          <TextInput source='volume' label="Об'єм (л)" />
        </div>
        <BrandImageInput source='image' />
        <BooleanInput source='customizable' label='Кастомізація' />
      </SimpleForm>
    </Create>
  )
}
