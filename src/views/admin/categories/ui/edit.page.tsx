'use client'

import { EditBase, SimpleForm, TextInput } from 'react-admin'

import { CustomEditFormToolbar } from '@/features/admin/custom-edit-form-toolbar'
import { AdminUnsavedChangesModal } from '@/shared/ui/admin/admin-unsaved-changes-modal'
import { noMoreThan, requiredField } from '@/shared/lib/utils/validations'

export const EditCategory = () => {
  return (
    <EditBase>
      <SimpleForm
        warnWhenUnsavedChanges
        WarnWhenUnsavedChangesComponent={AdminUnsavedChangesModal}
        toolbar={<CustomEditFormToolbar />}
      >
        <TextInput
          source='name'
          validate={[requiredField, noMoreThan(60)]}
          label='Найменування'
        />
      </SimpleForm>
    </EditBase>
  )
}
