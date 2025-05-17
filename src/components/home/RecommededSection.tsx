import Section from "../common/Section";
import StartupList from "./StartupList";

export default function RecommededSection() {
  return (
    <Section>
      <div className="container">
        <div className="flex flex-col gap-9">
          <h2 className="text-black text-3xl font-semibold tracking-[-.9px]">
            Recommended startups
          </h2>
          <StartupList />
        </div>
      </div>
    </Section>
  );
}
