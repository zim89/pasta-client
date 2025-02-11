'use client'

import { EditBase, NumberInput, SimpleForm, TextInput } from 'react-admin'

import { CustomEditFormToolbar } from '@/features/admin/custom-edit-form-toolbar'
import { AdminUnsavedChangesModal } from '@/shared/ui/admin/admin-unsaved-changes-modal'
import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { noMoreThan, requiredField } from '@/shared/lib/utils/validations'

export const EditIngredient = () => {
  return (
    <EditBase>
      <SimpleForm
        warnWhenUnsavedChanges
        WarnWhenUnsavedChangesComponent={AdminUnsavedChangesModal}
        toolbar={<CustomEditFormToolbar />}
      >
        <TextInput
          source='label'
          title='Назва'
          label='Назва'
          validate={[requiredField, noMoreThan(60)]}
        />
        <NumberInput
          source='price'
          title='Ціна'
          label='Ціна'
          min={0}
          validate={requiredField}
        />
        <NumberInput
          source='weight'
          title='Вага'
          label='Вага'
          min={0}
          validate={requiredField}
        />
        <BrandImageInput source='image' validate={requiredField} />
      </SimpleForm>
    </EditBase>
  )
}
