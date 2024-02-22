import React, { useContext } from "react";
import { furniture_category } from "@/data/product_custom_options";
import DisplayModelContext from "../context/model-context";
import { LIST_FURNITURE } from "@/data/product_data";

export default function ShowcaseFooter() {
  const { setDisplayModel } = useContext(DisplayModelContext);

  const handleSetModelOnClick = (item) => {
    if (item && item.name) {
      setDisplayModel(item);
      console.log("setDisplayModel = " + item.name);
    } else {
      console.error("Invalid item:", item);
    }
  };

  return (
    <div
      className=" 
        w-full
        h-auto
        bg-black/50
        hover:bg-neutral-700
        text-white/80
        group
        fixed bottom-0 left-0
        md:gap-1
        md:rounded-md
        md:hover:rounded-none
        md:opacity-90
        md:hover:opacity-100
        md:py-3
        py-1
        hover:pb-20
        md:hover:pt-2
        transition-all
        duration-500
        "
    >
      <div
        className=" max-w-[1400px] mx-auto flex
        flex-col
        md:flex-row"
      >
        {/* Category choice */}
        <div
          className="md:w-1/3 md:p-1
      "
        >
          <p className="md:h-1/6 pl-3 font-semibold text-xs md:text-md">
            Categories
          </p>
          <div
            className="
          flex flex-row
          md:grid md:grid-cols-3
          gap-2 md:h-5/6 w-full
          pb-0.5
          pl-3 pt-1
          overflow-x-scroll
          "
          >
            {Object.entries(furniture_category).map(([key, value]) => (
              <button
                key={key}
                className="
         
              hover:bg-white/90
              hover:text-black/90
              bg-black/30
              rounded-md
              md:w-auto
              md:px-0
              px-6
              py-0.5
              whitespace-nowrap
              text-xs md:text-md
              transition-colors
              "
                onClick={handleSetModelOnClick()}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {/* Product choice */}
        <div className="md:w-2/3 md:pl-1 pt-1">
          <p className="md:h-1/6 pl-3 font-semibold text-xs md:text-md">
            Category's Product
          </p>
          <div
            className="
            md:h-5/6
            py-1 md:pb-3
            flex flex-row
            overflow-x-scroll
            overflow-hidden
            "
          >
            {LIST_FURNITURE.map((item) => (
              <div
                key={item.name}
                style={{ flexShrink: 0 }}
                className="w-[150px] h-[102px] bg-white flex justify-center rounded-md opacity-60 hover:opacity-100 py-3 md:py-6 ml-3 group-hover:border group-hover:border-gray-300 transition-opacity duration-500"
                onClick={() => handleSetModelOnClick(item)}
              >
                <img src={item.img_url} alt={item.name} className="h-[60px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
