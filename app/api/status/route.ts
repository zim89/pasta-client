import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

import {
  LIQPAY_TEST_PRIVATE_KEY,
  LIQPAY_TEST_PUBLIC_KEY,
} from '@/shared/constants'
import { constructLiqpayPayload } from '@/shared/lib/utils/liqpay'

const API_URL = 'https://www.liqpay.ua/api/request'

export const POST = async (req: NextRequest) => {
  const body = await req.json()

  const { data, signature } = constructLiqpayPayload({
    action: 'status',
    version: 3,
    publicKey: `${LIQPAY_TEST_PUBLIC_KEY}`,
    privateKey: `${LIQPAY_TEST_PRIVATE_KEY}`,
    orderId: body.orderId,
  })

  const params = new URLSearchParams()
  params.append('data', data)
  params.append('signature', signature)

  const request = await axios.post(API_URL, params)
  const result = await request.data

  return NextResponse.json({ result })
}
