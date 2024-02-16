import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import LoginOption from "./login-btn";

export default function Navbar() {
  return (
    <div
      className="          
      fixed
      w-full z-50
      md:h-auto
      bg-zinc-900/80 text-white/70
      pb-2
      "
    >
      <LoginOption />
      <div
        className="
        pl-5
        flex flex-row
        items-center justify-between
        text-xs
        px-3 py-0.5 md:gap-5 gap-1
        z-50
        m-auto
        max-w-[1400px]
        "
      >
        <Logo
          className="
          text-white/80
          md:top-10 md:left-0
          md:ml-5"
        />
        <div className="flex flex-row gap-8 lg:pr-40 lg:pl-20">
          <Link href={"/home"}>
            <NavbartButton>HOME</NavbartButton>
          </Link>

          <Link href={"/show-case"}>
            <NavbartButton>SHOW CASE</NavbartButton>
          </Link>

          <Link href={"/news"}>
            <NavbartButton>NEWS</NavbartButton>
          </Link>

          <Link href={"/about"}>
            <NavbartButton>ABOUT</NavbartButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavbartButton({ className, children, ...props }) {
  return (
    <button
      {...props}
      className={`
      px-3
      md:px-5
      py-2
      my-1
      rounded-3xl
      font-medium 
      md:text-sm
      text-xs
      hover:bg-white/10
      hover:text-black
      hover:text-white/90
      transition-colors
      ${className}`}
    >
      {children}
    </button>
  );
}
