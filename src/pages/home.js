import React from "react";
import HomePageIntro from "@/components/layouts/HomePageIntro";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import { news_data } from "@/data/news_data";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import useWindowDimensions from "@/helpers/WindowSizeHelper";

export default function Home() {
  const { width } = useWindowDimensions() || {};

  return (
    <Layout>
      {/* intro */}
      <HomePageIntro />

      <HomeTitle>App Feature</HomeTitle>

      <HomePageCart
        className="col-span-2 flex items-center 
        justify-center md:justify-start overflow-x-auto w-full"
      >
        <div className="flex flex-col md:flex-row gap-10 my-5 mx-20  w-full">
          <FeatureCart>Latest industry's news</FeatureCart>
          <FeatureCart>Website design</FeatureCart>
          <FeatureCart>Brading design</FeatureCart>
          <FeatureCart>Scan funiture to 3d model</FeatureCart>
        </div>
      </HomePageCart>

      {/* New */}
      <Link href={"/news"} className="group">
        <HomeTitle>Lastest News</HomeTitle>
      </Link>
      <HomePageCart
        className="col-span-2 
        flex justify-center"
      >
        <div
          className="flex flex-row gap-1.5
            max-w-[88%] overflow-x-scroll"
        >
          <div className="w-full py-8 bg-black/5 relative">
            {width > 768 ? (
              <ReviewNewsList newsList={news_data} isHorizontal={true} />
            ) : (
              <ReviewNewsList newsList={news_data} isHorizontal={false} />
            )}
          </div>
        </div>
      </HomePageCart>

      {/* Charges Plan */}
      <HomeTitle>Charges Plan</HomeTitle>

      <HomePageCart
        className="col-span-2 flex items-center 
      justify-center md:justify-start overflow-x-auto w-full"
      >
        <div className="flex flex-col md:flex-row gap-10 my-5 mx-20  w-full">
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

function HomeTitle({ children }) {
  return (
    <div className="mt-20 flex flex-row">
      <p
        className="text-3xl 
        ml-24
      text-amber-500 font-mono font-semibold
        flex flex-row"
      >
        {children}
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
    </div>
  );
}
