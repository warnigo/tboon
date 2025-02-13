import { combineReducers } from "@reduxjs/toolkit"

import { sliceReducers } from "./slices/slice.reducer"

export const rootReducer = combineReducers({
  ...sliceReducers,
})
