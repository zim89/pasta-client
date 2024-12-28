/*
    Copyright 2020 Adobe
    All Rights Reserved.
*/

type ClientConfig = {
  clientId: string
  divId?: string
  locale?: string
  reportSuiteId?: string
  measurementId?: string
  sendAutoPDFAnalytics?: boolean
}

type FileConfig = {
  content: {
    location:
      | {
          url: string
        }
      | {
          promise: Promise<ArrayBuffer>
        }
  }
  metaData?: Partial<{
    fileName: string
    id: string
  }>
}

type ViewerConfig = Partial<{
  embedMode: 'LIGHT_BOX' | 'FULL_WINDOW' | 'IN_LINE' | 'SIZED_CONTAINER'
  showAnnotationTools: boolean
  showDownloadPDF: boolean
  enableFormFilling: boolean
  showFullScreen: boolean
  showPrintPDF: boolean
  showZoomControl: boolean
  showThumbnails: boolean
  showBookmarks: boolean
  exitPDFViewerType: 'EXIT' | 'RETURN' // DEFAULT: "EXIT"
  defaultViewMode:
    | 'FIT_PAGE'
    | 'FIT_WIDTH'
    | 'TWO_COLUMN'
    | 'TWO_COLUMN_FIT_PAGE'
  focusOnRendering: boolean
  enableLinearization: boolean
  enableAnnotationAPIs: boolean
  includePDFAnnotations: boolean
  enableSearchAPIs: boolean
  showDisabledSaveButton: boolean
  showFullScreenViewButton: boolean
}>

export class ViewSDKClient {
  private readyPromise: Promise<void> = new Promise<void>(resolve => {
    if (window?.AdobeDC) {
      resolve()
    } else {
      /* Wait for Adobe Acrobat Services PDF Embed API to be ready */
      document.addEventListener('adobe_dc_view_sdk.ready', () => {
        resolve()
      })
    }
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public adobeDCView: any

  ready() {
    return this.readyPromise
  }

  previewFile(
    divId: string,
    fileConfig: FileConfig,
    viewerConfig?: ViewerConfig,
  ) {
    const config: ClientConfig = {
      /* Pass your registered client id */
      clientId: process.env.NEXT_PUBLIC_PDF_VIEWER_API_KEY!,
    }
    if (divId) {
      /* Optional only for Light Box embed mode */
      /* Pass the div id in which PDF should be rendered */
      config.divId = divId
    }
    /* Initialize the AdobeDC View object */
    this.adobeDCView = new window.AdobeDC.View(config)

    /* Invoke the file preview API on Adobe DC View object */
    const previewFilePromise = this.adobeDCView.previewFile(
      /* Pass information on how to access the file */
      fileConfig,
      viewerConfig,
    )

    return previewFilePromise
  }

  previewFileUsingFilePromise(
    divId: string,
    filePromise: Promise<string | ArrayBuffer>,
    fileName: string,
    viewerConfig: ViewerConfig = {},
  ) {
    /* Initialize the AdobeDC View object */
    this.adobeDCView = new window.AdobeDC.View({
      /* Pass your registered client id */
      clientId: process.env.NEXT_PUBLIC_PDF_VIEWER_API_KEY,
      /* Pass the div id in which PDF should be rendered */
      divId,
    })

    /* Invoke the file preview API on Adobe DC View object */
    this.adobeDCView.previewFile(
      {
        /* Pass information on how to access the file */
        content: {
          /* pass file promise which resolve to arrayBuffer */
          promise: filePromise,
        },
        /* Pass meta data of file */
        metaData: {
          /* file name */
          fileName,
        },
      },
      viewerConfig,
    )
  }

  registerEventsHandler() {
    /* Register the callback to receive the events */
    this.adobeDCView.registerCallback(
      /* Type of call back */
      window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
      /* call back function */
      (event: unknown) => {
        console.log(event)
      },
      /* options to control the callback execution */
      {
        /* Enable PDF analytics events on user interaction. */
        enablePDFAnalytics: true,
      },
    )
  }
}
