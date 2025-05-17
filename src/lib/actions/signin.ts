"use server";

import { signIn } from "next-auth/react";

export async function login() {
  return await signIn("github");
}
