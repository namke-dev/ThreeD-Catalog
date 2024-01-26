import React from "react";
import ProductInfo from "./ProductInfo";
import Logo from "./Logo";
import ProductCustomPanel from "./ProductCustomPanel";
import Footer from "./Footer";

export default function OverlayLayout() {
  return (
    <>
      <Logo />
      <ProductInfo />
      <ProductCustomPanel />
      <Footer />
    </>
  );
}
