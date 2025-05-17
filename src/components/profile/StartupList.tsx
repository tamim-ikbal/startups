import StartupCard from "../startup/StartupCard";

export default function StartupList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
      <StartupCard />
      <StartupCard />
      <StartupCard />
      <StartupCard />
      <StartupCard />
      <StartupCard />
      <StartupCard />
    </div>
  );
}
