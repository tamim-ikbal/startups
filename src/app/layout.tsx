import getAuth from "@/lib/auth/getAuth";
import AuthProvider from "@/providers/AuthProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startups",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getAuth();

  return (
    <html lang="en" className="scroll-smooth">
      <AuthProvider session={session}>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
