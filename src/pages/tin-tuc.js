import React from "react";
import Layout from "@/components/layouts/Layout";
import NewsList from "@/components/layouts/NewsList";
import { news_data } from "@/data/news_data";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";
import HomePageCart from "@/components/layouts/HomePageCart";
import PageHeader from "@/components/layouts/PageHeader";

export default function News() {
  return (
    <Layout className="!bg-white/90">
      {/* <PageHeader>Tin Tức</PageHeader> */}
      <HomePageCart
        className="col-span-2 max-w-[1400px] 
        flex flex-col items-center 
        mx-auto relative"
      >
        <img src="images/news-header.jpg" className=" mt-10 opacity-90 px-8" />

        <div className="flex flex-row gap-1.5">
          <div className="w-2/3 py-8 pl-8 relative">
            <NewsList newsList={news_data} isExpanded={false} />
          </div>
          <div className="w-1/3 py-8 pr-8 relative ">
            <ReviewNewsList newsList={news_data} />
          </div>
        </div>
      </HomePageCart>
    </Layout>
  );
}
