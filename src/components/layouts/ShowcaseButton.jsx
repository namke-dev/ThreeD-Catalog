import React from "react";

export default function ShowcaseButton({ children, onClick, classname }) {
  return (
    <div
      className={`
      flex flex-row 
      w-full h-full
      items-center 
      justify-center gap-2 
      text-sm md:text-lg font-semibold
      px-2
      py-1
      md:py-2.5
      bg-black/30
      text-white
      group

      ${classname}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
