import { DeleteButton, SaveButton } from 'react-admin'

export const CustomEditFormToolbar = () => {
  return (
    <div className='flex justify-between p-4'>
      <SaveButton label='Зберегти' />
      <DeleteButton label='Видалити' />
    </div>
  )
}
