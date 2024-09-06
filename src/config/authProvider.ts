import { AuthProvider, fetchUtils } from 'react-admin'
import { KEYS } from '@/constants/localStorage.const'
import { SERVER_URL } from '@/constants'

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const response = await fetchUtils.fetchJson(
      `${SERVER_URL}/auth/admin/login`,
      {
        method: 'POST',
        body: JSON.stringify({ email: username, password })
      }
    )

    const { admin, accessToken, refreshToken } = response.json

    localStorage.setItem(KEYS.accessToken, accessToken)
    localStorage.setItem(KEYS.refreshToken, refreshToken)

    return {
      data: admin
    }
  },
  checkAuth: async () => {
    return new Promise<void>((resolve, reject) => {
      const accessToken = localStorage.getItem(KEYS.accessToken)
      if (accessToken) {
        resolve()
      } else {
        reject(new Error('The user is unauthorized!'))
      }
    })
  },
  logout: async () => {
    localStorage.removeItem(KEYS.accessToken)
    localStorage.removeItem(KEYS.refreshToken)

    return Promise.resolve()
  },
  checkError: async () => {
    return Promise.resolve()
  },
  getPermissions: async () => {
    return Promise.resolve(['ADMIN'])
  },
  handleCallback: async () => {
    return Promise.resolve()
  }
}
