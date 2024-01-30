import React from "react";
import HomePageCart from "./HomePageCart";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

export default function HomePageIntro() {
  return (
    <div className="">
      {/* background */}
      <div className="absolute top-20 w-full opacity-10 z-10">
        <img
          src="/textures/Wood_gray.jpg"
          alt="placeholder"
          className="h-[88vh] w-[50vw] pl-16 rounded-[500px]"
        />
      </div>

      <HomePageCart className="flex flex-row h-[95vh] w-full bg-zinc-800 text-zinc-300 z-20">
        <div className="h-auto w-1/2 flex justify-end pt-8 z-20 pr-20">
          <img
            src="/images/homepage6.jpg"
            alt="placeholder"
            className="h-[82vh] rounded-[10px] shadow-2xl shadow-gray-950"
          />
        </div>
        <div className="flex flex-col pl-8 w-1/2 mr-32 z-20 pr-20">
          <div
            className="text-6xl text-amber-700          
           font-thin font-sans mt-20"
          >
            We present your{" "}
            <div className="text-amber-500 font-mono font-semibold pt-6">
              Designed funiture
            </div>
          </div>
          <div className="w-full text-lg text-justify mt-14 mb-10 pl-14">
            Where Elegance Meets Innovation!
            <br /> At Finitude, we take pride in presenting our curated catalog,
            a symphony of timeless design and cutting-edge technology. Immerse
            yourself in a world where every piece tells a story, and every
            detail is meticulously crafted to elevate your living spaces.
          </div>

          <Link href="/show-case">
            <button
              className="h-[60px] px-10
              bg-amber-300
              text-gray-800
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
                group-hover:text-white
                text-sm md:text-lg"
              >
                GO TO SHOWCASE
              </span>
              <FaAngleRight
                className="mt-0.5 -mr-48 absolute 
                group-hover:translate-x-4 opacity-60 transition
                scale-0 md:scale-100
                text-xl
                md:group-hover:scale-125
                md:group-hover:opacity-50
                group-hover:text-white"
              />
            </button>
          </Link>
        </div>
      </HomePageCart>
    </div>
  );
}
