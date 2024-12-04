'use client'

import { KEYS } from '@/shared/constants'

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

const resetAuthTokens = () => {
  localStorage.removeItem(KEYS.accessToken)
  localStorage.removeItem(KEYS.refreshToken)
  window.location.replace('#/login')
}

export const refreshAuth = async () => {
  const { accessToken } = getAuthTokensFromLocalStorage()
  if (accessToken) {
    const arrayToken = accessToken.split('.')
    const parsedToken: ParsedToken = JSON.parse(atob(arrayToken[1]))

    const currentTime = new Date().getTime()

    if (parsedToken.exp < currentTime / 1000) {
      return resetAuthTokens()
    }
  }
}
