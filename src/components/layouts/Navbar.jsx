import React from "react";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="flex flex-row flex-wrap items-center justify-start bg-black/80 text-gray-300 text-sm px-3 py-0.5 gap-5">
        <button>Market Rrend</button>
        <button>Time Series Data</button>
      </div>
    </header>
  );
}
