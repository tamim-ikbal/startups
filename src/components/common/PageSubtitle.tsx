import { PropsWithChildren } from "react";

export default function PageSubtitle({ children }: PropsWithChildren) {
  return (
    <h5 className="py-[10px] px-[20px] bg-[#FBE843] rounded-md text-black text-sm lg:text-lg font-bold tracking-[1.02px] uppercase relative">
      {children}
    </h5>
  );
}
