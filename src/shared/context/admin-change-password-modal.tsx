import { createContext, useCallback, useState } from 'react'

type ModalContext = {
  opened: boolean
  handleChange: (value: boolean) => void
}

const defaultModalValues: ModalContext = {
  opened: false,
  handleChange: () => {},
}

export const ModalContext = createContext<ModalContext>(defaultModalValues)

type ModalProviderProps = {
  children: React.ReactNode
}

export const AdminChangePasswordModalProvider = ({
  children,
}: ModalProviderProps) => {
  const [opened, setOpened] = useState(false)

  const handleChange = useCallback(
    (value: boolean) => {
      setOpened(value)
    },
    [opened, setOpened],
  )

  return (
    <ModalContext.Provider value={{ opened, handleChange }}>
      {children}
    </ModalContext.Provider>
  )
}
