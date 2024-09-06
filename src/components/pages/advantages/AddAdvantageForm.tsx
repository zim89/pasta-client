import { Create, ImageInput, SimpleForm, TextInput } from 'react-admin'

export const AddAdvantageForm = () => (
  <Create
    resource='our-advantages'
    className='w-full'
  >
    <SimpleForm>
      <TextInput
        source='title'
        label='Найменування'
      />

      <TextInput
        source='description'
        label='Опис'
      />

      <ImageInput
        source='image'
        label='Постер'
      />
    </SimpleForm>
  </Create>
)
