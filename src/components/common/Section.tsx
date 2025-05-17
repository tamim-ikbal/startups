import clsx from "clsx";
import { PropsWithChildren } from "react";
interface Props {
  className?: string;
}
export default function Section({
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <section className={clsx("py-9 lg:py-12", className)}>{children}</section>
  );
}
