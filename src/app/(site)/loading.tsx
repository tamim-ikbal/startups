import PageHeader from "@/components/common/PageHeader";
import Section from "@/components/common/Section";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <PageHeader>
        <Skeleton className="w-[280px] h-[48px] rounded-xl" />
        <Skeleton className="h-[150px] w-full rounded-xl" />
        <Skeleton className="h-[70px] w-full rounded-xl" />
        <Skeleton className="h-[80px] w-full rounded-xl" />
      </PageHeader>
      <Section>
        <div className="container">
          <div className="min-h-80 w-full flex items-center flex-col gap-7">
            <svg
              className="mr-3 -ml-1 size-5 animate-spin text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width={70}
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-2xl text-black font-semibold">Loading...</p>
          </div>
        </div>
      </Section>
    </>
  );
}
