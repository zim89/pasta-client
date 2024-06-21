import applePay_img from '@/assets/icons/pay/apple-pay.svg'
import googlePay_img from '@/assets/icons/pay/google-pay.svg'
import mastercard_img from '@/assets/icons/pay/mastercard.svg'
import monoPay_img from '@/assets/icons/pay/mono-pay.svg'
import visa_img from '@/assets/icons/pay/visa.svg'

export const payList = [
  { label: 'visa', src: visa_img },
  { label: 'mastercard', src: mastercard_img },
  { label: 'googlePay', src: googlePay_img },
  { label: 'applePay', src: applePay_img },
  { label: 'monoPay', src: monoPay_img }
] as const
