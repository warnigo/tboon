import { type FC, Suspense } from "react"

import { Spin } from "antd"
import { Navigate, Outlet } from "react-router-dom"

import { PublicLayout } from "@app/layouts"
import { useAppSelector } from "@app/store"
import { ROUTES } from "@shared/config"

export const PublicRoutes: FC = () => {
  const { access_token } = useAppSelector((item) => item.auth)

  if (access_token) {
    return <Navigate to={ROUTES.home} />
  }

  return (
    <PublicLayout>
      <Suspense fallback={<Spin />}>
        <Outlet />
      </Suspense>
    </PublicLayout>
  )
}
