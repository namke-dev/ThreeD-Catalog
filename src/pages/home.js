import React from "react";
import HomePageIntro from "@/components/layouts/HomePageIntro";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import NewsList from "@/components/layouts/NewsList";
import { news_data } from "@/data/news_data";

export default function Home() {
  return (
    <Layout className="bg-gradient-to-r from-zinc-800 via-neutral-800 to-slate-900">
      {/* intro */}
      <HomePageIntro />

      {/* Feature */}
      {/* <HomePageCart className="col-span-2 bg-yellow-100 h-[300px]">
        Feature demo: Website design; Brading design consultant; Scan funiture
        to 3d model;
      </HomePageCart> */}

      {/* New */}
      <HomePageCart className="col-span-2 ">
        <div className="container mx-auto md:p-8">
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
