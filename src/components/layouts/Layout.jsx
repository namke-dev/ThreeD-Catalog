import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import React from "react";

export default function Layout({ children, className }) {
  return (
    <div
      className={`bg-gradient-to-r from-zinc-800 via-neutral-800 to-stone-900 ${className}`}
    >
      <Navbar />
      <div className="max-w-[1400px] m-auto md:pt-16 md:pb-20">{children}</div>
      <Footer />
    </div>
  );
}
