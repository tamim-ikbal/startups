import PageHeader from "@/components/common/PageHeader";
import PageTitle from "@/components/common/PageTitle";
import Section from "@/components/common/Section";
import CreateForm from "@/components/create/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create - Startups",
};

export default function Page() {
  return (
    <>
      <PageHeader>
        <PageTitle>Submit Your Startup Pitch</PageTitle>
      </PageHeader>
      <Section>
        <div className="container">
          <div className="max-w-[771px] mx-auto w-full">
            <CreateForm />
          </div>
        </div>
      </Section>
    </>
  );
}
