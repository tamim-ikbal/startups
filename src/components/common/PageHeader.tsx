import { PropsWithChildren } from "react";

export default function PageHeader({ children }: PropsWithChildren) {
  return (
    <section className="py-[48px] lg:py-[72px] bg-primary">
      <div className="container">
        <div className="flex flex-col items-center gap-4 max-w-[970px] w-full mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
}
