import React, { useState } from "react";
import Cart from "./Cart";
import { product_detail_data } from "@/data/product_data";

export default function ProductInfo() {
  const [isHovered, setIsHovered] = useState(false);
  const product_data = product_detail_data[0];

  return (
    <Cart
      className="
        absolute left-0
        top-[33vh] 
        hover:top-[20vh] 
        w-[190px] h-[52px] 
        hover:h-[40vh] 
        hover:w-[400px]"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <p
        className={`flex justify-center text-xl font-semibold
          border-b border-black/0 
          transition-all
          ease-in-out
          duration-500 
          
      `}
      >
        {isHovered ? product_detail_data[0].Name : "Information"}
      </p>
      <div
        className={`font-normal text-md text-left mx-3 mt-4
          flex flex-col
          transition-all
          ease-in-out
          duration-300 
          origin-top-left
          h-[32vh]
          gap-3
        ${isHovered ? "scale-100" : "scale-0"}`}
      >
        {product_detail_data.map((product, index) => (
          <div key={index}>
            {Object.keys(product).map((key) => (
              <div
                key={key}
                className="flex flex-row justify-between border-b border-black/10"
              >
                <span className="">{key}:</span>
                <span className="">{product[key]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Cart>
  );
}
