import React, { useState } from "react";
import Cart from "./Cart";

export default function ProductCustomPanel() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Cart
      className={`
        absolute right-0 top-[33vh] 
        w-[190px] h-[52px] 
        !mr-4
        
        ${
          isActive
            ? "!top-[12vh] !h-[65vh] !w-[25vw] !ml-20 !bg-white/85 !rounded-sm"
            : ""
        }
      `}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      {!isActive && (
        <p
          className={`flex justify-center 
        text-xl font-semibold
        py-2.5
        `}
        >
          Custom Product
        </p>
      )}

      <div
        className={`font-normal text-md text-left px-3
          flex flex-col
          transition-all
          ease-in-out
          duration-300 
          origin-top-left
          h-full
          overflow-y-scroll          
        ${isActive ? "scale-100" : "scale-0"}`}
      >
        <p
          className={`flex justify-center 
        text-xl font-semibold
        py-2.5
        `}
        >
          Title
        </p>
      </div>
    </Cart>
  );
}
