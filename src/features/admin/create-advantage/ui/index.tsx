import { Create, SimpleForm, TextInput } from 'react-admin'

import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { CustomCreateFormToolbar } from '../../custom-create-form-toolbar'

export const AddAdvantage = () => (
  <Create resource='our-advantages' className='w-full'>
    <SimpleForm toolbar={<CustomCreateFormToolbar />}>
      <TextInput source='title' label='Найменування' />
      <TextInput source='description' label='Опис' />
      <BrandImageInput source='image' />
    </SimpleForm>
  </Create>
)
