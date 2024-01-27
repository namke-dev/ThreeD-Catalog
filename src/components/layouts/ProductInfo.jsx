import React, { useState } from "react";
import Cart from "./Cart";
import { product_detail_data } from "@/data/product_data";
import { FaAngleRight, FaTimes } from "react-icons/fa";

export default function ProductInfo() {
  const [isActive, setIsActive] = useState(true);

  return (
    <Cart
      className={`
        md:ml-4 
        absolute left-0 top-[33vh] 
        w-[190px] h-[52px] 
        ${
          isActive
            ? "!top-[12vh] !h-[65vh] z-10 w-full  md:w-[25vw] bg-white/100 md:bg-white/85"
            : ""
        }
      `}
    >
      <div className="h-[10%]">
        {!isActive && (
          <div
            className={`flex flex-row 
            items-center justify-center gap-2 
            text-xl font-semibold
            px-2
            py-2.5
            group
        `}
            onClick={() => {
              setIsActive(true);
              console.log("setIsActive(true)");
            }}
          >
            Information
            <FaAngleRight className="mt-1.5 group-hover:translate-x-2 opacity-60 transition" />
          </div>
        )}

        {isActive && (
          <>
            <p
              className={`flex justify-center 
          text-xl font-semibold
          py-2.5
        `}
            >
              {product_detail_data[0].Name}
            </p>
            <button
              onClick={() => {
                setIsActive(false);
                console.log("setIsActive(false);");
              }}
              className="
              absolute top-0 right-0 
              m-1
              w-8 h-8
              z-50
              flex justify-center items-center
              hover:scale-125
              transition-all"
            >
              <FaTimes className="h-4 w-4 fill-gray-400" />
            </button>
          </>
        )}
      </div>

      <div
        className={`font-normal text-md text-left 
          px-1 md:px-3
          flex flex-col
          transition-all
          ease-in-out
          duration-300 
          origin-top-left
          h-[90%]
          overflow-y-scroll          
        ${isActive ? "scale-100" : "scale-0"}`}
      >
        {product_detail_data.map((product, index) => (
          <div key={index} className="mx-3 pt-2 pb-5">
            {Object.keys(product).map((key) => (
              <div
                key={key}
                className={`\
                  flex justify-between 
                  border-b border-black/10
                  pt-2
                ${key == "About" ? "flex-col" : "flex-row"}`}
              >
                <span className="font-semibold">{key}</span>
                <span
                  style={{ whiteSpace: "pre-line" }}
                  className={`${key == "About" ? "pt-3 text-justify" : ""}`}
                >
                  {product[key]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Cart>
  );
}
