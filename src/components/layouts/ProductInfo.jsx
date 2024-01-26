import React, { useState } from "react";
import Cart from "./Cart";

export default function ProductInfo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Cart
      className="
        absolute left-0
        top-[33vh] 
        hover:top-[20vh] 
        w-[190px] h-[52px] 
        hover:h-[40vh] 
        hover:w-[300px]"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <p
        className={`flex justify-center text-xl font-semibold
          border-black/0 
          border-b-2
          pb-3 mb-6
          transition-all
          ease-in-out
          duration-500 
      ${isHovered ? "border-black/10" : ""}`}
      >
        Information
      </p>
      <div
        className={`font-normal text-md text-left mx-3 mt-4
          flex flex-col
          gap-2
          
          transition-all
          ease-in-out
          duration-300 

          origin-top-left 
        ${isHovered ? "scale-100" : "scale-0"}`}
      >
        <p>Width: 1 m</p>
        <p>Length: 2 m</p>
        <p>Height: 1.2 m</p>
        <p>Material: Fiber</p>
        <p>Context: Living room</p>
      </div>
    </Cart>
  );
}
