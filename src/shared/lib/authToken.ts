import Cookie from "js-cookie"

import { type AuthState } from "@app/store/slices/auth/auth.slice"

export const getAuthTokens = (): AuthState => {
  const token = Cookie.get("authTokens")

  try {
    return token
      ? JSON.parse(token)
      : { access_token: null, user: { name: null, phone: null } }
  } catch (error) {
    console.error("Token parsing error:", error)
    return { access_token: null, user: { name: null, phone: null } }
  }
}
