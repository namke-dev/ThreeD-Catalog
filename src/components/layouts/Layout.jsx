import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function Layout({ children, className }) {
  return (
    <div
      className={`
      dark:bg-gradient-to-b dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-950
      bg-gradient-to-br from-gray-100 via-amber-300/10 to-neutral-100
      text-black/80
      dark:text-white/80 ${className}`}
    >
      <Navbar />
      <div className="max-w-[1400px] m-auto md:pt-10 md:pb-20">{children}</div>
      <Footer />
      <ThemeSwitch />
    </div>
  );
}
