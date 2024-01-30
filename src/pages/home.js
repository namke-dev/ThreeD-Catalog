import React from "react";
import HomePageIntro from "@/components/layouts/HomePageIntro";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import NewsList from "@/components/layouts/NewsList";
import { news_data } from "@/data/news_data";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";

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
        <div className="flex flex-row gap-5">
          <div className="w-2/3 py-8 pl-8 bg-black/5 relative ">
            <NewsList newsList={news_data} isExpanded={false} />
          </div>
          <div className="w-1/3 py-8 pr-8 bg-black/5 relative ">
            <ReviewNewsList newsList={news_data} />
          </div>
        </div>
      </HomePageCart>

      {/* Charge plant */}
      <HomePageCart className="col-span-2 bg-orange-100 h-[300px]">
        Charge Plant
      </HomePageCart>
    </Layout>
  );
}
