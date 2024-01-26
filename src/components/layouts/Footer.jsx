import React from "react";

export default function Footer() {
  return (
    <div
      className=" 
        w-full h-[16vh]
        
        fixed bottom-0
        bg-white/95
        text-black/70

        flex flex-row
        "
    >
      <div className="text-3xl">Hello</div>
      <div className="text-3xl">, Footer!</div>
    </div>
  );
}
