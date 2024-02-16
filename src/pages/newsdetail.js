import HomePageCart from "@/components/layouts/HomePageCart";
import Layout from "@/components/layouts/Layout";
import NewsCard from "@/components/layouts/NewsCart";
import { news_data } from "@/data/news_data";
import { useRouter } from "next/router";
import React from "react";

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const news = news_data.find((news) => news.id == id);

  // Check if news is undefined before accessing its properties
  if (!news) {
    // Handle the case when news is not found
    return (
      <Layout>
        <p>News not found</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <img src="images/news-header.jpg" className="brightness-50 opacity-70" />
      <h1
        className="text-6xl font-bold mb-8 text-amber-500 font-serif 
        ml-10 relative -top-80 h-0 left-20"
      >
        News detail
      </h1>
      <HomePageCart
        className="bg-neutral-700/90
        relative -top-60 z-10 text-gray-200 m-14 py-10"
      >
        <NewsCard key={news.id} news={news} isExpanded={true} />
      </HomePageCart>
    </Layout>
  );
}
