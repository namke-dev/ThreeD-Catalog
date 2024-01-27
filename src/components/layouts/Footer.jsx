import {
  furniture_category,
  list_product_img_url,
} from "@/data/product_custom_options";
import React from "react";

export default function Footer() {
  return (
    <div
      className=" 
        w-full 
        h-[18vh]
        fixed bottom-0
        text-black/80
        bg-white
        flex flex-row
        shadow-gray-300
        rounded-xl

        scale-90
        hover:rounded-none
        translate-y-1
        hover:scale-100
        hover:translate-y-0
        opacity-70
        hover:opacity-100

        transition-all
        duration-500
        "
    >
      {/* Category choice */}
      <div className="w-1/3 p-1">
        <p className="h-1/6 pl-3 font-semibold text-md">Category</p>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 h-5/6 w-full pb-2 pl-3 pt-1">
          {Object.entries(furniture_category).map(([key, value]) => (
            <button
              key={key}
              className="bg-gray-100 text-black/80 
              hover:bg-gray-300
              border border-gray-300
              
              rounded-xl
              transition-all
              "
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Product choice */}
      <div className="w-2/3 px-1 pt-1">
        <p className="h-1/6 pl-3 font-semibold text-md">Cabinet Product</p>
        <div
          className="
          h-5/6
          pb-3 pt-1 mx-3
          flex flex-row
          overflow-x-scroll
          overflow-hidden
          gap-2.5
          "
        >
          {Object.entries(list_product_img_url).map(([key, value]) => (
            <div
              key={key}
              style={{ flexShrink: 0 }}
              className="w-[150px] h-[102px]
              bg-white
              border-black/20
              hover:border 
              flex justify-center
              rounded-xl
              scale-90
              hover:scale-100
              transition-all"
            >
              <img src={value} alt="placeholder" className="h-[100px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
