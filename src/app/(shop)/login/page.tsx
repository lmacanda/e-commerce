"use client";

import LoginForm from "../../components/loginForm/LoginForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();

  // Use the useSession hook to get the user session
  const { data: session, status } = useSession();

  // Redirect if there is an active session
  if (session?.user) {
    router.replace("/myAccount");
    return null; // Return null to avoid rendering anything if redirecting
  }

  // Render a loading indicator while checking for the session
  if (status === "loading") {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }

  // Render the login form if there is no active session
  return (
    <main>
      <LoginForm />
    </main>
  );
}
