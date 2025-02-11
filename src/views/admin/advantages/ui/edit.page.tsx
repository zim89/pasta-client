'use client'

import { Edit, SimpleForm, TextInput } from 'react-admin'

import { CustomEditFormToolbar } from '@/features/admin/custom-edit-form-toolbar'
import { AdminUnsavedChangesModal } from '@/shared/ui/admin/admin-unsaved-changes-modal'
import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { noMoreThan, requiredField } from '@/shared/lib/utils/validations'

export const EditAdvantage = () => {
  const match = window.location.hash.match(/(\d)+/)
  const id = match ? Number(match[0]) : null

  if (!id || !Number.isInteger(id)) return

  return (
    <Edit resource='our-advantages' className='w-full'>
      <SimpleForm
        sanitizeEmptyValues
        warnWhenUnsavedChanges
        WarnWhenUnsavedChangesComponent={AdminUnsavedChangesModal}
        toolbar={<CustomEditFormToolbar />}
      >
        <TextInput
          source='title'
          validate={[requiredField, noMoreThan(60)]}
          label='Найменування'
        />

        <TextInput
          source='description'
          validate={[requiredField, noMoreThan(120)]}
          label='Опис'
        />

        <BrandImageInput validate={requiredField} source='image' />
      </SimpleForm>
    </Edit>
  )
}
