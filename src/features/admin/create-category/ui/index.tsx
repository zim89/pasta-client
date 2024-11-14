import { Create, SimpleForm, TextInput } from 'react-admin'

import { CustomCreateFormToolbar } from '../../custom-create-form-toolbar'

export const CreateCategory = () => {
  return (
    <Create className='w-full'>
      <SimpleForm toolbar={<CustomCreateFormToolbar />}>
        <TextInput source='name' label='Назва категорії' />
      </SimpleForm>
    </Create>
  )
}
