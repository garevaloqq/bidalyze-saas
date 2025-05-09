import { UserProfile } from "@clerk/nextjs"
import { useTranslations } from "next-intl"
import { getI18nPathServer } from "utils/server"

const UserProfilePage = async () => {
  const t = useTranslations("UserProfile")
  const path = await getI18nPathServer("/dashboard/user-profile");

  return (
    <>
      <UserProfile
        routing="path"
        path={path}
        appearance={{
          elements: {
            rootBox: "w-full",
            cardBox: "w-full flex",
          },
        }}
      />
    </>
  )
}

export default UserProfilePage
