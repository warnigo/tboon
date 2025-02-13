import {
  useMutation,
  type UseMutationResult,
  useQuery,
  type UseQueryResult,
} from "@tanstack/react-query"

import { axiosInstance } from "@shared/api"

import { type MeTypes } from "../model/types"

export const getMe = (): Promise<MeTypes> => {
  try {
    const reponse = axiosInstance.get<MeTypes>("/me")

    return reponse
  } catch (error) {
    console.error(error)
    throw new Error("Fetch error /me")
  }
}

export const useGetMe = (): UseQueryResult<MeTypes, Error> =>
  useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  })

export const postLogout = (): Promise<unknown> => {
  try {
    const reponse = axiosInstance.post("/auth/logout")

    return reponse
  } catch (error) {
    console.error(error)
    throw new Error("Fetch error /me")
  }
}

export const usePostLogout = (): UseMutationResult<
  unknown,
  Error,
  void,
  unknown
> =>
  useMutation({
    mutationKey: ["logout"],
    mutationFn: postLogout,
  })
