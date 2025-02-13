import { type FC, type PropsWithChildren } from "react"

import { Button as AntdButton, type ButtonProps } from "antd"
import classNames from "classnames/bind"

import styles from "./Button.module.scss"

const cn = classNames.bind(styles)

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => (
  <AntdButton className={cn("button")} {...props}>
    {children}
  </AntdButton>
)

Button.displayName = "Button"
