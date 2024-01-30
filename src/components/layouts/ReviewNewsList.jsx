import React from "react";
import ReviewNewsCart from "./ReviewNewsCart";

export default function ReviewNewsList({ newsList }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {newsList.map((news) => (
        <ReviewNewsCart key={news.id} news={news} />
      ))}
    </div>
  );
}
