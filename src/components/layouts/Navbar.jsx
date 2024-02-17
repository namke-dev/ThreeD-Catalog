import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import LoginOption from "./login-btn";
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
      "
    >
      <LoginOption />
      <div
        className="
        pt-3
        pl-5
        flex flex-row
        items-center justify-between
        text-xs
        px-3 py-0.5 md:gap-5 gap-1
        z-50
        m-auto
        "
      >
        <div
          className="flex flex-row gap-6 lg:px-3
        bg-zinc-700
        bg-opacity-85
        rounded-3xl
        mx-auto
        py-0.5"
        >
          <Link href={"/home"}>
            <Logo />
          </Link>

          <Link href={"/home"}>
            <NavbartButton active={isCurrentPage("/home")}>HOME</NavbartButton>
          </Link>

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
          <Link href={"/policy-google"}>
            <NavbartButton active={isCurrentPage("/policy-google")}>
              POLICY
            </NavbartButton>
          </Link>
          <Link href={"/terms-of-service"}>
            <NavbartButton active={isCurrentPage("/terms-of-service")}>
              TERMS OF USE
            </NavbartButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavbartButton({ active, className, children, ...props }) {
  return (
    <button
      {...props}
      className={`
      px-3
      md:px-5
      py-1.5
      my-2
      rounded-3xl
      font-medium 
      md:text-sm
      text-xs
      hover:bg-white/10
      hover:text-black
      hover:text-white/90
      transition-colors
      ${
        active
          ? "bg-white/10 text-white/90"
          : "hover:bg-white/10 hover:text-black hover:text-white/90"
      }

      ${className}`}
    >
      {children}
    </button>
  );
}
