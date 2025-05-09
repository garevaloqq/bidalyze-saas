import { OrganizationProfile } from "@clerk/nextjs"

import { getI18nPath } from "utils/Helpers"

const OrganizationProfilePage = async (props: { params: { locale: string } }) => {
  return (
    <>
      <OrganizationProfile
        routing="path"
        path={getI18nPath("/dashboard/organization-profile", props.params.locale)}
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
