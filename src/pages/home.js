import React from "react";
import HomePageIntro from "@/components/layouts/HomePageIntro";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import NewsList from "@/components/layouts/NewsList";
import { news_data } from "@/data/news_data";

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
      <HomePageCart className="col-span-2 bg-green-100">
        <div className="text-2xl">News</div>
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Latest News</h1>
          <NewsList newsList={news_data} />
        </div>
      </HomePageCart>

      {/* Charge plant */}
      <HomePageCart className="col-span-2 bg-orange-100 h-[300px]">
        Charge Plant
      </HomePageCart>
    </Layout>
  );
}
