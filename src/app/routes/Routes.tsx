import { type FC } from "react"

import { HomePage } from "@pages/Home"
import { LoginPage } from "@pages/Login"
import { useRoutes } from "react-router-dom"

import { ROUTES } from "@shared/config"

import { ProtectedRoute } from "./ProtectedRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const Routes: FC = () =>
  useRoutes([
    {
      path: ROUTES.login,
      element: <PublicRoutes />,
      children: [
        {
          path: ROUTES.login,
          element: <LoginPage />,
        },
      ],
    },
    {
      path: ROUTES.home,
      element: <ProtectedRoute />,
      children: [
        {
          path: ROUTES.home,
          element: <HomePage />,
        },
      ],
    },
  ])
