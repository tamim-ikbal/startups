"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useCallback, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState(searchParams.get("query") || "");

  const generateQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${pathname}?${generateQueryString("query", search)}`);
  };

  const handleClear = () => {
    setSearch("");
    if (searchParams.has("query")) {
      router.push(`${pathname}?${generateQueryString("query", "")}`);
    }
  };

  return (
    <>
      <div className="max-w-[700px] w-full bg-white border-[5px] border-solid border-black rounded-[80px] mt-8">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center overflow-hidden pr-5 md:pr-[36px] gap-1">
            <input
              type="text"
              placeholder="search Startup"
              className="block w-full h-[60px] md:h-[80px] pl-5 md:pl-[40px] pr-[5px] text-lg md:text-xl lg:text-2xl text-black uppercase font-bold leading-0 placeholder:text-black rounded-0 outline-0"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onReset={() => console.log("reset")}
            />
            <div className="flex items-center gap-1 md:gap-2 shrink-0">
              {search && (
                <button
                  type="button"
                  className="w-[36px] h-[36px] md:w-[50px] md:h-[50px] bg-black flex justify-center items-center rounded-full shrink-0"
                  onClick={handleClear}
                >
                  <svg
                    id="fi_2976286"
                    enable-background="new 0 0 320.591 320.591"
                    width="21"
                    height="20"
                    fill="white"
                    viewBox="0 0 320.591 320.591"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g id="close_1_">
                        <path d="m30.391 318.583c-7.86.457-15.59-2.156-21.56-7.288-11.774-11.844-11.774-30.973 0-42.817l257.812-257.813c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875l-259.331 259.331c-5.893 5.058-13.499 7.666-21.256 7.288z"></path>
                        <path d="m287.9 318.583c-7.966-.034-15.601-3.196-21.257-8.806l-257.813-257.814c-10.908-12.738-9.425-31.908 3.313-42.817 11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414-6.35 5.522-14.707 8.161-23.078 7.288z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              )}
              <button
                type="submit"
                className="w-[36px] h-[36px] md:w-[50px] md:h-[50px] bg-black flex justify-center items-center rounded-full shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M9.269 16.9814C4.59322 16.9814 0.789062 13.1772 0.789062 8.50142C0.789062 3.82564 4.59322 0.0214844 9.269 0.0214844C13.9448 0.0214844 17.7489 3.82564 17.7489 8.50142C17.7489 13.1772 13.9448 16.9814 9.269 16.9814ZM9.269 2.35621C5.88082 2.35621 3.12379 5.11282 3.12379 8.50142C3.12379 11.89 5.88082 14.6466 9.269 14.6466C12.6572 14.6466 15.4142 11.8896 15.4142 8.50142C15.4142 5.11325 12.6572 2.35621 9.269 2.35621Z"
                    fill="white"
                  />
                  <path
                    d="M20.403 17.8987L17.2106 14.7063C17.1587 14.6544 17.1034 14.6089 17.0456 14.5684C16.5621 15.2088 15.9896 15.7788 15.3467 16.2589C15.388 16.3188 15.4349 16.3757 15.488 16.4289L18.6804 19.6213C19.1563 20.0972 19.9275 20.0972 20.403 19.6213C20.8785 19.1458 20.8785 18.3742 20.403 17.8987Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
