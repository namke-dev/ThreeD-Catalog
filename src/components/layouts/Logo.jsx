import React from "react";

export default function Logo() {
  return (
    <div
      className=" 
      absolute
      top-4 left-4
      m-2 px-4 py-2
      bg-black/50
      text-white/90
      hover:bg-white/90
      hover:text-black/60
      hover:scale-110
      rounded-sm
      flex items-center justify-center
      transition-all
      ease-in-out
      duration-500 
  "
    >
      <div className="text-xl font-semibold">D3 CATALOG</div>
    </div>
  );
}
