import React from "react";
import HomePageIntro from "@/components/layouts/HomePageIntro";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";

export default function Home() {
  return (
    <Layout>
      <HomePageIntro />
      <HomePageCart className="col-span-2 bg-yellow-100 h-[300px]">
        Feature demo
      </HomePageCart>

      <HomePageCart className="col-span-2 bg-green-100 h-[300px]">
        News
      </HomePageCart>

      <HomePageCart className="col-span-2 bg-orange-100 h-[300px]">
        Charge Plant
      </HomePageCart>
    </Layout>
  );
}
