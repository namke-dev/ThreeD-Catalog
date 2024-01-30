import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-md p-4 shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{news.title}</h2>
      <p className="text-gray-600">{news.content}</p>
    </div>
  );
};

export default NewsCard;
