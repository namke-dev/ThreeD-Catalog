import React from "react";
import NewsCard from "./NewsCart";

const NewsList = ({ newsList }) => {
  return (
    <div>
      {newsList.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default NewsList;
