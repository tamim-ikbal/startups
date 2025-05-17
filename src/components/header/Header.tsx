import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="py-[22px]">
      <div className="container">
        <nav className="flex gap-5 justify-between items-center">
          <Link href={"/"}>
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={140}
              height={30}
            />
          </Link>
          <Navigation />
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}
