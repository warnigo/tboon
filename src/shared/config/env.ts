export const ENV = {
  node: import.meta.env.NODE_ENV,
  base_url: import.meta.env.VITE_PUBLIC_BASE_URL ?? "",
}

export const IS_PROD = ENV.node === "production"
export const IS_DEV = ENV.node === "development"
