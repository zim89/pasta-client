import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin'

import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { noMoreThan, requiredField } from '@/shared/lib/utils/validations'
import { CustomCreateFormToolbar } from '../../custom-create-form-toolbar'

export const CreateIngredient = () => {
  return (
    <Create className='w-full'>
      <SimpleForm toolbar={<CustomCreateFormToolbar />}>
        <TextInput
          source='label'
          validate={[requiredField, noMoreThan(60)]}
          label='Мітка'
          placeholder='Коріандр'
        />
        <NumberInput
          source='price'
          validate={[requiredField]}
          label='Ціна'
          min={0}
        />
        <NumberInput
          source='weight'
          validate={[requiredField]}
          label='Вага'
          min={0}
        />
        <BrandImageInput validate={[requiredField]} source='image' />
      </SimpleForm>
    </Create>
  )
}
