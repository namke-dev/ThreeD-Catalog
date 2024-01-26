import React, { useState } from "react";
import Cart from "./Cart";
import { product_custom_options } from "@/data/product_custom_options";

export default function CustomProductPanel() {
  const [isActive, setIsActive] = useState(true);

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionClick = (category, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [category]: option,
    }));
  };

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
          Get Your Own Style
        </p>

        <div className="flex flex-col">
          {Object.entries(product_custom_options).map(([category, options]) => (
            <div key={category} className="mb-4">
              <h3 className="text-md font-medium mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(category, option)}
                    className={`
                  px-4 py-2
                  ${
                    selectedOptions[category] === option
                      ? "bg-gray-500 text-white"
                      : "bg-gray-200 text-black"
                  }
                  hover:bg-gray-300 
                  rounded-md
                `}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Cart>
  );
}
