import { useRouter } from "next/router";
import HomePageCart from "@/components/layouts/HomePageCart";
import Layout from "@/components/layouts/Layout";
import NewsCard from "@/components/layouts/NewsCart";
import { news_data } from "@/data/news_data";
import React, { useEffect } from "react";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";

export default function NewsDetail() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(`==>  ${slug}`);

  const news = news_data.find((news) => news.id === slug);

  useEffect(() => {
    if (news) {
      document.title = news.key_word;

      const metaDescriptionTag = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = news.meta_script;
      } else {
        const newMetaTag = document.createElement("meta");
        newMetaTag.name = "description";
        newMetaTag.content = news.meta_script;
        document.head.appendChild(newMetaTag);
      }
    }
  }, [news]);

  if (!news) {
    return (
      <Layout>
        <p>News not found</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <HomePageCart
        className="col-span-2 max-w-[1400px] 
        flex flex-col items-center 
        mx-auto relative"
      >
        <img src="/images/news-header.jpg" className=" mt-10 opacity-90 px-8" />

        <div className="flex flex-row gap-1.5">
          <div className="w-2/3 py-8 pl-8 relative">
            <NewsCard key={news.id} news={news} isExpanded={true} />
          </div>
          <div className="w-1/3 py-8 pr-8 relative ">
            <ReviewNewsList newsList={news_data} />
          </div>
        </div>
      </HomePageCart>
    </Layout>
  );
}
