import Header from "@/components/header/Header";
import { Work_Sans } from "next/font/google";
import { PropsWithChildren } from "react";

const workSans = Work_Sans({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  preload: true,
  variable: "--font-primary",
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className={`${workSans.variable} ${workSans.className}`}>
      <Header />
      {children}
    </main>
  );
}
