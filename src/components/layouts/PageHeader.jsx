import React from "react";

export default function PageHeader({ children }) {
  return (
    <h1
      className="text-6xl font-bold mb-8 text-amber-500 font-serif 
      relative -top-80 h-0 ml-20"
    >
      {children}
    </h1>
  );
}
