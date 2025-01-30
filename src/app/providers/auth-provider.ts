import {
  addRefreshAuthToAuthProvider,
  AuthProvider,
  fetchUtils,
} from 'react-admin'

import { SERVER_URL } from '@/shared/constants'
import { KEYS } from '@/shared/constants/localstorage.const'
import {
  checkIfAccessTokenIsExpired,
  refreshAuth,
} from '@/shared/lib/utils/admin-auth-provider-funcs'

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const response = await fetchUtils.fetchJson(
      `${SERVER_URL}/auth/admin/login`,
      {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ email: username, password }),
      },
    )

    const { admin, accessToken } = response.json

    localStorage.setItem(KEYS.accessToken, accessToken)

    return {
      data: admin,
    }
  },
  checkAuth: async () => {
    return new Promise<void>((resolve, reject) => {
      const accessToken = localStorage.getItem(KEYS.accessToken)
      if (accessToken) {
        if (checkIfAccessTokenIsExpired(accessToken)) {
          console.log('checkAuth says: Session is expired!')
          reject(new Error('Session is expired!'))
        }

        console.log('checkAuth')
        resolve()
      } else {
        reject(new Error('The user is unauthorized!'))
      }
    })
  },
  logout: async () => {
    localStorage.removeItem(KEYS.accessToken)

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
  },
}

export const authProviderWithRefresh = addRefreshAuthToAuthProvider(
  authProvider,
  refreshAuth,
)
