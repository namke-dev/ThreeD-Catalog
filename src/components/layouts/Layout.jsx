import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import React from "react";

export default function Layout({ children, className }) {
  return (
    <div className={className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
