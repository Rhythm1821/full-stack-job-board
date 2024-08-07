import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Link from 'next/link';
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from '@workos-inc/authkit-nextjs';


export default async function Home() {
  const { user } = await getUser();

  // Get the URL to redirect the user to AuthKit to sign in
  const signInUrl = await getSignInUrl();

  // Get the URL to redirect the user to AuthKit to sign up
  const signUpUrl = await getSignUpUrl();
  
  return (
    <div>
      <Hero />
      <Jobs />
    </div>
  );
}
