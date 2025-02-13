import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import Cookie from "js-cookie"

import { getAuthTokens, saveTokenWithExpiration } from "@shared/lib"

const tokens = getAuthTokens()

type UserType = {
  name: string | null
  phone: string | null
}

export type AuthState = {
  access_token: string | null
  token_type?: string
  user: UserType
}

const initialState: AuthState = {
  access_token: tokens.access_token,
  user: {
    name: tokens.user?.name || null,
    phone: tokens.user?.phone || null,
  },
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, { payload }: PayloadAction<AuthState>) {
      Object.assign(state, payload)
    },
    cleanAuth(state) {
      Object.assign(state, initialState)
      Cookie.remove("authTokens")
    },
    setToken(state, { payload }: PayloadAction<string>) {
      state.access_token = payload
      saveTokenWithExpiration(payload)
    },
    clearToken(state) {
      state.access_token = null
      Cookie.remove("authTokens")
    },
    setUser(state, { payload }: PayloadAction<UserType>) {
      state.user = payload
    },
  },
})

export const { setAuth, cleanAuth, setToken, clearToken, setUser } =
  authSlice.actions
export const authReducer = authSlice.reducer
