'use client'

import { EditBase, SimpleForm, TextInput, UrlField } from 'react-admin'

import { CustomEditFormToolbar } from '@/features/admin/custom-edit-form-toolbar'
import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'

export const EditPost = () => {
  return (
    <EditBase>
      <SimpleForm warnWhenUnsavedChanges toolbar={<CustomEditFormToolbar />}>
        <div className='p-2'>
          Діюче посилання: <UrlField source='link' />
        </div>
        <TextInput source='link' />

        <BrandImageInput source='image' />
      </SimpleForm>
    </EditBase>
  )
}
