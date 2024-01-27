import React from "react";
import HomePageCart from "./HomePageCart";
import { FaAngleRight } from "react-icons/fa";

export default function HomePageIntro() {
  return (
    <div className="p-2">
      <div className="grid grid-cols-2">
        <HomePageCart className="h-[500px]">
          Car1
          <div>Model place holder</div>
        </HomePageCart>
        <HomePageCart className="">
          <div className="text-3xl">Home Style</div>
          <div>
            We present our <span>Modern funiture</span>
          </div>
          <div>Go to catolog</div>
          <button
            className="px-4 py-2 
            bg-blue-200 
            text-gray-80000
            hover:text-white text-xl
            font-medium rounded-2xl
          flex items-center justify-center
          w-[120px]
          group
          hover:bg-blue-400
          "
          >
            GO
            <FaAngleRight
              className="mt-0.5 -mr-14 absolute group-hover:translate-x-4 opacity-60 transition
              scale-0 md:scale-100 
              md:group-hover:scale-125
              md:group-hover:opacity-25"
            />
          </button>
        </HomePageCart>

        <HomePageCart className="col-span-2 bg-yellow-100 h-[300px]">
          Feature demo
        </HomePageCart>

        <HomePageCart className="col-span-2 bg-green-100 h-[300px]">
          News
        </HomePageCart>

        <HomePageCart className="col-span-2 bg-orange-100 h-[300px]">
          Charge Plant
        </HomePageCart>
      </div>
    </div>
  );
}
