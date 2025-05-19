import { getStartupsByAuthor } from "@/sanity/lib/query/startup";
import ProfileCard from "./ProfileCard";
import StartupList from "./StartupList";

export default async function Profile() {
  const startups = await getStartupsByAuthor(
    "7353029a-9638-4f9d-9787-408bd7a02128"
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
      <div className="col-span-full lg:col-span-1">
        <ProfileCard />
      </div>
      <div className="col-span-full lg:col-span-2">
        <StartupList startups={startups} />
      </div>
    </div>
  );
}
