import React from "react";
import Layout from "@/components/layouts/Layout";
import NewsList from "@/components/layouts/NewsList";
import { news_data } from "@/data/news_data";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";
import HomePageCart from "@/components/layouts/HomePageCart";

export default function News() {
  return (
    <Layout className="bg-gradient-to-r from-zinc-800 to-slate-800">
      <img src="images/news-header.jpg" className="brightness-50 opacity-70" />
      <h1
        className="text-6xl font-bold mb-8 text-amber-500 font-serif 
        ml-10 relative -top-80 h-0 left-20"
      >
        LASTEST NEWS
      </h1>
      <HomePageCart
        className="col-span-2 max-w-[1400px] 
        flex items-center 
        mx-auto relative -top-60"
      >
        <div className="flex flex-row gap-1.5">
          <div className="w-2/3 py-8 pl-8 bg-black/5 relative">
            <NewsList newsList={news_data} isExpanded={false} />
          </div>
          <div className="w-1/3 py-8 pr-8 bg-black/5 relative ">
            <ReviewNewsList newsList={news_data} />
          </div>
        </div>
      </HomePageCart>
    </Layout>
  );
}
