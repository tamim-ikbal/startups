"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Spinner from "../ui/Spinner";

export default function Navigation() {
  const { data: session } = useSession();
  const { user } = session || {};
  const [loginLoader, setLoginLoader] = useState<boolean>(false);
  const [logoutLoader, setLogoutLoader] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoginLoader(true);
    await signIn("github");
  };

  const handleLogout = async () => {
    setLogoutLoader(true);
    await signOut();
  };

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
                <button
                  className="text-black text-[20px]font-normal font-semibold tracking-[-0.6px] duration-300 hover:text-primary-500 text-left cursor-pointer inline-flex gap-[1px] items-center justify-between disabled:cursor-progress"
                  onClick={handleLogout}
                  disabled={logoutLoader}
                >
                  Logout {logoutLoader && <Spinner color="text-blue-500" />}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <button
          className="text-black text-[20px]font-normal font-semibold tracking-[-0.6px] duration-300 hover:text-primary-500 text-left cursor-pointer inline-flex gap-[1px] items-center disabled:cursor-progress"
          onClick={handleLogin}
          disabled={loginLoader}
        >
          {loginLoader && <Spinner color="text-blue-500" />} Login
        </button>
      )}
    </div>
  );
}
