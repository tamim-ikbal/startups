import Section from "@/components/common/Section";
import Profile from "@/components/profile/Profile";
import getAuth from "@/lib/auth/getAuth";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { name } = (await getAuth())?.user || {};
  return {
    title: name ? `${name}'s Profile - Startups` : "Profile - Startups",
  };
}

export default function Page() {
  return (
    <Section>
      <div className="container">
        <Profile />
      </div>
    </Section>
  );
}
