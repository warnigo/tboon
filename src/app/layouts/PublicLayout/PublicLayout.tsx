import { type FC, type PropsWithChildren } from "react"

export const PublicProvider: FC<PropsWithChildren> = ({ children }) => (
  <div>{children}</div>
)
