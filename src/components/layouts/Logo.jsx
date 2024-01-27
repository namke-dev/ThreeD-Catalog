import React from "react";

export default function Logo({ className, children, ...props }) {
  return (
    <div
      {...props}
      className={`
      md:my-1
      md:mx-2
      md:px-4
      px-2 py-1
      rounded-sm
      flex flex-col items-center justify-center
      ${className}
      `}
    >
      <p className="md:text-lg font-semibold">D3 CATALOG</p>
      <p className="text-xs font-thin">namke group</p>
      {children}
    </div>
  );
}
