import { type FC } from "react"

import classNames from "classnames/bind"

import { LoginForm } from "@entities/LoginForm"

import styles from "./Login.module.scss"

const cn = classNames.bind(styles)

const Login: FC = () => (
  <section className={cn("login")}>
    <div className={cn("login__form-wrapper")}>
      <h1 className={cn("login__form-wrapper-title")}>ВОЙТИ В СИСТЕМУ</h1>
      <p className={cn("login__form-wrapper-subtitle")}>
        Введите свои номер телефона и пароль
      </p>

      <LoginForm />
    </div>
  </section>
)

Login.displayName = "Login"
export default Login
