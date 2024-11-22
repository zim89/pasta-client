import { Create, SimpleForm, TextInput } from 'react-admin'

import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { requiredField } from '@/shared/lib/utils/validations'
import { CustomCreateFormToolbar } from '../../custom-create-form-toolbar'

export const CreatePost = () => {
  return (
    <Create className='w-full'>
      <SimpleForm toolbar={<CustomCreateFormToolbar />}>
        <TextInput validate={requiredField} source='link' label='Лінк' />
        <BrandImageInput
          validate={requiredField}
          source='image'
          helperText={false}
        />
      </SimpleForm>
    </Create>
  )
}
