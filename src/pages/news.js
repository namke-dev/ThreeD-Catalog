import React from "react";
import Layout from "@/components/layouts/Layout";
import NewsList from "@/components/layouts/NewsList";
import { news_data } from "@/data/news_data";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";

export default function News() {
  return (
    <Layout className="bg-gradient-to-r from-zinc-800 to-slate-800">
      <img src="images/news-header.jpg" className="brightness-50" />
      <h1 className="text-6xl font-bold mb-8 text-amber-500 font-serif ml-10 relative -top-[50vh] h-0 left-[32vw]">
        LASTEST NEWS
      </h1>
      <div className="flex flex-row gap-5">
        <div className="w-2/3 py-8 pl-8 bg-black/5 relative -top-72">
          <NewsList newsList={news_data} isExpanded={false} />
        </div>
        <div className="w-1/3 py-8 pr-8 bg-black/5 relative -top-72">
          <ReviewNewsList newsList={news_data} />
        </div>
      </div>
    </Layout>
  );
}
