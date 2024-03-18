import React from "react";
import Layout from "@/components/layouts/Layout";
import NewsList from "@/components/layouts/NewsList";
import { news_data } from "@/data/news_data";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";
import HomePageCart from "@/components/layouts/HomePageCart";
import PageHeader from "@/components/layouts/PageHeader";

export default function News() {
  const related_post = news_data.filter((item) => item.category === "");
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
          <div
            className="w-2/3 py-8 pl-8 relative 
            flex flex-col"
          >
            <div className="text-2xl mb-6 pl-4">Tin tức </div>
            <div className="overflow-y-auto ">
              <NewsList
                newsList={news_data}
                isExpanded={false}
                className="h-[700px]"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 py-8 pr-8  gap-3">
            <div className="text-2xl mb-3 pl-4">Tin tức khác</div>
            <div className="relative flex flex-col overflow-y-auto">
              <ReviewNewsList newsList={news_data} className="h-[700px]" />
            </div>
          </div>
        </div>
      </HomePageCart>
    </Layout>
  );
}
