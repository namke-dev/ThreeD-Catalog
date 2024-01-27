import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import React from "react";
import HomePageIntro from "@/components/layouts/HomePageIntro";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePageIntro />
      <Footer />
    </div>
  );
}
