import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

import { IS_DEV } from "@shared/config"

import { rootReducer } from "./rootReducer"

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware()

    if (IS_DEV) middlewares.push(logger)

    return middlewares
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
