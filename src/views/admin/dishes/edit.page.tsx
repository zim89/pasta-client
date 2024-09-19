'use client'

import {
  BooleanInput,
  EditBase,
  NumberInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from 'react-admin'

import { CustomEditFormToolbar } from '@/features/admin/custom-edit-form-toolbar'
import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'

export const EditProduct = () => {
  const dish = useRecordContext()

  if (!dish) return null

  return (
    <EditBase>
      <SimpleForm warnWhenUnsavedChanges toolbar={<CustomEditFormToolbar />}>
        <TextInput source='title' label='Назва' />
        <TextInput source='weight' label='Вага' />
        <TextInput source='volume' label='Обсяг' />
        <NumberInput source='price' label='Ціна' />
        <TextInput source='composition' label='Композиція' />
        <BrandImageInput source='image' />
        <TextInput source='type' label='Категорія' />
        <BooleanInput source='isHit' label='Хіт?' />
        <BooleanInput source='isNew' label='Новинка?' />
      </SimpleForm>
    </EditBase>
  )
}
