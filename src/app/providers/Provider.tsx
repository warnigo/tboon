import { type FC, type PropsWithChildren } from "react"

import { AntdProvider } from "./AntdProvider"
import { QueryProvider } from "./QueryProvider"
import { StoreProvider } from "./StoreProvider"

export const Provider: FC<PropsWithChildren> = ({ children }) => (
  <StoreProvider>
    <QueryProvider>
      <AntdProvider>{children}</AntdProvider>
    </QueryProvider>
  </StoreProvider>
)
