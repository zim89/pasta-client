import {
  EditBase,
  ImageInput,
  NumberInput,
  SimpleForm,
  TextInput
} from 'react-admin'

export const EditIngredient = () => {
  return (
    <EditBase>
      <SimpleForm>
        <TextInput source='name' />
        <NumberInput source='price' />
        <NumberInput source='weight' />
        <ImageInput source='image' />
      </SimpleForm>
    </EditBase>
  )
}
