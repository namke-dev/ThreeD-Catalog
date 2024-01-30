import React from "react";

export default function HomePageCart({ children, props, className }) {
  return (
    <div
      {...props}
      className={`
        md:px-5 py-2
        ${className}`}
    >
      {children}
    </div>
  );
}
