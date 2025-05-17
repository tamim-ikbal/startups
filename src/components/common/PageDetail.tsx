import { PropsWithChildren } from "react";

export default function PageDetail({ children }: PropsWithChildren) {
  return (
    <p className="mt-2 text-center text-xl text-white font-medium leading-[150%]">
      {children}
    </p>
  );
}
