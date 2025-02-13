import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios"
import Cookies from "js-cookie"

import { store } from "@app/store"
import { ENV } from "@shared/config"

class ApiClient {
  private api: AxiosInstance

  constructor(baseURL: string) {
    if (!baseURL) {
      throw new Error("Base URL is required for API requests")
    }

    this.api = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    })

    this.api.interceptors.request.use((config) => {
      const state = store.getState()
      const token = state.auth.access_token

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    })

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API Error:", error)

        if (error.response?.status === 401) {
          Cookies.remove("token")
        }

        return Promise.reject(error)
      },
    )
  }

  public async get<T>(
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.api.get(endpoint, config)

    return response.data
  }

  public async post<T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.api.post(
      endpoint,
      data,
      config,
    )

    return response.data
  }

  public async put<T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.api.put(
      endpoint,
      data,
      config,
    )

    return response.data
  }
}

export const axiosInstance = new ApiClient(ENV.base_url)
