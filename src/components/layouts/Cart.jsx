import React from "react";

export default function Cart({ className, children, ...props }) {
  return (
    <div
      {...props}
      className={`
      bg-white/50
      text-black/70
      hover:bg-white/100
      md:hover:scale-105
      
      transition-all
      duration-300
      ease-in-out
      ${className}`}
    >
      {children}
    </div>
  );
}
