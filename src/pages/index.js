import React, { useEffect } from "react";
import HomePageIntro from "@/components/layouts/HomePageIntro";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import { news_data } from "@/data/news_data";
import ReviewNewsList from "@/components/layouts/ReviewNewsList";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import useWindowDimensions from "@/helpers/WindowSizeHelper";

export default function Home() {
  const meta_script =
    "Với dịch vụ của chúng tôi, sản phẩm của bạn sẽ được biến hoá, trình bài một cách sinh động Hãy cùng Katalog 3D khám phá mô hình sản phẩm trong không gian 3 chiều";
  useEffect(() => {
    document.title = "Katalog 3D - Thiết kế catalogue ba chiều";
    const metaDescriptionTag = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = meta_script;
    } else {
      const newMetaTag = document.createElement("meta");
      newMetaTag.name = "description";
      newMetaTag.content = meta_script;
      document.head.appendChild(newMetaTag);
    }
  }, []);
  const { width } = useWindowDimensions() || {};

  return (
    <Layout>
      {/* intro */}
      <HomePageIntro />

      <HomeTitle>Dịch vụ của chúng tôi</HomeTitle>

      <HomePageCart
        className="col-span-2 flex items-center 
        justify-center md:justify-start overflow-x-auto w-full"
      >
        <div className="flex flex-col md:flex-row gap-10 my-5 mx-20  w-full">
          <FeatureCart imageUrl={"/images/new1_img2.png"}>
            Tin tức về thiết kế
          </FeatureCart>
          <FeatureCart imageUrl={"/images/new1_img3.png"}>
            Website design
          </FeatureCart>
          <FeatureCart imageUrl={"/images/new1_img1.png"}>
            Thiết kế Catalog
          </FeatureCart>
          <FeatureCart imageUrl={"/images/new2_img2.png"}>
            Thiết kế model 3D
          </FeatureCart>
        </div>
      </HomePageCart>

      {/* New */}
      <Link href={"/tin-tuc"} className="group" title="Xem tin tức mới nhất">
        <HomeTitle>Tin tức</HomeTitle>
      </Link>
      <HomePageCart
        className="col-span-2 
        flex justify-center"
      >
        <div
          className="flex flex-row gap-1.5
            max-w-[88%] overflow-x-scroll"
        >
          <div className="w-full py-8 relative">
            {width > 768 ? (
              <ReviewNewsList newsList={news_data} isHorizontal={true} />
            ) : (
              <ReviewNewsList newsList={news_data} isHorizontal={false} />
            )}
          </div>
        </div>
      </HomePageCart>

      {/* Charges Plan */}
      <HomeTitle>Các gói dịch vụ</HomeTitle>

      <HomePageCart
        className="col-span-2 flex items-center 
      justify-center md:justify-start overflow-x-auto w-full"
      >
        <div className="flex flex-col md:flex-row gap-10 my-5 mx-20  w-full">
          <FeatureCart imageUrl={"/images/new2_img1.png"}>
            Gói cơ bản
          </FeatureCart>
          <FeatureCart imageUrl={"/images/new2_img3.png"}>
            Gói cao cấp
          </FeatureCart>
          <FeatureCart imageUrl={"/images/new2_img4.png"}>
            Gới hỗ trợ đầy đủ
          </FeatureCart>
        </div>
      </HomePageCart>
    </Layout>
  );
}

function FeatureCart({ children, imageUrl }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(100%)",
  };
  return (
    <div
      className="py-20 w-auto
      px-10
      flex
      justify-center items-center 
      rounded-2xl
      uppercase
      text-lg
      hover:scale-110
      duration-500
      transition-transform
      hover:text-white
      "
      style={backgroundImageStyle}
    >
      <div className="dark:bg-neutral-800/50 bg-white/70 rounded-2xl w-full h-full absolute top-0 z-30"></div>
      <div className="z-30 font-bold font-sans dark:text-neutral-100 text-neutral-900">
        {children}
      </div>
    </div>
  );
}

function HomeTitle({ children }) {
  return (
    <div className="mt-20 flex flex-row">
      <p
        className="text-3xl 
        ml-24
        text-amber-500
        dark:text-amber-400
        font-mono font-semibold
        flex flex-row"
      >
        {children}
      </p>
      <FaAngleRight
        className="mt-2 ml-2
        text-amber-500
        dark:text-amber-400
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
