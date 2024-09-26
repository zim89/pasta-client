import {
  Create,
  ImageInput,
  NumberInput,
  SimpleForm,
  TextInput,
} from 'react-admin'

import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { CustomCreateFormToolbar } from '../../custom-create-form-toolbar'

export const CreateIngredient = () => {
  return (
    <Create className='w-full'>
      <SimpleForm toolbar={<CustomCreateFormToolbar />}>
        <TextInput source='name' label='Назва' />
        <NumberInput source='price' label='Ціна' />
        <NumberInput source='weight' label='Вага' />
        <BrandImageInput source='image' />
      </SimpleForm>
    </Create>
  )
}
