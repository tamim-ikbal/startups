import { PropsWithChildren } from "react";

export default function PageTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="px-5 py-4 text-center bg-black text-white font-black leading-[118%] text-3xl md:text-4xl lg:text-[54px] uppercase">
      {children}
    </h1>
  );
}
