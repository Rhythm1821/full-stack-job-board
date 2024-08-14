import { getUser } from "@workos-inc/authkit-nextjs"
import { WorkOS } from "@workos-inc/node"

type PageProps = {
    params: {
        orgId: string
    }
}

export default async function NewListingOrgPage(props:PageProps){
    const { user } = await getUser()
    const workos = new WorkOS(process.env.WORKOS_API_KEY)
    if (!user) return <div>You must be signed in to post a job</div>
    const orgId = props.params.orgId
    const oms = await workos.userManagement.listOrganizationMemberships({ userId: user.id})
    const om = oms.data.find(om=>om.organizationId===orgId)
    const hasAccess = oms.data.length>0 
    
    if (!hasAccess) {
        return (
            <div>You do not have access to this organization</div>
        )
    }

    return (
        <form className="container mt-6" action="">
            <input type="text" placeholder="job title" className="border p-2" />
        </form>
    )
}