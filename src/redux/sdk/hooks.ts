import { useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'redux/store'

import { actions } from './slice'
import { SdkIndex } from './types'

export const useSdkRedux = () => {
  const dispatch = useDispatch()

  const sdkState = useSelector((state: RootState) => state.sdk)

  const getSdkInfo = useCallback(
    (sdkIndex: SdkIndex) => {
      dispatch(actions.getSdkInfo(sdkIndex))
    },
    [dispatch],
  )

  return {
    ...sdkState,
    getSdkInfo,
  }
}
