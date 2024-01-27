import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import React from "react";
import HomePageIntro from "@/components/layouts/HomePageIntro";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-sky-100 via-slate-200 to-gray-100">
      <Navbar />
      <Footer />
    </div>
  );
}
