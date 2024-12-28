'use client'

import { useEffect } from 'react'

import { ViewSDKClient } from '@/shared/config/view-sdk-client'

export const PrivacyPolicyPage = () => {
  useEffect(() => {
    const PDFViewerClient = new ViewSDKClient()

    PDFViewerClient.ready().then(() => {
      /* Invoke file preview */
      PDFViewerClient.previewFile(
        'pdf-div',
        {
          /* Pass the embed mode option here */

          content: {
            location: {
              url: '/files/polityka-konfidentsiynosti.pdf',
            },
          },
          metaData: {
            fileName: 'polityka-konfidentsiynosti.pdf',
          },
        },
        {
          embedMode: 'SIZED_CONTAINER',
          showZoomControl: true,
          showAnnotationTools: false,
          enableFormFilling: false,
          enableAnnotationAPIs: false,
          enableLinearization: true,
          showDownloadPDF: false,
          showPrintPDF: false,
          showThumbnails: false,
          showBookmarks: false,
          includePDFAnnotations: false,
        },
      )
    })
  }, [])

  return (
    <div className='page-wrap py-0 md:pt-20 xl:pb-0 xl:pt-24'>
      <div id='pdf-div' className='h-screen' />
    </div>
  )
}
