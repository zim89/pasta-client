import { Create, SimpleForm, TextInput } from 'react-admin'

import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { CustomCreateFormToolbar } from '../../custom-create-form-toolbar'

export const CreatePost = () => {
  return (
    <Create className='w-full'>
      <SimpleForm toolbar={<CustomCreateFormToolbar />}>
        <TextInput source='link' label='Лінк' />
        <BrandImageInput source='image' helperText={false} />
      </SimpleForm>
    </Create>
  )
}
