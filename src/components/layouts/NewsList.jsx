import React from "react";
import NewsCard from "./NewsCart";

const NewsList = ({ newsList, isExpanded }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {newsList.map((news) => (
        <NewsCard key={news.id} news={news} isExpanded={isExpanded} />
      ))}
    </div>
  );
};

export default NewsList;
