"use client";

import { SignOutBtn } from "@/app/components/signOutBtn/SignOutBtn";
import { useSession } from "next-auth/react";
import MyCartButton from "@/app/components/myCartButton/MyCartButton";
import MyFavouritesButton from "@/app/components/myFavouritesButton/MyFavouritesButton";

// Define the myAccount component
export default function MyAccount() {
  // Use the useRouter hook to access the Next.js router

  // Use the useSession hook to get the user session
  const { data: session } = useSession();

  // Get the user's name from the session, or use a fallback
  const userName = "John Doe";

  // Render the myAccount component
  return (
    <main>
      <h1>Account</h1>
      {/* Display welcome message with username if user is logged in */}
      <p>Welcome, {userName}!</p>
      {/* Button to sign out */}
      <SignOutBtn />
      {/* Links to myCart and myFavourites */}
      {session?.user && (
        <div>
          <MyCartButton />
          <MyFavouritesButton />
        </div>
      )}
    </main>
  );
}
