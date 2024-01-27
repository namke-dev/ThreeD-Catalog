import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="w-full">
      <div
        className="flex flex-row flex-wrap 
        items-center justify-start 
        bg-white/20 text-black/50
        text-xs
        px-3 py-0.5 gap-5"
      >
        <Logo
          className="
          text-black/80
          md:top-10 md:left-5
      "
        />
        <NavbartButton>HOME</NavbartButton>
        <NavbartButton>SHOW CASE</NavbartButton>
        <NavbartButton>NEWS</NavbartButton>
        <NavbartButton>About</NavbartButton>
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
