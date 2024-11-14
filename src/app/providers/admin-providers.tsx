import { AdminChangePasswordModalProvider } from '@/shared/context/admin-change-password-modal'

type Props = {
  children: React.ReactNode
}

export const AdminProviders = ({ children }: Props) => {
  return (
    <AdminChangePasswordModalProvider>
      {children}
    </AdminChangePasswordModalProvider>
  )
}
