import React from "react";

export default function Logo({ className, children, ...props }) {
  return (
    <div
      {...props}
      className={`
      h-full
      md:mx-2
      md:px-7
      px-2
      m-auto
      flex flex-col items-center justify-center
      dark:text-white/80
      text-black/60
      hover:text-amber-600
      bg-amber-50/90
      
      dark:bg-zinc-700/90
      rounded-3xl
      transition-colors
      shadow-md
      dark:shadow-zinc-800
      ${className}
      `}
    >
      <p className="md:text-xl font-bold">3D KATALOG</p>
      {/* {width >= 786 && <p className="text-xs font-thin">DHMA team</p>} */}

      {children}
    </div>
  );
}
