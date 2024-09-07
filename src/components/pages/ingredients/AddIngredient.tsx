import {
  Create,
  ImageInput,
  NumberInput,
  SimpleForm,
  TextInput
} from 'react-admin'

export const AddIngredient = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source='name' />
        <NumberInput source='price' />
        <NumberInput source='weight' />
        <ImageInput source='image' />
      </SimpleForm>
    </Create>
  )
}
