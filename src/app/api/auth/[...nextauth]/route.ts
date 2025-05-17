import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { env } from "process";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID || "",
      clientSecret: env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  pages: {},
});

export { handler as GET, handler as POST };
