import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import React from "react";

export default function Layout({ children, className }) {
  return (
    <div
      className={`bg-gradient-to-b from-zinc-800 via-zinc-800 to-zinc-950 ${className}`}
    >
      <Navbar />
      <div className="max-w-[1400px] m-auto md:pt-16 md:pb-20">{children}</div>
      <Footer />
    </div>
  );
}
