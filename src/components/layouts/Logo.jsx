import Link from "next/link";
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
      <Link href="/">
        <p className="md:text-lg font-semibold">3D CATALOG</p>
        <p className="text-xs font-thin">DHMA team</p>
        {children}
      </Link>
    </div>
  );
}
