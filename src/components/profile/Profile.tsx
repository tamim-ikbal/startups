import ProfileCard from "./ProfileCard";
import StartupList from "./StartupList";

export default function Profile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
      <div className="col-span-full lg:col-span-1">
        <ProfileCard />
      </div>
      <div className="col-span-full lg:col-span-2">
        <StartupList />
      </div>
    </div>
  );
}
