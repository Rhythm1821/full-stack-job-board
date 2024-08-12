"use server"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs";
import { AutoPaginatable, OrganizationMembership, WorkOS } from "@workos-inc/node";
import { createCompany } from "../actions/workosActions";

export default async function NewListingPage() {
    const { user } = await getUser()

    const workos = new WorkOS(process.env.WORKOS_API_KEY);
    async function handleNewCompanyData(data:FormData) {
        "use server"
        if (user) {            
            await createCompany(data.get("newCompanyName") as string, user.id)
        }
    }

    if (!user) {
        return (
            <div className="container">
                {
                    !user && (
                        <div>You must be signed in to post a job</div>
                    )
                }
            </div>
        )
    }
    const organizationMemberships = await workos.userManagement.listOrganizationMemberships({ userId: user.id })

    return (
        <div className="container">
            <div>
                <pre>
                    {JSON.stringify(organizationMemberships, null, 2)}
                </pre>
                <h2 className="text-lg mt-4">Your companies</h2>
                <p className="text-gray-500 text-sm mb-2">Select a company</p>
                <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
                    No companies found assigned to your companies
                </div>

                <h2 className="text-lg mt-6">Create a new company</h2>
                <p className="text-gray-500 text-sm mb-2">To create a new job listing you first need to register a company</p>
                <form
                    action={handleNewCompanyData}
                    className="flex gap-2">
                    <input
                        name="newCompanyName"
                        className="border border-gray-400 p-2 rounded-md"
                        type="text" placeholder="Company name" />
                    <button type="submit" className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md">
                        Create a company
                    </button>
                </form>
            </div>
        </div>
    );
}