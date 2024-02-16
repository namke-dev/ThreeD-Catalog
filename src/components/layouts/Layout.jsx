import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import React from "react";

export default function Layout({ children, className }) {
  return (
    <div
      className={`bg-gradient-to-b from-zinc-700 via-zinc-800 to-gray-800 ${className}`}
    >
      <Navbar />
      <div className="max-w-[1400px] m-auto md:pt-16 md:pb-20">{children}</div>
      <Footer />
    </div>
  );
}
