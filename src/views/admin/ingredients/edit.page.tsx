'use client'

import { EditBase, NumberInput, SimpleForm, TextInput } from 'react-admin'

import { CustomEditFormToolbar } from '@/features/admin/custom-edit-form-toolbar'
import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'

export const EditIngredient = () => {
  return (
    <EditBase>
      <SimpleForm warnWhenUnsavedChanges toolbar={<CustomEditFormToolbar />}>
        <TextInput source='name' />
        <NumberInput source='price' />
        <NumberInput source='weight' />
        <BrandImageInput source='image' />
      </SimpleForm>
    </EditBase>
  )
}
