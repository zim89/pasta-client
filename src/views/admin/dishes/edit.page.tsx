'use client'

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
import {
  BooleanInput,
  EditBase,
  NumberInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from 'react-admin'

import { CustomEditFormToolbar } from '@/features/admin/custom-edit-form-toolbar'
import { categoryService } from '@/entities/category'
import { AdminUnsavedChangesModal } from '@/shared/ui/admin/admin-unsaved-changes-modal'
import { BrandImageInput } from '@/shared/ui/admin/brand-image-input'
import { SelectInput } from '@/shared/ui/admin/select-input/SelectInput'
import { QUERY_KEYS } from '@/shared/constants'
import {
  noMoreThan,
  requiredField,
  valueRange,
} from '@/shared/lib/utils/validations'

export const EditProduct = () => {
  const { isLoading, data } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: () => categoryService.getCategories(),
  })

  const dish = useRecordContext()

  if (!dish) return null

  return (
    <EditBase>
      <SimpleForm
        warnWhenUnsavedChanges
        WarnWhenUnsavedChangesComponent={AdminUnsavedChangesModal}
        toolbar={<CustomEditFormToolbar />}
      >
        <TextInput
          source='title'
          validate={[requiredField, noMoreThan(100)]}
          label='Назва'
        />
        <NumberInput
          source='weight'
          label='Вага'
          format={val => parseInt(val)}
          type='number'
          validate={[...valueRange(0)]}
        />
        <NumberInput
          source='volume'
          label="Об'єм"
          format={val => parseInt(val)}
          type='number'
          validate={[...valueRange(0)]}
        />
        <NumberInput
          source='price'
          validate={[requiredField, ...valueRange(1)]}
          label='Ціна'
        />
        <TextInput source='composition' label='Композиція' />
        <BrandImageInput source='image' validate={[requiredField]} />

        <SelectInput
          source='category.name'
          inputProps={{ validate: [requiredField, noMoreThan(60)] }}
          selectProps={{ required: true, disabled: isLoading || !data }}
        >
          <SelectTrigger className='mt-5 h-12 rounded-none rounded-tl-[4px] rounded-tr-[4px] border-0 border-b border-b-gray-700 bg-gray-300 text-[16px] text-gray-700 transition-colors hover:border-b-[#181818] hover:bg-[#dadada] focus:ring-0 focus:ring-offset-0'>
            <SelectValue placeholder='Категорія *' />
          </SelectTrigger>
          <SelectContent className='mb-5'>
            {data?.map(item => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectInput>

        <BooleanInput source='isNew' label='Новинка?' defaultValue={true} />
        <BooleanInput
          source='customizable'
          label='Кастомізується?'
          defaultValue={true}
        />
      </SimpleForm>
    </EditBase>
  )
}
