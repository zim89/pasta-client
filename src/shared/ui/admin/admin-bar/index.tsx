import { useContext } from 'react'
import { ModalContext } from '@/shared/context/admin-change-password-modal'
import { LogOut, RectangleEllipsis } from 'lucide-react'
import { AppBar, useLogout, UserMenu, useUserMenu } from 'react-admin'

import { Button } from '../../common'

type PasswordChangeMenuItemProps = {
  open: boolean
  setOpen: (value: boolean) => void
  handleClick: () => void
}

const PasswordChangeMenuItem = ({
  handleClick,
}: PasswordChangeMenuItemProps) => {
  return (
    <Button
      onClick={() => {
        handleClick()
      }}
      variant='plain'
      className='flex gap-3 rounded-none text-base hover:bg-black hover:bg-opacity-5'
    >
      <RectangleEllipsis size={16} />
      <span>Змінити пароль</span>
    </Button>
  )
}

const UserMenuListOptions = () => {
  const logout = useLogout()
  const menu = useUserMenu()
  const { handleChange, opened } = useContext(ModalContext)

  const handleClick = () => {
    menu?.onClose()
    handleChange(true)
  }

  return (
    <>
      <PasswordChangeMenuItem
        handleClick={handleClick}
        open={opened}
        setOpen={handleChange}
      />

      <Button
        variant='plain'
        className='flex w-full justify-start gap-3 rounded-none text-base hover:bg-black hover:bg-opacity-5'
        onClick={logout}
      >
        <LogOut size={16} />
        <span>Вийти</span>
      </Button>
    </>
  )
}

export const AdminAppBar = () => {
  return (
    <AppBar
      className='z-50'
      userMenu={
        <UserMenu>
          <UserMenuListOptions />
        </UserMenu>
      }
    >
      <p className='mr-auto'>Pasta La Pepito Admin</p>
    </AppBar>
  )
}
