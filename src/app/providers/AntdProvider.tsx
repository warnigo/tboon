import { type FC, type PropsWithChildren } from "react"

import { ConfigProvider } from "antd"

export const AntdProvider: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#60A5FA",
      },
    }}
  >
    {children}
  </ConfigProvider>
)
