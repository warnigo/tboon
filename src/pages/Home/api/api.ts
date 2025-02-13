import { useQuery, type UseQueryResult } from "@tanstack/react-query"

import { axiosInstance } from "@shared/api"

import { type ConnectType } from "../mode/types"

export const postConnect = (): any => {
  try {
    const url =
      // eslint-disable-next-line no-secrets/no-secrets
      "/partner/invoice/listWithoutContract?start_date=2025-02-13T12:10:41.434Z&end_date=2025-02-13T12:10:41.434Z&seller_tin="
    const response = axiosInstance.get<ConnectType[]>(url)

    return response
  } catch (error) {
    console.error(error)
  }
}

export const useGetConnect = (): UseQueryResult<ConnectType[], Error> =>
  useQuery({
    queryKey: ["connect"],
    queryFn: postConnect,
  })
