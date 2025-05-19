import { Startup } from "@/types/startup";
import StartupCard from "../startup/StartupCard";

interface Props {
  startups: Startup[];
}

export default function StartupList({ startups }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-7">
      {startups?.map((startup: Startup) => (
        <StartupCard key={startup._id} startup={startup} />
      ))}
    </div>
  );
}
