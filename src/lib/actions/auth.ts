"use server";

import { signIn, signOut } from "next-auth/react";

export async function login() {
  return await signIn("github");
}

export async function logout() {
  return await signOut({
    redirect: false,
  });
}
