import { type FC, type PropsWithChildren } from "react"

export const ProtectedLayout: FC<PropsWithChildren> = ({ children }) => (
  <div>{children}</div>
)
