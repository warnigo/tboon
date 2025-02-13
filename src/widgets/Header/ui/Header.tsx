import { type FC, useEffect, useState } from "react"

import { Button, Dropdown, type MenuProps, Modal } from "antd"
import classNames from "classnames/bind"
import Cookies from "js-cookie"
import { Menu, User } from "lucide-react"

import { Logo } from "@shared/ui"

import { useGetMe, usePostLogout } from "../api/api"

import styles from "./Header.module.scss"

const cn = classNames.bind(styles)

const Header: FC = () => {
  const { data } = useGetMe()
  const { mutate, isPending } = usePostLogout()
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("ru-RU", { hour12: false }),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("ru-RU", { hour12: false }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p>{data?.name}</p>,
    },
    {
      key: "2",
      label: (
        <Button
          danger
          style={{ width: "100%" }}
          type="primary"
          onClick={() => setOpen(true)}
        >
          Выйти
        </Button>
      ),
    },
  ]

  const handleLogout = async (): Promise<void> => {
    try {
      await mutate()
      Cookies.remove("authTokens")
      window.location.reload()
    } catch (error) {
      console.error(error)
      throw new Error("logout error /logout")
    } finally {
      setOpen(false)
    }
  }

  return (
    <header className={cn("header")}>
      <div className={cn("header__left")}>
        <Logo />

        <button className={cn("header__button")}>
          <Menu style={{ width: "100%", flexShrink: "0" }} />
        </button>
      </div>

      <div
        className="header__right"
        style={{ display: "flex", alignItems: "center", gap: "12px" }}
      >
        <p className={cn("header__right-welcome")}>
          😁 Добрый день, {data?.name}
        </p>

        <time dateTime={new Date().toISOString()}>{time}</time>

        <Dropdown
          menu={{ items, style: { width: "200px" } }}
          placement="bottomRight"
        >
          <Button
            icon={<User />}
            size="large"
            style={{
              borderRadius: "100%",
              color: "#3d3d3d",
            }}
          />
        </Dropdown>
      </div>

      <Modal
        open={open}
        footer={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Button
              loading={isPending}
              type="primary"
              variant="solid"
              onClick={handleLogout}
            >
              Да
            </Button>

            <Button variant="outlined" onClick={() => setOpen(false)}>
              Нет
            </Button>
          </div>
        }
        onCancel={() => setOpen(false)}
      >
        <p className={cn("modal-text")}>Вы уверены, что хотите выйти?</p>
      </Modal>
    </header>
  )
}

Header.displayName = "Header"
export default Header
