import { ReadonlyURLSearchParams } from 'next/navigation'

export const calculateParams = (
  pageParams: ReadonlyURLSearchParams,
  key: string,
  value: string
) => {
  const params = new URLSearchParams(pageParams)
  params.set(key, value)

  return '?' + params.toString()
}
