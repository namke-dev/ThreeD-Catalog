import React, { useState } from "react";
import NewsCard from "./NewsCart";

const NewsList = ({ newsList, isExpanded, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  itemsPerPage = 3;
  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page items
  const currentNews = newsList.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1.5">
      {currentNews.map((news) => (
        <NewsCard
          key={news.id}
          news={news}
          isExpanded={isExpanded}
          className="bg-neutral-100/90"
        />
      ))}

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mr-2 px-3 py-1 bg-gray-300 rounded-md"
        >
          Prev
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= newsList.length}
          className="ml-2 px-3 py-1 bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsList;
