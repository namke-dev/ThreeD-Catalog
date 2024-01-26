import {
  furniture_category,
  list_product_img_url,
} from "@/data/product_config_options";
import React from "react";

export default function Footer() {
  return (
    <div
      className=" 
        w-full h-[18vh]
        
        fixed bottom-0
        bg-white/80
        text-black/70

        flex flex-row
        shadow-gray-300
        shadow-inner
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
              hover:scale-105
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
      <div className="w-2/3 p-1">
        <p className="h-1/6 pl-3 font-semibold text-md">Cabinet Product</p>
        <div
          className="
          h-5/6
          pb-3 pl-3 pt-1
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
            border border-black/30
            flex justify-center
            rounded-xl
            scale-90"
            >
              <img src={value} alt="placeholder" className="h-[100px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
