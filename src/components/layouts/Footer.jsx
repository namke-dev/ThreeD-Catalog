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
        h-auto
        

        bg-white/50
        hover:bg-white
        text-black/80

        group

        fixed bottom-0
        flex 
        flex-col
        md:flex-row
        md:gap-1
        md:rounded-md
        md:hover:rounded-none
        md:translate-y-0
        md:opacity-90
        md:hover:opacity-100
        md:hover:pb-20
        md:hover:pt-2


        md:transition-all
        md:duration-500
        "
    >
      {/* Category choice */}
      <div
        className="md:w-1/3 md:p-1
      "
      >
        <p className="md:h-1/6 pl-3 font-semibold text-md">Categories</p>
        <div
          className="
          flex flex-row
          md:grid md:grid-cols-3
          gap-2 md:h-5/6 w-full
          pb-1 md:pb-2 
          pl-3 pt-1
          overflow-x-scroll
          "
        >
          {Object.entries(furniture_category).map(([key, value]) => (
            <button
              key={key}
              className="
              group-hover:border
              group-hover:border-gray-300
              hover:bg-gray-200
              bg-white/60
              rounded-md
              transition-all
              md:w-auto
              md:px-0
              px-6
              whitespace-nowrap
              "
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Product choice */}
      <div
        className="md:w-2/3 md:pl-1 pt-1

      "
      >
        <p className="md:h-1/6 pl-3 font-semibold text-md">
          Category's Product
        </p>
        <div
          className="
          md:h-5/6
          pb-3 pt-1
          flex flex-row
          overflow-x-scroll
          overflow-hidden
          "
        >
          {Object.entries(list_product_img_url).map(([key, value]) => (
            <div
              key={key}
              style={{ flexShrink: 0 }}
              className="w-[150px] h-[102px]
              bg-white
              flex justify-center
              rounded-md
              opacity-60
              hover:opacity-100
              py-6
              ml-3
              group-hover:border
              group-hover:border-gray-300
              transition-all
              duration-500 
              "
            >
              <img src={value} alt="placeholder" className="h-[60px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
