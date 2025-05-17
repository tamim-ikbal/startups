"use client";

import useAuth from "@/hooks/useAuth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const auth = useAuth();
  const { user } = auth || {};

  return (
    <div className="hidden lg:flex gap-[16px] lg:gap-[30px] items-center">
      {user ? (
        <>
          <Link
            href="/create"
            className="text-black text-[20px]font-normal font-semibold tracking-[-0.6px] duration-300 hover:text-primary-500"
          >
            Create
          </Link>
          <div className="relative group">
            <Image
              src={user.image || "/assets/images/avatar.png"}
              alt="Avatar"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full cursor-pointer"
            />
            <div className="absolute w-56 bg-white py-6 px-4 right-0 shadow-lg top-[calc(100%_+_24px)] invisible opacity-0 duration-300 group-hover:visible group-hover:opacity-100 z-50">
              <div className="w-full flex flex-col gap-6">
                <Link
                  href="/profile"
                  className="text-black text-[20px]font-normal font-semibold tracking-[-0.6px] duration-300 hover:text-primary-500 text-left"
                >
                  Profile
                </Link>
                <button className="text-black text-[20px]font-normal font-semibold tracking-[-0.6px] duration-300 hover:text-primary-500 text-left cursor-pointer">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <button
          className="text-black text-[20px]font-normal font-semibold tracking-[-0.6px] duration-300 hover:text-primary-500 text-left cursor-pointer"
          onClick={async () => signIn("github")}
        >
          Login
        </button>
      )}
    </div>
  );
}
