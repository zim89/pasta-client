'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

export const ShowError = () => {
  const [hasShown, setHasShown] = useState(false)
  const router = useRouter()
  const params = useSearchParams()
  const error = params.get('error')

  useEffect(() => {
    if (!error || hasShown) return

    toast('Помилка при оплаті', {
      description: error,
    })

    setHasShown(true)
    router.replace('/checkout')
  }, [error])

  return null
}
