import React from "react";

export default function ShowcaseCart({ className, children, ...props }) {
  return (
    <div
      {...props}
      className={`
      text-black/70
      transition-all
      duration-300
      ease-in-out
      ${className}`}
    >
      {children}
    </div>
  );
}
