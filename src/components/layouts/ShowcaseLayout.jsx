import React from "react";
import ShowcaseProductInfo from "./ShowcaseProductInfo";
import ShowcaseCustomProduct from "./ShowcaseCustomProduct";
import ShowcaseFooter from "./ShowcaseFooter";

export default function ShowcaseLayout() {
  return (
    <>
      <ShowcaseProductInfo />
      <ShowcaseCustomProduct />
      <ShowcaseFooter />
    </>
  );
}
