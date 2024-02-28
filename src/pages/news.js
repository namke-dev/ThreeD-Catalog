import React from "react";
import Layout from "@/components/layouts/Layout";
import NewsList from "@/components/layouts/NewsList";
import { news_data } from "@/data/news_data";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";
import HomePageCart from "@/components/layouts/HomePageCart";
import PageHeader from "@/components/layouts/PageHeader";

export default function News() {
  return (
    <Layout>
      <img src="images/news-header.jpg" className="brightness-50 opacity-70" />
      <PageHeader>Lastest news</PageHeader>
      <HomePageCart
        className="col-span-2 max-w-[1400px] 
        flex items-center 
        mx-auto relative -top-60"
      >
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
