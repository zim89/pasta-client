import { BooleanInput, NumberInput, SimpleForm, TextInput } from 'react-admin'

export const EditProduct = () => {
  return (
    <SimpleForm>
      <TextInput source='id' />
      <TextInput source='title' />
      <TextInput source='slug' />
      <TextInput source='weight' />
      <TextInput source='volume' />
      <TextInput source='composition' />
      <NumberInput source='price' />
      <TextInput source='image' />
      <TextInput source='type' />
      <BooleanInput source='isHit' />
      <BooleanInput source='isNew' />
    </SimpleForm>
  )
}
