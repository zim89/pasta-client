'use client'

import {
  BooleanInput,
  EditBase,
  NumberInput,
  SimpleForm,
  TextInput,
  useRecordContext
} from 'react-admin'

export const EditProduct = () => {
  const dish = useRecordContext()

  if (!dish) return null

  return (
    <EditBase>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput source='weight' />
        <TextInput source='volume' />
        <TextInput source='composition' />
        <NumberInput source='price' />
        <TextInput source='image' />
        <TextInput source='type' />
        <BooleanInput source='isHit' />
        <BooleanInput source='isNew' />
      </SimpleForm>
    </EditBase>
  )
}
