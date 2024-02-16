import React from "react";
import HomePageCart from "./HomePageCart";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import useWindowDimensions from "@/helpers/WindowSizeHelper";

export default function HomePageIntro() {
  const { width } = useWindowDimensions() || {};

  return (
    <div className=" md:mt-8">
      {/* background */}
      <div className="absolute w-full max-w-[1400px] opacity-10 z-10 md:-mt-10 md:-ml-28">
        <img
          src="/textures/Wood_gray.jpg"
          alt="placeholder"
          className="h-[100vh] rounded-[500px]"
        />
      </div>

      <HomePageCart className="flex flex-col md:flex-row w-full text-zinc-300 z-20 md:h-auto h-[110vh]">
        <div className="md:w-1/2 flex justify-center z-20 md:pr-20 md:h-[95vh] mt-[50px] md:mt-0">
          <img
            src="/images/homepage_img.jpg"
            alt="placeholder"
            className="
            md:static absolute
            h-[100vh] md:h-[82vh] md:mt-6 md:rounded-[10px] shadow-2xl shadow-gray-950
            "
          />
          {width > 768 ? (
            ""
          ) : (
            <div
              className="absolute
            h-[100vh] md:h-[82vh] w-[100%] md:mt-6 md:rounded-[10px] bg-black/70"
            />
          )}
        </div>
        <div className="flex flex-col pl-8 md:w-1/2 mr-20 z-20  md:mt-30 mt-12 md:mt-10">
          <div
            className="text-6xl text-amber-700          
           font-thin font-sans"
          >
            We present your{" "}
            <div className="text-amber-500 font-mono font-semibold pt-6">
              Designed funiture
            </div>
          </div>
          <div
            className="w-full text-lg md:text-justify mt-24 mb-14 pl-14
          flex flex-col gap-4"
          >
            <p className="font-medium mb-2 text-amber-500">
              Virtual Reality Showroom - Where Style Meets Innovation!
            </p>
            <p>
              We offered services in presenting desinged funiture through our
              crafted catalog - A classic design with modern technology.
            </p>
          </div>

          <Link href="/show-case">
            <button
              className="h-[60px] px-10
              border-2 border-amber-500
              text-amber-500
              hover:bg-amber-500
              flex flex-row items-center justify-center
              group
              rounded-lg
              ml-10
            "
            >
              <span
                className="
                md:-translate-x-2
                md:group-hover:translate-x-0                
                transition-transform
                font-medium rounded-md
                font-sans
                group-hover:text-black
                text-sm md:text-lg"
              >
                GO TO SHOWCASE
              </span>
              <FaAngleRight
                className="mt-0.5 -mr-48 absolute 
                group-hover:translate-x-4 transition
                scale-0 md:scale-100
                text-2xl
                md:group-hover:scale-125
                md:group-hover:opacity-50
                group-hover:text-black"
              />
            </button>
          </Link>
        </div>
      </HomePageCart>
    </div>
  );
}
