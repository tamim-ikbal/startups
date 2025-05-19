import { SanityLive } from "@/sanity/lib/live";
import {
  getStartupViewsById,
  updateStartupViews,
} from "@/sanity/lib/query/startup";
import { after } from "next/server";

export default async function Views({ id }: { id: string }) {
  const {
    data: { views: totalViews = 0 },
  } = (await getStartupViewsById(id)) || {};

  after(async () => {
    await updateStartupViews(id, totalViews + 1);
  });

  return (
    <>
      <div className="fixed right-4 bottom-5 z-50 bg-gray-50 py-2 px-4 rounded-lg shadow-lg">
        <span className="w-3 h-3 bg-red-500 absolute -top-1.5 right-0 rounded-full animate-ping"></span>
        <span className="w-3 h-3 bg-red-500 absolute -top-1.5 right-0 rounded-full"></span>
        <span className="text-base font-normal text-black">
          {totalViews} views
        </span>
      </div>
      <SanityLive />
    </>
  );
}
