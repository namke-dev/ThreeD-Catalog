import React, { useState } from "react";
import Cart from "./Cart";

export default function ProductCustomPanel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Cart
      className="absolute
        right-0
        top-[33vh] 
        hover:top-[20vh] 
        w-[190px] h-[52px] 
        hover:h-[40vh] 
        hover:w-[300px]
      "
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <p
        className={`flex justify-center 
          text-xl
          hover:text-xl
          font-semibold
          border-black/0 
          border-b-2
          pb-3 mb-6
          transition-all
          ease-in-out
          duration-300 
      ${isHovered ? "border-black/10" : ""}`}
      >
        Custom
      </p>
    </Cart>
  );
}
