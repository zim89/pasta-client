import { Dispatch, SetStateAction } from 'react'

export const clear = (dispatch: (param: string) => void) => {
  dispatch('')
}
