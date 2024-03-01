import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import LoginBar from "./LoginBar";
import { useRouter } from "next/router";
import { FaHome, FaImages, FaNewspaper, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const isCurrentPage = (pathname) => router.pathname === pathname;

  return (
    <div className="fixed w-full z-40 md:h-auto text-white/70 pb-2 rounded-none">
      <LoginBar />
      <div className="mt-0 flex flex-row flex-wrap justify-center text-xs md:gap-5 gap-1 z-50">
        <Link href={"/home"}>
          <Logo />
        </Link>
        <div className="flex flex-row flex-wrap gap-6 lg:px-3 dark:text-white/80 text-black/80 hover:text-amber-600 bg-gradient-to-r from-amber-50/90 via-amber-50/90 to-yellow-50/90 dark:from-zinc-700 dark:via-zinc-700/90 dark:to-zinc-700/90 rounded-3xl py-0.5 shadow-md duration-300 dark:shadow-zinc-800">
          <Link href={"/home"}>
            <NavbartButton active={isCurrentPage("/home")} icon={<FaHome />}>
              HOME
            </NavbartButton>
          </Link>
          <Link href={"/show-case"}>
            <NavbartButton
              active={isCurrentPage("/show-case")}
              icon={<FaImages />}
            >
              SHOW CASE
            </NavbartButton>
          </Link>
          <Link href={"/news"}>
            <NavbartButton
              active={isCurrentPage("/news")}
              icon={<FaNewspaper />}
            >
              NEWS
            </NavbartButton>
          </Link>
          <Link href={"/contact"}>
            <NavbartButton
              active={isCurrentPage("/contact")}
              icon={<FaEnvelope />}
            >
              CONTACT
            </NavbartButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavbartButton({ active, className, children, icon, ...props }) {
  return (
    <button
      {...props}
      className={`
        flex items-center
        px-3 md:px-5 py-1.5 my-2 rounded-3xl font-medium md:text-sm text-bs
        dark:text-white/80 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:text-white/90
        bg-amber-600/5 transition-colors duration-500
        ${
          active
            ? "dark:bg-white/20 bg-amber-500/30 text-neutral-700"
            : "dark:text-white/60 text-neutral-600 bg-amber-600/15"
        } ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
