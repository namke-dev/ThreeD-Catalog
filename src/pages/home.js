import React from "react";
import HomePageIntro from "@/components/layouts/HomePageIntro";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import { news_data } from "@/data/news_data";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      {/* intro */}
      <HomePageIntro />

      {/* Feature */}
      <Link
        href={"/news"}
        className="flex md:flex-row flex-col mt-20 group w-auto"
      >
        <p
          className="text-3xl 
           ml-24
           text-amber-500 font-mono font-semibold"
        >
          Feature
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
      <HomePageCart className="col-span-2 flex items-center justify-center overflow-x-auto">
        <div className="flex flex-row gap-10 mt-5">
          <FeatureCart>Latest industry's news</FeatureCart>
          <FeatureCart>Website design</FeatureCart>
          <FeatureCart>Brading design</FeatureCart>
          <FeatureCart>Scan funiture to 3d model</FeatureCart>
        </div>
      </HomePageCart>

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
      <Link
        href={"/news"}
        className="flex md:flex-row flex-col mt-20 group w-auto"
      >
        <p
          className="text-3xl 
           ml-24
           text-amber-500 font-mono font-semibold"
        >
          Charge Plans
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
      <HomePageCart className="col-span-2 flex items-center justify-center overflow-x-auto mb-32">
        <div className="flex flex-row gap-10 mt-5">
          <FeatureCart>$30 per month</FeatureCart>
          <FeatureCart>$300 per year</FeatureCart>
          <FeatureCart>$1,000 for life time</FeatureCart>
          <FeatureCart>$3,000 for full life time and Support</FeatureCart>
        </div>
      </HomePageCart>
    </Layout>
  );
}

function FeatureCart({ children }) {
  const backgroundImageStyle = {
    backgroundImage: `url('/images/news2.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(100%)",
  };
  return (
    <div
      className="py-20 w-auto
      px-10
     text-white
      flex
      justify-center items-center 
      rounded-2xl
      uppercase
      font-medium
      text-lg
      hover:scale-110
      duration-500
      transition-transform
      hover:text-amber-500
      "
      style={backgroundImageStyle}
    >
      <div className="bg-neutral-950/60 rounded-2xl w-full h-full absolute top-0"></div>
      <div className="z-30">{children}</div>
    </div>
  );
}
