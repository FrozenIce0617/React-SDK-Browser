import { combineReducers } from '@reduxjs/toolkit'

import { reducer as sdkReducer } from './sdk/slice'

const rootReducer = combineReducers({
  sdk: sdkReducer,
})

export default rootReducer
