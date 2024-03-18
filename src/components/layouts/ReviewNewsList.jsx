import React from "react";
import ReviewNewsCart from "./ReviewNewsCart";

export default function ReviewNewsList({ newsList, isHorizontal, className }) {
  return (
    <div
      className={`gap-1.5 flex
      ${className}
      ${
        isHorizontal
          ? "flex-row w-[6000px] mx-10"
          : "flex-col h-[450px] overflow-y-auto"
      }`}
    >
      {newsList.map((news) => (
        <ReviewNewsCart key={news.id} news={news} />
      ))}
    </div>
  );
}
