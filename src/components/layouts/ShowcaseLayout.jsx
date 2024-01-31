import React from "react";
import ShowcaseProductInfo from "./ShowcaseProductInfo";
import Logo from "./Logo";
import ShowcaseCustomProduct from "./ShowcaseCustomProduct";
import ShowcaseFooter from "./ShowcaseFooter";
import Navbar from "./Navbar";

export default function ShowcaseLayout() {
  return (
    <>
      <Navbar />
      <ShowcaseProductInfo />
      <ShowcaseCustomProduct />
      <ShowcaseFooter />
    </>
  );
}
