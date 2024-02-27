import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import LoginBar from "./LoginBar";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const isCurrentPage = (pathname) => router.pathname === pathname;

  return (
    <div
      className="          
    fixed
    w-full z-50
    md:h-auto
    text-white/70
    pb-2
    rounded-none
    "
    >
      <LoginBar />
      <div
        className="
        mt-0
        flex flex-row flex-wrap
        justify-center
        text-xs
        md:gap-5 
        gap-1
        z-50
        "
      >
        <Link href={"/home"}>
          <Logo />
        </Link>
        <div
          className="flex flex-row flex-wrap gap-6 lg:px-3
          dark:text-white/80
          text-black/80
          hover:text-amber-600
          dark:bg-zinc-700
          bg-white/80
        rounded-3xl
        py-0.5"
        >
          <Link href={"/show-case"}>
            <NavbartButton active={isCurrentPage("/show-case")}>
              SHOW CASE
            </NavbartButton>
          </Link>

          <Link href={"/news"}>
            <NavbartButton active={isCurrentPage("/news")}>NEWS</NavbartButton>
          </Link>

          <Link href={"/about"}>
            <NavbartButton active={isCurrentPage("/about")}>
              ABOUT
            </NavbartButton>
          </Link>
          <Link href={"/contact"}>
            <NavbartButton active={isCurrentPage("/contact")}>
              CONTACT
            </NavbartButton>
          </Link>
          {/* <Link href={"/policy-google"}>
            <NavbartButton active={isCurrentPage("/policy-google")}>
              POLICY
            </NavbartButton>
          </Link>
          <Link href={"/terms-of-service"}>
            <NavbartButton active={isCurrentPage("/terms-of-service")}>
              TERMS OF USE
            </NavbartButton>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
function NavbartButton({ active, className, children, ...props }) {
  return (
    <button
      {...props}
      className={` px-3 md:px-5 py-1.5 my-2 rounded-3xl font-medium md:text-sm text-bs 
      dark:text-white/80
      text-black/60
      hover:text-black
      dark:bg-white/5
      bg-zinc-200/30
         transition-colors 
         duration-500
        ${
          active
            ? "dark:bg-white/10 dark:text-white/90 bg-black/5 !text-black"
            : "dark:hover:bg-white/10 hover:bg-black/5 dark:hover:text-black dark:hover:text-white/90"
        } ${className}`}
    >
      {children}
    </button>
  );
}
