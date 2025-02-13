import { type FC } from "react"

import { Checkbox, Form, Input, message } from "antd"
import classNames from "classnames/bind"
import { Lock } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { useAppDispatch } from "@app/store"
import { setAuth } from "@app/store/slices/auth/auth.slice"
import { ROUTES } from "@shared/config"
import { Button, PhoneNumberInput } from "@shared/ui"

import { useLogin } from "../api/api"
import { type LoginValue } from "../model/types"

import styles from "./LoginForm.module.scss"

const cn = classNames.bind(styles)

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { mutate, isPending } = useLogin()

  const onFinish = ({ phone, password, remember_me }: LoginValue): void => {
    mutate(
      { phone, password, remember_me },
      {
        onSuccess: (data) => {
          dispatch(setAuth(data))
          void message.success("")
          navigate(ROUTES.home)
        },
        onError: (error: any) => {
          void message.error(error.message)
        },
      },
    )
  }

  return (
    <Form
      className={cn("form")}
      initialValues={{ remember_me: false }}
      layout="vertical"
      name="login"
      onFinish={onFinish}
    >
      <Form.Item
        label="Телефон"
        name="phone"
        rules={[
          { required: true, message: "Пожалуйста, введите номер телефона" },
        ]}
      >
        <PhoneNumberInput />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
      >
        <Input.Password
          placeholder="Введите пароль"
          prefix={
            <Lock color="#999" size={20} style={{ paddingRight: "4px" }} />
          }
        />
      </Form.Item>

      <Form.Item name="remember_me" valuePropName="checked">
        <Checkbox className={cn("form__checkbox")}>Запомни меня</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          htmlType="submit"
          loading={isPending}
          style={{ height: "40px" }}
        >
          ВОЙТИ
        </Button>
      </Form.Item>
    </Form>
  )
}

LoginForm.displayName = "LoginForm"
