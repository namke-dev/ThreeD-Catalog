import React from "react";
import HomePageIntro from "@/components/layouts/HomePageIntro";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import NewsList from "@/components/layouts/NewsList";
import { news_data } from "@/data/news_data";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

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
      <Link href={"/news"} className="flex flex-row mt-20 group w-auto">
        <p
          className="text-3xl 
           ml-24
           text-amber-500 font-mono font-semibold"
        >
          Today's News
        </p>
        <FaAngleRight
          className="mt-2 ml-2
          text-amber-500
          group-hover:translate-x-4 opacity-90 transition
          scale-0 md:scale-100
          text-2xl
          md:group-hover:scale-125
          md:group-hover:opacity-50
          "
        />
      </Link>
      <HomePageCart
        className="col-span-2 
        flex justify-center"
      >
        <div
          className="flex flex-row gap-1.5
            max-w-[88%] overflow-x-scroll"
        >
          <div className="w-full py-8 pr-8 bg-black/5 relative">
            <ReviewNewsList newsList={news_data} isHorizontal={true} />
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
