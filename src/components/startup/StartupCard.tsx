import { Startup } from "@/types/startup";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";

type Props = {
  startup: Startup;
};

export default function StartupCard({ startup }: Props) {
  const {
    slug,
    category,
    title = "",
    image,
    views,
    author,
    date,
    description = "",
  } = startup;
  return (
    <div className="rounded-[22px] border-[5px] py-8 px-[22px] shadow-startup-card flex flex-col gap-4">
      {/* Card Header */}
      <div className="flex justify-between items-center mb-1">
        {date && (
          <div className="p-2.5 bg-[#FFE8F0] rounded-full inline-flex justify-center items-center">
            <span className="text-base text-black font-medium tracking-[-0.48px] leading-4">
              {formatDate(date)}
            </span>
          </div>
        )}
        <div className="inline-flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2.03601 12.322C1.967 12.1146 1.967 11.8904 2.03601 11.683C3.42301 7.51 7.36001 4.5 12 4.5C16.638 4.5 20.573 7.507 21.963 11.678C22.033 11.885 22.033 12.109 21.963 12.317C20.577 16.49 16.64 19.5 12 19.5C7.36201 19.5 3.42601 16.493 2.03601 12.322Z"
              stroke="#EE2B69"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
              stroke="#EE2B69"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base text-black font-medium tracking-[-0.48px] leading-4">
            {views}
          </span>
        </div>
      </div>
      {/* Card Body */}
      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1.5">
            <p className="text-base text-black font-medium tracking-[-0.48px] leading-4">
              {author?.name}
            </p>
            <h3 className="text-[26px] text-black font-semibold tracking-[-0.y8px]">
              {title?.length > 14 ? `${title?.substring(0, 14)}...` : title}
            </h3>
          </div>
          <Image
            className="shrink-0 w-[40px] h-[40px] object-center rounded-full"
            src={author?.image || ""}
            alt={author?.name || ""}
            width={40}
            height={40}
          />
        </div>
        <p className="text-[#333] text-ellipsis text-base font-normal leading-[150%]">
          {description?.length > 65
            ? `${description?.substring(0, 65)}...`
            : description}
        </p>
        <Image
          className="shrink-0 w-full rounded-[10px] mt-1.5"
          src={image || ""}
          alt={title || ""}
          width={300}
          height={200}
        />
      </div>

      {/* Card Footer */}
      <div className="flex justify-between items-center">
        <p className="text-base text-black font-medium tracking-[-0.48px] leading-4">
          {category}
        </p>
        <Link
          href={`/startups/${slug?.current}`}
          className="text-base text-white font-medium tracking-[-0.48px] px-5 py-2.5 bg-black rounded-[70px]"
          scroll={false}
        >
          Details
        </Link>
      </div>
    </div>
  );
}
