import React from "react";
import HomePageCart from "./HomePageCart";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import useWindowDimensions from "@/helpers/WindowSizeHelper";

export default function HomePageIntro() {
  const { width } = useWindowDimensions() || {};

  return (
    <div className=" md:mt-2">
      {/* background */}
      <div
        className="absolute 
        w-full max-w-[1400px] opacity-5 z-10 
        md:mt-5 md:-ml-24"
      >
        <div
          className="h-[680px] w-[680px] rounded-full
         dark:bg-white/50 bg-black/50"
        ></div>
      </div>

      <HomePageCart
        className="flex flex-col md:flex-row w-full 
        font-semibold
        z-20 md:h-auto h-[110vh]"
      >
        <div className="md:w-1/2 flex justify-center z-20 md:pr-20 md:h-[95vh]">
          <img
            src="/images/homepage_img.jpg"
            alt="A scenic view of virtual world"
            className="
            md:static absolute
            h-[100vh] md:h-[80vh] md:mt-6 md:rounded-[10px] shadow-2xl 
            dark:shadow-gray-950
            shadow-zinc-700"
            loading="lazy"
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
        <div className="flex flex-col md:w-1/2 md:mx-14 mx-8 z-20  md:mt-30 mt-36 md:mt-10">
          <h4
            className="text-5xl md:text-5xl 
            text-amber-800          
            dark:text-neutral-300          
            font-medium font-sans"
          >
            Chào mừng bạn đến với{" "}
          </h4>
          <h2
            className="
              text-5xl md:text-6xl 
              text-amber-600
              dark:text-amber-400 font-mono font-semibold pt-6"
          >
            Katalog 3D
          </h2>
          <div
            className="w-full text-lg md:text-justify md:mt-24 mt-12 mb-14 pl-14
          flex flex-col gap-4"
          >
            <h2
              className="font-medium text-2xl mb-2 
              text-amber-600
              dark:text-amber-400"
            >
              Với dịch vụ của chúng tôi, sản phẩm của bạn sẽ được biến hoá,
              trình bài một cách sinh động
            </h2>
            <h2>
              Hãy cùng Katalog 3D khám phá mô hình sản phẩm trong không gian 3
              chiều
            </h2>
          </div>

          <Link href="/show-case" alt="check out our catalog showcase">
            <div
              className="h-[75px] px-10
              dark:text-white/90
              dark:hover:bg-amber-500

              bg-amber-400
              dark:bg-amber-500/85

              text-amber-900
              dark:text-white
              flex flex-row items-center justify-center
              group
              rounded-lg
              ml-10
              w-[320px]"
            >
              <button
                className="
                md:-translate-x-2
                md:group-hover:translate-x-0                
                transition-transform
                rounded-md
                font-sans
                group-hover:text-black
                text-sm md:text-xl
                font-bold"
              >
                KHÁM PHÁ CATALOG 3D
              </button>
              <FaAngleRight
                className="mt-0.5 -mr-60 absolute 
                group-hover:translate-x-4 transition
                scale-0 md:scale-100
                text-2xl
                md:group-hover:scale-125
                md:group-hover:opacity-50
                group-hover:text-black"
              />
            </div>
          </Link>
        </div>
      </HomePageCart>
    </div>
  );
}
