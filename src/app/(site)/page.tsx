import Hero from "@/components/home/Hero";
import RecommededSection from "@/components/home/RecommededSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Startups",
};

export default async function Home() {
  return (
    <>
      <Hero />
      <RecommededSection />
    </>
  );
}
