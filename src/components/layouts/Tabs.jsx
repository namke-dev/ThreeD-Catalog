// Tabs.js
import React, { useState } from "react";

const Tabs = ({ tabs, defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className=" mt-20 bg-gray-50 rounded-lg">
      <div className="flex gap-0.5">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer px-4 py-2
            border-2 rounded-sm
            ${
              activeTab === tab
                ? "bg-white border-blue-500"
                : "bg-gray-300 border-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div>{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
