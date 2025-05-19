import PageDetail from "@/components/common/PageDetail";
import PageHeader from "@/components/common/PageHeader";
import PageSubtitle from "@/components/common/PageSubtitle";
import PageTitle from "@/components/common/PageTitle";
import Section from "@/components/common/Section";
import Views from "@/components/startup/Views";
import Markdown from "@/components/ui/Markdown";
import ViewsSkeleton from "@/components/ui/skeletons/ViewsSkeleton";
import { getStartupById } from "@/sanity/lib/query/startup";
import { formatDate } from "@/utils/formatDate";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export const experimental_ppr = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).slug;
  const startup = await getStartupById(id);
  return {
    title: `${startup.title} - Startups`,
  };
}

export default async function Page({ params }: Props) {
  const id = (await params).slug;
  const startup = await getStartupById(id);
  if (!startup) notFound();

  const {
    _id,
    title,
    description,
    _createdAt: date,
    image,
    category,
    author,
    pitch,
  } = startup;

  return (
    <>
      <PageHeader>
        <PageSubtitle>{formatDate(date)}</PageSubtitle>
        <PageTitle>{title}</PageTitle>
        {description && <PageDetail>{description} </PageDetail>}
      </PageHeader>
      <Section>
        <div className="container flex w-full flex-col gap-9">
          {image && (
            <div className="max-w-[1120px] mx-auto w-full">
              <Image
                src={image}
                alt={title || ""}
                width={1200}
                height={590}
                className="w-full h-auto rounded-[20px] object-cover"
              />
            </div>
          )}
          <div className="max-w-[800px] mx-auto w-full flex flex-col gap-8 lg:gap-12">
            {/* Author and Category */}
            <div className="flex gap-4 lg:gap-6 justify-between items-center">
              {author && (
                <div className="flex gap-3.5">
                  {author.image && (
                    <Image
                      src={author.image}
                      alt={author.name || ""}
                      width={80}
                      height={80}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <div>
                    {author.name && (
                      <h3 className="text-2xl font-extrabold line-clamp-1 leading-[120%] text-black">
                        {author.name}
                      </h3>
                    )}
                    {author.username && (
                      <p className="text-xl font-medium line-clamp-1 leading-[150%] text-black">
                        {author.username}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {category && (
                <p className="text-black bg-[#FFE8F0] py-2.5 px-5 rounded-full text-xl font-medium tracking-[-0.6px]">
                  {category}
                </p>
              )}
            </div>
            {/* Content */}
            {pitch && (
              <Markdown className="flex flex-col gap-4 lg:gap-6">
                {pitch}
              </Markdown>
            )}
          </div>
        </div>
      </Section>
      <Suspense fallback={<ViewsSkeleton />}>
        <Views id={_id} />
      </Suspense>
    </>
  );
}
