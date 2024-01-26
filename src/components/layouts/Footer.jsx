import React from "react";

export default function Footer() {
  return (
    <div
      className=" 
        w-full h-[25vh]
        flex justify-center items-center fixed bottom-0
        bg-white/95
        text-black/70
        "
    >
      <div className="text-3xl">Hello</div>
      <div className="text-3xl">, Footer!</div>
    </div>
  );
}
