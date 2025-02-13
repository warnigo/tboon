import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

import { axiosInstance } from "@shared/api"

import { type LoginValue, type UserCredentials } from "../model/types"

const postLogin = async (credentials: LoginValue): Promise<UserCredentials> => {
  try {
    const response = await axiosInstance.post<UserCredentials>(
      "/auth/login",
      credentials,
    )

    Cookies.set(
      "authTokens",
      JSON.stringify({
        access_token: response.access_token,
        user: {
          name: response.user.name,
          phone: response.user.phone,
        },
      }),
      {
        expires: 7,
        path: "/",
        secure: true,
      },
    )

    return response
  } catch (error) {
    console.error(error)
    throw new Error("Unable to login")
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useLogin = () =>
  useMutation<UserCredentials, Error, LoginValue>({
    mutationKey: ["login"],
    mutationFn: postLogin,
  })
