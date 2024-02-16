import useWindowDimensions from "@/helpers/WindowSizeHelper";
import Link from "next/link";
import React from "react";

export default function Logo({ className, children, ...props }) {
  const { width } = useWindowDimensions() || {};

  return (
    <div
      {...props}
      className={`
      md:mx-2
      md:px-4
      px-2 
      rounded-sm
      flex flex-col items-center justify-center
      hover:text-amber-600
      ${className}
      `}
    >
      <Link href="/home">
        <p className="md:text-lg font-semibold">3D CATALOG</p>
        {width >= 786 && <p className="text-xs font-thin">DHMA team</p>}

        {children}
      </Link>
    </div>
  );
}
