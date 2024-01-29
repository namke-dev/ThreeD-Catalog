import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <div
        className="
        flex flex-row flex-wrap 
        items-center justify-start 
        bg-gray-50 text-black/50
        text-xs
        px-3 py-0.5 gap-5
        "
      >
        <Logo
          className="
          text-black/80
          md:top-10 md:left-5
      "
        />
        <NavbartButton>
          <Link href={"/home"}>HOME</Link>
        </NavbartButton>
        <NavbartButton>
          <Link href={"/show-case"}>SHOW CASE</Link>
        </NavbartButton>
        <NavbartButton>
          <Link href={"/news"}>NEWS</Link>
        </NavbartButton>
        <NavbartButton>
          {" "}
          <Link href={"/about"}>ABOUT</Link>
        </NavbartButton>
      </div>
    </header>
  );
}

function NavbartButton({ className, children, ...props }) {
  return (
    <button
      {...props}
      className={`
      px-5
      py-1
      my-1
      rounded-2xl
      font-medium
      hover:bg-black/10
      hover:text-black
      hover:text-black/40
      transition-colors
      ${className}`}
    >
      {children}
    </button>
  );
}
