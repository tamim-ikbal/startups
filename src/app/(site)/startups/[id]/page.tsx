import PageDetail from "@/components/common/PageDetail";
import PageHeader from "@/components/common/PageHeader";
import PageSubtitle from "@/components/common/PageSubtitle";
import PageTitle from "@/components/common/PageTitle";
import Section from "@/components/common/Section";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;

  return {
    title: `Startup ${id} - Startups`,
  };
}

export default async function Page({ params }: Props) {
  return (
    <>
      <PageHeader>
        <PageSubtitle>October 5, 2024</PageSubtitle>
        <PageTitle>Jsm Academy Masterclass</PageTitle>
        <PageDetail>
          An online platform offering project-based learning for web developers,
          aimed at leveling up junior to mid-level developers by focusing on
          real-world applications.
        </PageDetail>
      </PageHeader>
      <Section>
        <div className="container">
          <h2 className="text-3xl font-bold">Startup: {(await params).id}</h2>
        </div>
      </Section>
    </>
  );
}
