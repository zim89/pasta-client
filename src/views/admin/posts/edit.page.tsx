'use client'

import { EditBase, SimpleForm, TextInput, UrlField } from 'react-admin'

import { CustomEditFormToolbar } from '@/features/admin/custom-edit-form-toolbar'
import { AdminUnsavedChangesModal } from '@/shared/ui/admin/admin-unsaved-changes-modal'
import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { requiredField } from '@/shared/lib/utils/validations'

export const EditPost = () => {
  return (
    <EditBase>
      <SimpleForm
        warnWhenUnsavedChanges
        WarnWhenUnsavedChangesComponent={AdminUnsavedChangesModal}
        toolbar={<CustomEditFormToolbar />}
      >
        <div className='p-2'>
          Діюче посилання: <UrlField source='link' />
        </div>
        <TextInput validate={requiredField} source='link' />

        <BrandImageInput validate={requiredField} source='image' />
      </SimpleForm>
    </EditBase>
  )
}
