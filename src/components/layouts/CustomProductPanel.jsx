import React, { useState } from "react";
import Cart from "./Cart";
import { product_custom_options } from "@/data/product_custom_options";
import { FaTimes } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

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
        absolute md:right-0 top-[33vh] 
        md:mr-4
        bg-white/50 hover:bg-white/100
        md:bg-white/85
        ${
          isActive
            ? "top-[12vh] h-[65vh] z-10 w-full md:w-[25vw] md:mr-10 bg-white/100 md:bg-white/85 rounded-none"
            : "w-[220px] h-[52px] rounded-2xl"
        }
      `}
    >
      <div className="h-[10%]">
        {!isActive && (
          <div
            className={`flex flex-row 
            items-center justify-center gap-2 
            text-xl font-semibold
            px-2 py-2.5
            group
          `}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <FaAngleLeft className="mt-1.5 group-hover:-translate-x-2 opacity-60 transition" />
            Custom Product
          </div>
        )}

        {isActive && (
          <>
            <div
              className={`flex justify-center 
                text-xl font-semibold
                py-2.5
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
      </div>

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
              <h3 className="text-md font-medium mb-2">{category}</h3>
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
