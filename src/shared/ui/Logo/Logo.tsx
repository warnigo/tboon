import { type FC } from "react"

import classNames from "classnames/bind"

import styles from "./Logo.module.scss"

const cn = classNames.bind(styles)

export const Logo: FC = () => (
  <div className={cn("logo")}>
    <img alt="logo" className={cn("logo__image")} src="/logo.jpg" />

    <div className={cn("logo__title")}>
      <p>Boon</p>
      <span className="logo__title-doc">Doc</span>
    </div>
  </div>
)

Logo.displayName = "Logo"
