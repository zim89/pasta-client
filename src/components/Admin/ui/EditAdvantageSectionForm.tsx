import {
  Edit,
  ImageInput,
  SimpleForm,
  TextInput,
  useEditController
} from 'react-admin'

type Props = {
  id: number
}

export const EditAdvantageSectionForm = ({ id }: Props) => {
  const { record } = useEditController({ id })

  console.log(record)

  return (
    <SimpleForm>
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
  )
}
