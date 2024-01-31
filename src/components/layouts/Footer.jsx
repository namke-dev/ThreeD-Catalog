import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-950">
      <div
        className="flex flex-col px-5 md:px-14 py-8 
         text-white/70 text-xs md:text-sm gap-0
        w-full max-w-[1400px] m-auto"
      >
        <p className="font-semibold pb-2 text-amber-500">
          3D CATALOG - DHMA Group
        </p>
        <p>Design by @namke.dev</p>
        <p className="pb-2">
          FEATURE: 3D Showcase, News, Payment, Authen, Resposinve On PC And
          Mobile
        </p>
        <p>
          Contact me via <span className="underline">namke.dev@gmail.com</span>
        </p>
      </div>
    </footer>
  );
}
