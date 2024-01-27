import React, { useState } from "react";
import Cart from "./Cart";
import { product_custom_options } from "@/data/product_custom_options";
import { FaAngleDoubleRight, FaTimes } from "react-icons/fa";

export default function CustomProductPanel() {
  const [isActive, setIsActive] = useState(false);

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
        absolute left-0  
        md:ml-2
        hover:bg-white/100
        ${
          isActive
            ? "top-[10vh] h-[65vh] z-10 w-full md:w-[25vw] md:ml-5 bg-white/100 md:bg-white/85 rounded-none"
            : "top-[27vh] md:top-[18vh] md:translate-y-[67px] w-[140px] md:w-[220px]  h-[43px] md:h-[52px] bg-white/50"
        }
      `}
    >
      {!isActive && (
        <div
          className={`flex flex-row 
            w-full h-full
            items-center justify-center
            text-center
            gap-2 
            text-sm md:text-lg font-semibold
            px-2 
            md:py-2.5
            md:-translate-x-2
            md:hover:translate-x-0
            group
            transition-transform
          `}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          Custom Product
          <FaAngleDoubleRight
            className="mt-1.5 -mr-44 absolute group-hover:translate-x-4 opacity-60 
            transition 
            scale-0 md:scale-100 
            md:group-hover:scale-125
            md:group-hover:opacity-25"
          />
        </div>
      )}
      {isActive && (
        <>
          <div
            className={`flex justify-center 
                text-lg font-semibold
                py-2.5
                h-[10%]
              `}
          >
            Get Your Own Style
          </div>
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

      <div
        className={`font-normal text-md text-left 
          px-6 md:px-8
          flex flex-col
          transition-all
          ease-in-out
          duration-300 
          origin-top-left
          h-[90%]
          overflow-y-scroll          
        ${isActive ? "scale-100" : "scale-0"}`}
      >
        <div className="flex flex-col">
          {Object.entries(product_custom_options).map(([category, options]) => (
            <div key={category} className="mb-4">
              <h3 className="text-sm md:text-md font-medium mb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(category, option)}
                    className={`
                    px-4 py-1
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
