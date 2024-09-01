import { X } from 'lucide-react'
import { Create, ImageInput, SimpleForm, TextInput } from 'react-admin'
import { DialogClose } from '@/components/ui/dialog'

export const AddForm = () => (
  <Create resource='our-advantages'>
    <SimpleForm>
      <DialogClose className='ml-auto'>
        <X size={16} />
      </DialogClose>
      <TextInput
        source='title'
        label='Найменування'
      />
      <TextInput
        source='description'
        label='Опис'
      />
      <ImageInput
        source='image'
        label='Постер'
      />
    </SimpleForm>
  </Create>
)
