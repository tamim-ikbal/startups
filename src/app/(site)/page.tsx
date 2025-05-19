import Section from "@/components/common/Section";
import Hero from "@/components/home/Hero";
import StartupList from "@/components/home/StartupList";
import { getStartups } from "@/sanity/lib/query/startup";
import { Metadata } from "next";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata: Metadata = {
  title: "Home - Startups",
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;

  const startups = await getStartups({
    query: (params.query as string) || undefined,
  });

  return (
    <>
      <Hero />
      <Section>
        <div className="container">
          <div className="flex flex-col gap-9">
            <h2 className="text-black text-3xl font-semibold tracking-[-.9px]">
              {params.query
                ? `Search results for "${params.query}"`
                : "Recommended startups"}
            </h2>
            <StartupList startups={startups} />
          </div>
        </div>
      </Section>
    </>
  );
}
