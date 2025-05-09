import { useTranslations } from "next-intl"

const DashboardIndexPage = () => {
  const t = useTranslations("DashboardIndex")

  return <>{t("Dasboard")}</>
}

export default DashboardIndexPage
