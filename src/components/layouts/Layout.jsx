import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import React from "react";
// import ThemeSwitch from "./ThemeSwitch";
import MessengerBuble from "./MessengerBuble";
import HamburgerMenu from "./HamburgerMenu";

export default function Layout({ children, className }) {
  return (
    <div
      className={`
      dark:bg-gradient-to-b dark:from-zinc-800/95 dark:via-zinc-800 dark:to-zinc-900
      bg-gradient-to-br from-stone-300/20 via-amber-500/10 to-yellow-600/10
      text-black/80
      dark:text-white/80 ${className}`}
    >
      <Navbar />
      <div className="max-w-[1400px] m-auto md:pt-10 md:pb-20">{children}</div>
      <Footer />
      {/* <ThemeSwitch /> */}
      <MessengerBuble />
      <HamburgerMenu />
    </div>
  );
}
