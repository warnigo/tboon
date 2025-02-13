import { type FC, Suspense } from "react"

import { Spin } from "antd"
import { Navigate, Outlet } from "react-router-dom"

import { ProtectedLayout } from "@app/layouts"
import { useAppSelector } from "@app/store"
import { ROUTES } from "@shared/config"

export const ProtectedRoute: FC = () => {
  const { access_token } = useAppSelector((item) => item.auth)

  if (!access_token) {
    return <Navigate to={ROUTES.login} />
  }
  return (
    <ProtectedLayout>
      <Suspense fallback={<Spin />}>
        <Outlet />
      </Suspense>
    </ProtectedLayout>
  )
}
