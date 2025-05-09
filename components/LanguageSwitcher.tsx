"use client"

import { GlobalOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Button, Menu, Popover } from "antd"
import { useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"

type MenuItem = Required<MenuProps>["items"][number]

export default function LanguageSwitcher() {
  const current = useLocale()
  const t = useTranslations("LanguageSwitcher")
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const items: MenuItem[] = [
    {
      key: "es",
      label: `${t("es")}`,
    },
    {
      key: "en",
      label: `${t("en")}`,
    },
    {
      key: "fr",
      label: `${t("fr")}`,
    },
  ]

  const changeLocale: MenuProps["onClick"] = (e) => {
    const newLocale = e.key
    console.log("LOCALE", newLocale)
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`
    startTransition(() => {
      router.refresh()
    })
  }

  const languageMenu = (
    <Menu
      mode="vertical"
      defaultSelectedKeys={[current]}
      onClick={changeLocale}
      style={{ width: 125 }}
      items={items}
      disabled={isPending}
      triggerSubMenuAction={"click"}
      expandIcon={false}
    />
  )

  return (
    <Popover content={languageMenu} trigger="click" placement="bottomRight">
      <Button type="text" icon={<GlobalOutlined />} style={{ fontSize: "18px" }} />
    </Popover>
  )
}
