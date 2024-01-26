import React, { useState } from "react";
import Cart from "./Cart";
import { product_detail_data } from "@/data/product_data";

export default function ProductInfo() {
  const [isActive, setIsActive] = useState(true);

  return (
    <Cart
      className={`
        absolute left-0 top-[33vh] 
        w-[190px] h-[52px] 
        !ml-4
        
        ${isActive ? "!top-[12vh] !h-[65vh] !w-[25vw] !ml-20 !bg-white/85" : ""}
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
          Information
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
          {product_detail_data[0].Name}
        </p>

        {product_detail_data.map((product, index) => (
          <div key={index} className="mx-3">
            {Object.keys(product).map((key) => (
              <div
                key={key}
                className={`flex justify-between border-b border-black/10
                ${key == "About" ? "flex-col" : "flex-row"}`}
              >
                <span className="font-semibold">{key}</span>
                <span style={{ whiteSpace: "pre-line" }}>{product[key]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Cart>
  );
}
