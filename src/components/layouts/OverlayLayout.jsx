import React from "react";
import ProductInfo from "./ProductInfo";
import Logo from "./Logo";
import CustomProductPanel from "./CustomProductPanel";
import Footer from "./Footer";

export default function OverlayLayout() {
  return (
    <>
      <Logo />
      <ProductInfo />
      <CustomProductPanel />
      <Footer />
    </>
  );
}
