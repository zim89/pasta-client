import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  Label,
} from '@/shared/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { DialogProps } from '@radix-ui/react-dialog'
import { AxiosError } from 'axios'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as yup from 'yup'

import { adminService } from '@/entities/admin'

const schema = yup
  .object({
    oldPassword: yup
      .string()
      .min(8, 'Пароль не може бути менше 8 символів')
      .required('Поле не може бути пустим.'),
    newPassword: yup
      .string()
      .min(8, 'Пароль не може бути менше 8 символів')
      .required('Поле не може бути пустим.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'Паролі не співпадають.')
      .min(8, 'Пароль не може бути менше 8 символів')
      .required('Поле не може бути пустим.'),
  })
  .required()

interface Fields {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

export const ChangePasswordModal = (props: DialogProps) => {
  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  })

  const submit: SubmitHandler<Fields> = async data => {
    try {
      await adminService.changePassword({
        newPassword: data.newPassword,
        oldPassword: data.oldPassword,
        repeatNewPassword: data.confirmPassword,
      })

      toast('Успіх!', {
        description: 'Пароль успішно змінено!',
      })

      reset()

      if (props.onOpenChange) props.onOpenChange(false)
    } catch (err) {
      console.error('Error changing password:', err)
      if (
        err instanceof AxiosError &&
        err.response?.data.message === 'wrong old password'
      )
        toast('Помилка', {
          description: 'Невірно введений старий пароль.',
          action: {
            label: 'Відновити пароль',
            onClick: () => {
              if (props.onOpenChange) props.onOpenChange(false)
            },
          },
        })
    }
  }

  return (
    <Dialog {...props}>
      <DialogContent aria-describedby={undefined}>
        <DialogTitle>Зміна паролю</DialogTitle>

        <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-6'>
          <Controller
            name='oldPassword'
            control={control}
            rules={{
              required: { value: true, message: 'Поле не може бути пустим.' },
              minLength: {
                value: 8,
                message: 'Пароль не може бути менше 8 символів.',
              },
            }}
            render={({ field }) => (
              <div className='relative'>
                <Label htmlFor='oldPassword'>Старий пароль</Label>
                <Input
                  id='oldPassword'
                  variant='outlined'
                  type='password'
                  {...field}
                  placeholder='Введіть старий пароль'
                />
                {formState.errors.oldPassword?.message && (
                  <Label variant='error'>
                    {formState.errors.oldPassword.message}
                  </Label>
                )}
              </div>
            )}
          />

          <Controller
            name='newPassword'
            control={control}
            rules={{
              required: { value: true, message: 'Поле не може бути пустим.' },
              minLength: {
                value: 8,
                message: 'Пароль не може бути менше 8 символів.',
              },
            }}
            render={({ field }) => (
              <div className='relative'>
                <Label htmlFor='newPassword'>Новий пароль</Label>
                <Input
                  id='newPassword'
                  variant='outlined'
                  type='password'
                  {...field}
                  placeholder='Введіть новий пароль'
                />
                {formState.errors.newPassword?.message && (
                  <Label variant='error'>
                    {formState.errors.newPassword.message}
                  </Label>
                )}
              </div>
            )}
          />

          <Controller
            name='confirmPassword'
            control={control}
            rules={{
              required: { value: true, message: 'Поле не може бути пустим.' },
              minLength: {
                value: 8,
                message: 'Пароль не може бути менше 8 символів.',
              },
            }}
            render={({ field }) => (
              <div className='relative'>
                <Label htmlFor='confirmPassword'>Підтвердіть пароль</Label>
                <Input
                  id='confirmPassword'
                  variant='outlined'
                  type='password'
                  {...field}
                  placeholder='Підтвердіть новий пароль'
                />
                {formState.errors.confirmPassword?.message && (
                  <Label variant='error'>
                    {formState.errors.confirmPassword.message}
                  </Label>
                )}
              </div>
            )}
          />

          <Button className='rounded-md bg-black py-0 text-white' type='submit'>
            Змінити
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
