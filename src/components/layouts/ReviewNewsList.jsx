import React from "react";
import ReviewNewsCart from "./ReviewNewsCart";

export default function ReviewNewsList({ newsList, isHorizontal }) {
  return (
    <div
      className={`gap-1.5 flex
      ${isHorizontal ? "flex-row w-[6000px]" : "flex-col"}`}
    >
      {newsList.map((news) => (
        <ReviewNewsCart key={news.id} news={news} />
      ))}
    </div>
  );
}
