import { Dispatch, SetStateAction, useState } from 'react'
import { LogOut, RectangleEllipsis } from 'lucide-react'
import { AppBar, useLogout, UserMenu, useUserMenu } from 'react-admin'

import { ChangePasswordModal } from '@/features/admin/change-password-modal'
import { Button } from '../../common'

type PasswordChangeMenuItemProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  handleClick: () => void
}

const PasswordChangeMenuItem = ({
  open,
  setOpen,
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
  const [modalOpened, setModalOpened] = useState(false)

  const handleClick = () => {
    setModalOpened(true)
  }

  const handleOpenChange = (value: boolean) => {
    !value && menu?.onClose()
    setModalOpened(value)
  }

  return (
    <>
      <PasswordChangeMenuItem
        handleClick={handleClick}
        open={modalOpened}
        setOpen={setModalOpened}
      />
      <ChangePasswordModal
        modal
        open={modalOpened}
        onOpenChange={handleOpenChange}
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
