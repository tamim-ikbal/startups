import Section from "@/components/common/Section";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          <div className="col-span-full lg:col-span-1">
            <Skeleton className="w-full h-96 rounded-2xl" />
          </div>
          <div className="col-span-full lg:col-span-2">
            <Skeleton className="w-full h-[500px] rounded-2xl" />
          </div>
        </div>
      </div>
    </Section>
  );
}
