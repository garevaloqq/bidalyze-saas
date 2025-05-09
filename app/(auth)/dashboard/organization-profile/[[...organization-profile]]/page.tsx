import { OrganizationProfile } from "@clerk/nextjs"
import { getI18nPathServer } from "utils/server"

const OrganizationProfilePage = async () => {
  const path = await getI18nPathServer("/dashboard/organization-profile");
  return (
    <>
      <OrganizationProfile
        routing="path"
        path={path}
        afterLeaveOrganizationUrl="/onboarding/organization-selection"
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

export default OrganizationProfilePage
