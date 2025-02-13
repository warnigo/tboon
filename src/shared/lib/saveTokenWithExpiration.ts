import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"

export const saveTokenWithExpiration = (token: string): void => {
  try {
    const { exp } = jwtDecode<{ exp: number }>(token)
    const expiresInDays = (exp * 1000 - Date.now()) / (1000 * 60 * 60 * 24)

    Cookies.set("authToken", token, { expires: expiresInDays, secure: true })
  } catch (error) {
    console.error("Invalid token format:", error)
  }
}
