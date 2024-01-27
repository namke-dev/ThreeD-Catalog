import React from "react";

export default function Logo() {
  return (
    <div
      className=" 
      absolute
      top-1
      -translate-x-1/2
      md:translate-x-0
      left-1/2
      md:top-1 md:left-1
      md:my-1
      md:mx-2
      md:px-4
      px-2 py-1
      bg-white/5
      text-white/95
      hover:bg-white/90
      hover:text-black/60
      hover:scale-110
      rounded-sm
      flex flex-col items-center justify-center
      transition-all
      ease-in-out
      duration-300 
  "
    >
      <p className="md:text-lg font-semibold">D3 CATALOG</p>
      <p className="text-xs font-thin">namke-dev</p>
    </div>
  );
}
