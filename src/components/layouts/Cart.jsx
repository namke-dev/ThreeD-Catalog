import React from "react";

export default function Cart({ className, children, ...props }) {
  return (
    <div
      {...props}
      className={`
      bg-white/50
      text-black/70
      hover:bg-white/95
      
      p-0 m-0
      
      rounded-3xl
      cursor-pointer
      
      transition-all
      duration-300
      ease-in-out
      ${className}`}
    >
      {children}
    </div>
  );
}
