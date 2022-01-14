import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import InstalledData from 'helpers/static/installed.json'
import UninstalledData from 'helpers/static/uninstalled.json'

import { SdkIndex, State } from './types'

const initialState: State = {
  sdkInfo: [],
}

const slice = createSlice({
  name: 'sdk',
  initialState,
  reducers: {
    getSdkInfo(state, action: PayloadAction<SdkIndex>) {
      const sdkIndex = action.payload

      if (sdkIndex === SdkIndex.INSTALLED)
        state.sdkInfo = InstalledData.data.installedSdks
      else if (sdkIndex === SdkIndex.UNINSTALLED)
        state.sdkInfo = UninstalledData.data.uninstalledSdks
    },
  },
})

export const { reducer, actions } = slice

export default slice
