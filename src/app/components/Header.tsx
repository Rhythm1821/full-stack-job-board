import { getSignInUrl, getSignUpUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export default async function Header(){
    const { user } = await getUser()
    const signInUrl = await getSignInUrl()
    return (
        <header>
          <div className="items-center flex justify-between mx-auto my-4 container">
          <Link href={"/"} className="font-bold text-xl">Job board</Link>
            <nav className="flex gap-2">
              {
                !user && <Link className="bg-gray-200 py-2 px-4 rounded-md " href={signInUrl}>Login</Link>
              }
               {
                user && (
                  <form
                    action={async () => {
                      'use server';
                      await signOut();
                    }}
                  >
                    <button className="bg-gray-200 py-2 px-4 rounded-md" type="submit">Sign out</button>
                  </form>
                )
              }
              <Link className="bg-blue-600 py-2 px-4 rounded-md text-white" href={'/new-listing'}>Post a job</Link>
            </nav>
          </div>
        </header>
    )
}