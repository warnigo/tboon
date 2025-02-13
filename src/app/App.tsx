import { type FC } from "react"

import { BrowserRouter } from "react-router-dom"

import { Provider } from "./providers"
import { Routes } from "./routes"

import "./styles/globals.css"

export const App: FC = () => (
  <Provider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
)
