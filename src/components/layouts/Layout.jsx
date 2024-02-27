import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function Layout({ children, className }) {
  return (
    <div
      className={`
      dark:bg-gradient-to-b dark:from-zinc-800/95 dark:via-zinc-800 dark:to-zinc-900
      bg-gradient-to-br from-stone-300/50 via-amber-500/15 to-yellow-600/30
      text-black/80
      dark:text-white/80 ${className}`}
    >
      <Navbar />
      <div className="max-w-[1400px] m-auto md:pt-10 md:pb-20">{children}</div>
      <Footer />
      {/* <ThemeSwitch /> */}
    </div>
  );
}
