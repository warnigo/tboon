import { type FC, type PropsWithChildren } from "react"

import { Layout } from "antd"
import { Content } from "antd/es/layout/layout"

import { Header } from "@widgets/Header"

export const ProtectedLayout: FC<PropsWithChildren> = ({ children }) => (
  <Layout>
    <Header />

    <Content>{children}</Content>
  </Layout>
)
