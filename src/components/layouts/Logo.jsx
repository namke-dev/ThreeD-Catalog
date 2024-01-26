import React from "react";

export default function Logo() {
  return (
    <div
      className=" 
      absolute
      top-0 left-0
      m-2 px-4 py-2
      bg-black/10
      text-white/90
      hover:bg-white/30
      hover:text-black/60
      rounded-sm
      flex items-center justify-center
      transition-colors
      ease-in-out
      duration-500 
  "
    >
      <div className="text-xl font-semibold">D3 CATALOG</div>
    </div>
  );
}
