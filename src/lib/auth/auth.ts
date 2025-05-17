import { getSession } from "next-auth/react";

export function getUserSession() {
  return (async () => await getSession())();
}
