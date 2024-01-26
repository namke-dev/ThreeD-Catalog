import React from "react";

export default function Cart({ className, children, ...props }) {
  return (
    <div
      {...props}
      className={`
      bg-white/50
      text-black/70
      p-1 md:p-3 
      hover:bg-white/95

      rounded-3xl
      md:mx-2
      
      transition-all
      duration-300
      ease-in-out
      ${className}`}
    >
      {children}
    </div>
  );
}
