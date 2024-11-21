import { Create, SimpleForm, TextInput } from 'react-admin'

import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { noMoreThan, requiredField } from '@/shared/lib/utils/validations'
import { CustomCreateFormToolbar } from '../../custom-create-form-toolbar'

export const AddAdvantage = () => (
  <Create resource='our-advantages' className='w-full'>
    <SimpleForm toolbar={<CustomCreateFormToolbar />}>
      <TextInput
        validate={[requiredField, noMoreThan(60)]}
        source='title'
        label='Найменування'
      />
      <TextInput
        validate={[requiredField, noMoreThan(120)]}
        source='description'
        label='Опис'
      />
      <BrandImageInput validate={[requiredField]} source='image' />
    </SimpleForm>
  </Create>
)
