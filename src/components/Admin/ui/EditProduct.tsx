import { Dish } from '@/types/dish.types'
import {
  BooleanInput,
  Edit,
  EditBase,
  NumberInput,
  ReferenceField,
  SimpleForm,
  TextInput,
  useRecordContext
} from 'react-admin'

export const EditProduct = () => {
  const dish = useRecordContext()

  console.log(dish)
  if (!dish) return null

  return (
    <EditBase queryOptions={{ meta: { slug: dish.slug } }}>
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
