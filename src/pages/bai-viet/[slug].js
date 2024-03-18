import { useRouter } from "next/router";
import HomePageCart from "@/components/layouts/HomePageCart";
import Layout from "@/components/layouts/Layout";
import NewsCard from "@/components/layouts/NewsCart";
import { news_data } from "@/data/news_data";
import React, { useEffect, useState } from "react";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";

export default function NewsDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const targetNews = news_data.find((news) => news.id === slug);
  const [related_post, setRelated_post] = useState([]);

  useEffect(() => {
    if (targetNews) {
      document.title = targetNews.key_word;

      const metaDescriptionTag = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = targetNews.meta_script;
      } else {
        const newMetaTag = document.createElement("meta");
        newMetaTag.name = "description";
        newMetaTag.content = targetNews.meta_script;
        document.head.appendChild(newMetaTag);
      }
    }
    if (targetNews) {
      setRelated_post(
        news_data.filter((item) => item.category === targetNews.category)
      );
    }
  }, [targetNews]);

  if (!targetNews) {
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
            <NewsCard key={targetNews.id} news={targetNews} isExpanded={true} />
          </div>
          <div className="flex flex-col w-1/3 py-8 pr-8  gap-10">
            {related_post.length > 0 && (
              <div className=" relative flex flex-col overflow-y-auto">
                <div className="text-2xl mb-3 pl-4">Tin tức liên quan</div>
                <ReviewNewsList newsList={related_post} className="h-[460px]" />
              </div>
            )}

            <div className="relative flex flex-col overflow-y-auto">
              <div className="text-2xl mb-3 pl-4">Tin tức khác</div>
              <ReviewNewsList newsList={news_data} className="h-[700px]" />
            </div>
          </div>
        </div>
      </HomePageCart>
    </Layout>
  );
}
