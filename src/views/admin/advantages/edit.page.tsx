'use client'

import { Edit, SimpleForm, TextInput } from 'react-admin'

import { CustomEditFormToolbar } from '@/features/admin/custom-edit-form-toolbar'
import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'

export const EditAdvantage = () => (
  <Edit resource='our-advantages' className='w-full'>
    <SimpleForm warnWhenUnsavedChanges toolbar={<CustomEditFormToolbar />}>
      <TextInput source='title' label='Найменування' />

      <TextInput source='description' label='Опис' />

      <BrandImageInput source='image' />
    </SimpleForm>
  </Edit>
)