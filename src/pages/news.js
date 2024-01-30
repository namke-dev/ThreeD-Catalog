import React from "react";
import Layout from "@/components/layouts/Layout";
import NewsList from "@/components/layouts/NewsList";
import { news_data } from "@/data/news_data";

export default function News() {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Latest News</h1>
        <NewsList newsList={news_data} />
      </div>
    </Layout>
  );
}
