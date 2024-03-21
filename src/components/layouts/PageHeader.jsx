import React from "react";

export default function PageHeader({ children }) {
  return (
    <h1
      className="text-4xl font-bold mb-8 text-gray-900 
      relative ml-20 mt-20"
    >
      {children}
    </h1>
  );
}
