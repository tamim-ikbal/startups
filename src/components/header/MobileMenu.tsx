"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const handleMenuBtnClick = () => {
    setOpen((state) => !state);
  };
  return (
    <>
      <div className="block lg:hidden">
        <button
          className="cursor-pointer border-0 outline-0"
          onClick={handleMenuBtnClick}
        >
          <svg
            id="fi_5358649"
            enableBackground="new 0 0 24 24"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m3.5 7.5h17c.8286133 0 1.5-.6713867 1.5-1.5s-.6713867-1.5-1.5-1.5h-17c-.8286133 0-1.5.6713867-1.5 1.5s.6713867 1.5 1.5 1.5z"></path>
              <path d="m20.5 10.5h-17c-.8286133 0-1.5.6713867-1.5 1.5s.6713867 1.5 1.5 1.5h17c.8286133 0 1.5-.6713867 1.5-1.5s-.6713867-1.5-1.5-1.5z"></path>
              <path d="m20.5 16.5h-17c-.8286133 0-1.5.6713867-1.5 1.5s.6713867 1.5 1.5 1.5h17c.8286133 0 1.5-.6713867 1.5-1.5s-.6713867-1.5-1.5-1.5z"></path>
            </g>
          </svg>
        </button>
        <div
          className={clsx(
            "fixed top-0 left-0 flex flex-col w-[95%] sm:w-80 h-screen bg-white z-[9991] py-5 duration-200 delay-75",
            { "invisible opacity-0": !open },
            { "visible opacity-100": open }
          )}
        >
          <div className="flex justify-between items-center px-4 border-b pb-4 border-gray-200">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={140}
              height={30}
            />
            <button
              className="cursor-pointer border-0 outline-0"
              onClick={handleMenuBtnClick}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 329.26933 329"
                xmlns="http://www.w3.org/2000/svg"
                id="fi_1828778"
              >
                <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-2 px-4 pt-4">
            <Link
              href="/"
              className="text-base font-semibold text-left py-2 text-black"
              onClick={handleMenuBtnClick}
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="text-base font-semibold text-left py-2 text-black"
              onClick={handleMenuBtnClick}
            >
              Profile
            </Link>
            <button className="text-base font-semibold text-left py-2 text-black">
              Logout
            </button>
          </div>
          <div className="mt-auto px-4">
            <Link
              href="/create"
              className="block w-full text-center bg-primary py-4 rounded-lg text-base text-white font-semibold cursor-pointer"
              onClick={handleMenuBtnClick}
            >
              Create
            </Link>
          </div>
        </div>
        <div
          className={clsx(
            "fixed bg-black/20 flex w-full h-screen top-0 left-0 z-[999] duration-100",
            { "invisible opacity-0": !open },
            { "visible opacity-100": open }
          )}
          onClick={handleMenuBtnClick}
        ></div>
      </div>
    </>
  );
}
