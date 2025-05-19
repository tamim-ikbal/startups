import { PropsWithChildren } from "react";
import { remark } from "remark";
import html from "remark-html";

interface MarkdownProps {
  className?: string;
}
export default async function Markdown({
  children,
  className,
}: PropsWithChildren<MarkdownProps>) {
  let pitchHTML = "";
  if (children) {
    pitchHTML = (
      await remark()
        .use(html)
        .process(children as string)
    ).toString();
  }

  return (
    <div
      className={`${className}`}
      dangerouslySetInnerHTML={{ __html: pitchHTML }}
    ></div>
  );
}
