import { KEYS } from '@/shared/constants/localstorage.const'

export const retrieveToken = () => {
  const token = localStorage.getItem(KEYS.accessToken)
  const headers = {
    Authorization: `Bearer ${token}`
  }

  return { token, headers }
}

export const retrieveRefreshToken = () => {
  const refreshToken = localStorage.getItem(KEYS.refreshToken)

  return { refreshToken }
}
