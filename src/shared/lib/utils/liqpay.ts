import crypto from 'crypto'

type ConstructLiqpayPayloadParams = {
  action: string
  version: number
  amount: number
  description: string
  publicKey: string
  privateKey: string
  orderId: string
  result_url?: string
  language?: string
  info?: string
}

export const constructLiqpayPayload = ({
  action,
  amount,
  publicKey,
  privateKey,
  description,
  result_url,
  language = 'uk',
  orderId,
  version,
  ...rest
}: ConstructLiqpayPayloadParams) => {
  const jsonString = {
    public_key: publicKey,
    version,
    action,
    amount,
    language,
    result_url,
    currency: 'UAH',
    description,
    order_id: orderId,
    ...rest,
  }

  const data = utf8_to_b64(JSON.stringify(jsonString))
  const signString = privateKey + data + privateKey
  const sha1 = crypto.createHash('sha1')
  sha1.update(signString)
  const signature = sha1.digest('base64')

  return { data, signature }
}

export function utf8_to_b64(str: string) {
  return globalThis.btoa(unescape(encodeURIComponent(str)))
}

export function b64_to_utf8(str: string) {
  return decodeURIComponent(escape(globalThis.atob(str)))
}
