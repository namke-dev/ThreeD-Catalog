import React from "react";
import ShowcaseProductInfo from "./ShowcaseProductInfo";
import ShowcaseCustomProduct from "./ShowcaseCustomProduct";
import ShowcaseFooter from "./ShowcaseFooter";
import Navbar from "./Navbar";

export default function ShowcaseLayout() {
  return (
    <div className="max-w-[1400px] mx-auto absolute top-0 left-0 z-50">
      <Navbar />
      <ShowcaseProductInfo />
      <ShowcaseCustomProduct />
      <ShowcaseFooter />
    </div>
  );
}
