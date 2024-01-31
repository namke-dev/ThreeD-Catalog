import React from "react";

export default function ReviewNewsCart({ news }) {
  return (
    <div
      className="text-white/95 bg-zinc-700/80
      rounded-sm py-3 pb-2 md:px-8 mb-0
      max-w-[1200px] 
      max-h-[250px]
      flex flex-col justify-between"
    >
      <div>
        <h2 className="text-md font-semibold text-gray-200">{news.title}</h2>
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
  );
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "...";
  }
}
