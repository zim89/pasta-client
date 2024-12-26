'use client'

import { Viewer } from '@react-pdf-viewer/core'

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css'

export const PublicOfferPage = () => {
  return (
    <div className='page-wrap bg-white'>
      <Viewer
        defaultScale={1.3}
        enableSmoothScroll
        fileUrl='/files/publichniy_dohovir_oferty.pdf'
      />
    </div>
  )
}
