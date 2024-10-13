'use client'

import { EditBase, NumberInput, SimpleForm, TextInput } from 'react-admin'

import { CustomEditFormToolbar } from '@/features/admin/custom-edit-form-toolbar'
import { AdminUnsavedChangesModal } from '@/shared/ui/admin/admin-unsaved-changes-modal'
import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'

export const EditIngredient = () => {
  return (
    <EditBase>
      <SimpleForm
        warnWhenUnsavedChanges
        WarnWhenUnsavedChangesComponent={AdminUnsavedChangesModal}
        toolbar={<CustomEditFormToolbar />}
      >
        <TextInput source='name' />
        <NumberInput source='price' />
        <NumberInput source='weight' />
        <BrandImageInput source='image' />
      </SimpleForm>
    </EditBase>
  )
}
