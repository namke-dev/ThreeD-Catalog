import React from "react";
import ShowcaseProductInfo from "./ShowcaseProductInfo";
import Logo from "./Logo";
import ShowcaseCustomProduct from "./ShowcaseCustomProduct";
import ShowcaseFooter from "./ShowcaseFooter";

export default function ShowcaseLayout() {
  return (
    <>
      <Logo />
      <ShowcaseProductInfo />
      <ShowcaseCustomProduct />
      <ShowcaseFooter />
    </>
  );
}
