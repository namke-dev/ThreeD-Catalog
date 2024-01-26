import React from "react";
import ProductInfo from "./ProductInfo";
import Logo from "./Logo";
import ControlPanel from "./ControlPanel";
import Footer from "./Footer";

export default function OverlayLayout() {
  return (
    <>
      <Logo />
      <ProductInfo />
      <ControlPanel />
      <Footer />
    </>
  );
}
