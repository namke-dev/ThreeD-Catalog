import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full z-50 bg-zinc-800 text-white/70">
      <div
        className="
        pl-20
        bg-white/5
        sticky
        top-0
        flex flex-row flex-wrap 
        items-center justify-start 
        text-xs
        px-3 py-0.5 gap-5
        z-50
        "
      >
        <Logo
          className="
          text-white/80
          md:top-10 md:left-5"
        />
        <div className="flex flex-row gap-8 ml-20">
          <Link href={"/"}>
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
      px-5
      py-2
      my-1
      rounded-3xl
      font-medium 
      text-sm
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
