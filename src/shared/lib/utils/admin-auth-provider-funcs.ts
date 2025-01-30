'use client'

import { fetchUtils } from 'react-admin'

import { KEYS, SERVER_URL } from '@/shared/constants'

type ParsedToken = {
  email: string
  role: 'admin' | 'user'
  sub: number
  iat: number
  exp: number
}

const getAuthTokensFromLocalStorage = () => {
  const accessToken = localStorage.getItem(KEYS.accessToken)

  return { accessToken }
}

export const checkIfAccessTokenIsExpired = (accessToken: string) => {
  const arrayToken = accessToken.split('.')
  const parsedToken: ParsedToken = JSON.parse(atob(arrayToken[1]))

  const currentTime = new Date().getTime()

  if (parsedToken.exp < currentTime / 1000) {
    return true
  }

  return false
}

const resetAuthTokens = async () => {
  try {
    console.log('Change refresh token to access token')

    const response = await fetchUtils.fetchJson(
      `${SERVER_URL}/auth/refresh-token`,
      {
        method: 'POST',
        credentials: 'include',
      },
    )

    const data = response.json

    console.log('REFRESH TOKEN RESPONSE: ', data)

    if (!data.accessToken) {
      throw new Error("Access token wasn't provided")
    }

    localStorage.setItem(KEYS.accessToken, data.accessToken)
    return data.accessToken
  } catch (err) {
    console.log(err)
    window.location.replace('#/login')
  }
}

export const refreshAuth = async () => {
  console.log('refreshAuth')

  const { accessToken } = getAuthTokensFromLocalStorage()
  if (accessToken) {
    if (checkIfAccessTokenIsExpired(accessToken)) {
      console.log('Access token is expired (admin-auth-provider-funcs.ts)')
      return await resetAuthTokens()
    }
    return Promise.resolve()
  }
}
