import React from "react";
import ShowcaseProductInfo from "./ShowcaseProductInfo";
import Logo from "./Logo";
import ShowcaseCustomProduct from "./ShowcaseCustomProduct";
import ShowcaseFooter from "./ShowcaseFooter";

export default function ShowcaseLayout() {
  return (
    <>
      <Logo
        className="absolute
        top-1
        -translate-x-1/2
        md:translate-x-0
        left-1/2
        md:top-1 md:left-1

        bg-white/5
        text-white/95
        hover:bg-white/50
        hover:text-black/60

        transition-all
        hover:scale-105
        ease-in-out
        duration-300 
        "
      />
      <ShowcaseProductInfo />
      <ShowcaseCustomProduct />
      <ShowcaseFooter />
    </>
  );
}
