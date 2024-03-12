import { Router, useRouter } from "next/router";
import React from "react";

const NewsCard = ({ news, isExpanded, className }) => {
  const router = useRouter();

  return (
    <div
      className={`text-gray-800 border-2 border-zinc-600/20
      bg-neutral-100/90
      rounded-md pt-10 pb-12 md:px-16 mb-0
      max-w-[1200px] ${className}`}
      onClick={() => router.push(`/newsdetail/?id=${news.id}`)}
    >
      <h1 className="text-3xl font-bold mb-2 text-amber-800">{news.title}</h1>
      <div className="flex flex-row gap-2 font-thin mb-5 ml-5">
        <p>Published on {news.date}, </p>
        <p>Category - {news.category}</p>
      </div>

      <h2
        className="
        text-gray-600 font-medium 
        border-l-2 border-gray-500 pl-5 ml-5
        text-justify whitespace-pre-line "
      >
        {news.summary}
      </h2>
      <div className="flex items-center justify-center pt-10">
        <img src={news.img_url} className="max-h-[400px] rounded-xl"></img>
      </div>
      <p className="flex items-center justify-center pb-10 font-thin italic">
        {news.title}
      </p>
      {isExpanded && (
        <p
          className="font-normal whitespace-pre-line text-justify pb-16"
          dangerouslySetInnerHTML={{ __html: news.content }}
        ></p>
      )}
    </div>
  );
};

export default NewsCard;
