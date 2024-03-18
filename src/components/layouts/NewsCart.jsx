import { Router, useRouter } from "next/router";
import React from "react";

const NewsCard = ({ news, isExpanded, className }) => {
  const router = useRouter();

  return (
    <div
      className={`
      text-gray-800 
      bg-white dark:bg-neutral-800/80 dark:text-white
      rounded-md pt-10 pb-12 md:px-16 mb-0
      ${className}`}
    >
      <h1
        className="text-4xl font-bold mb-10 text-amber-600 cursor-pointer"
        onClick={() => router.push(`/bai-viet/${news.id}`)}
      >
        {news.title}
      </h1>
      <div className="flex flex-row gap-2 font-thin mb-5 ml-5">
        <p>Published on {news.date}, </p>
        <p>Category - {news.category}</p>
      </div>
      <h2
        className="
        text-gray-600 dark:text-white font-medium 
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
      <p className="italic">Author: {news.publisher}</p>
    </div>
  );
};

export default NewsCard;
