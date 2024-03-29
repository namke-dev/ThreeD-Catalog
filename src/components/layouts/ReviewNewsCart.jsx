import { useRouter } from "next/router";
import React from "react";

export default function ReviewNewsCart({ news }) {
  const router = useRouter();

  return (
    <div>
      <div
        className="text-neutral-800 bg-white
        dark:text-white dark:bg-neutral-800/80
        py-5 md:px-8 mb-0
        max-w-[1200px] 
        h-[220px]
        flex flex-col justify-between
        border border-zinc-700/20 duration-500
        px-7 rounded-md
        transition-all"
      >
        <div>
          <h3
            className="text-md font-semibold text-amber-600 dark:text-amber-500 cursor-pointer"
            onClick={() => router.push(`/bai-viet/${news.id}`)}
          >
            {truncateText(news.title, 80)}
          </h3>
          <div className="flex flex-row gap-2 font-thin text-xs mb-2">
            <p>Published on {news.date}, </p>
          </div>
        </div>

        <div className="flex flex-row w-full mb-4">
          <div className="flex items-center justify-center h-auto w-1/3">
            <img src={news.img_url} className="w-full h-auto rounded-xl"></img>
          </div>

          <p
            className=" w-2/3
            pl-5 text-sm
            text-justify whitespace-pre-line "
          >
            {truncateText(news.summary, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "...";
  }
}
