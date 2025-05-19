"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfileCard() {
  const { data: session } = useSession();
  console.log(session?.user);

  const { name, email, image } = session?.user || {};

  return (
    <div className="bg-primary rounded-4xl border-[5px] border-solid border-black shadow-startup-card relative">
      <Image
        src="/assets/svg/profile-card-shape.svg"
        width={40}
        height={40}
        alt="icon"
        className="absolute -top-3 2xl:-top-8 -left-4 2xl:-left-11 w-5 h-5 2xl:w-10 2xl:h-10 block 2xl:block"
      />
      <h2 className="w-[calc(100%_-_16px)] mx-auto -mt-6 rounded-[20px] text-center text-xl md:text-2xl font-black uppercase leading-[1em] py-3 md:py-4 px-7 bg-white border-[5px] border-solid border-black">
        {name || ""}
      </h2>
      <div className="py-6 md:py-9 px-6 md:px-12 flex flex-col gap-2.5 items-center">
        <div className="border-[3px] rounded-full p-2 bg-white mb-3.5 max-w-80">
          <Image
            src={image || "/assets/images/avatar.png"}
            alt={name || "Avatar"}
            width={320}
            height={320}
            className="rounded-full w-full h-full object-center object-cover"
          />
        </div>
        <h3 className="text-white text-center text-xl md:text-2xl font-extrabold leading-9">
          {email ? `@${email}` : ""}
        </h3>
        <p className="text-white text-base text-center font-normal">
          Next.js Enthusiast & Educator
        </p>
      </div>
    </div>
  );
}
