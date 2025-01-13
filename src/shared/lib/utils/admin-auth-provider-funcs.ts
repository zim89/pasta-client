'use client'

import axios from 'axios'

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
  const refreshToken = localStorage.getItem(KEYS.refreshToken)

  return { accessToken, refreshToken }
}

const resetAuthTokens = async () => {
  try {
    console.log('Change refresh token to access token')

    const response = await axios.post(
      `${SERVER_URL}/auth/refresh-token`,
      null,
      {
        withCredentials: true,
      },
    )

    const data = response.data

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
  const { accessToken } = getAuthTokensFromLocalStorage()
  if (accessToken) {
    const arrayToken = accessToken.split('.')
    const parsedToken: ParsedToken = JSON.parse(atob(arrayToken[1]))

    const currentTime = new Date().getTime()

    if (parsedToken.exp < currentTime / 1000) {
      console.log('Access token is expired (admin-auth-provider-funcs.ts)')
      return await resetAuthTokens()
    }
    return Promise.resolve()
  }
}
