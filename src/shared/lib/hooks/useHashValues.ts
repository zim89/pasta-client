'use client'

function getParamValue(url: string, param: string) {
  const urlParams = new URLSearchParams(url.split('?')[1])
  return urlParams.get(param)
}

export const useHashParamValue = (param: string) => {
  return getParamValue(decodeURIComponent(window.location.hash), param)
}
