"use client";

import { signOut } from "next-auth/react";

export const SignOutBtn = () => {
  return <button onClick={() => signOut()}>SignOut</button>;
};
