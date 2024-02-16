import React from "react";

export default function HomePageCart({ children, props, className }) {
  return (
    <div
      {...props}
      className={`
        md:px-5 md:pt-10 md:pb-20
        
        ${className}`}
    >
      {children}
    </div>
  );
}
