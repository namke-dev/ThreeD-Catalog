import React from "react";
import HomePageIntro from "@/components/layouts/HomePageIntro";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";

export default function Home() {
  return (
    <Layout>
      {/* intro */}
      <HomePageIntro />

      {/* Feature */}
      <HomePageCart className="col-span-2 bg-yellow-100 h-[300px]">
        Feature demo: Website design; Brading design consultant; Scan funiture
        to 3d model;
      </HomePageCart>

      {/* New */}
      <HomePageCart className="col-span-2 bg-green-100 h-[300px]">
        News
      </HomePageCart>

      {/* Charge plant */}
      <HomePageCart className="col-span-2 bg-orange-100 h-[300px]">
        Charge Plant
      </HomePageCart>
    </Layout>
  );
}
