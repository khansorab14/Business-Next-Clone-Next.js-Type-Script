"use client";
import React, { useState, ReactNode } from "react";

type Tab = {
  id: string;
  label: string;
  content: ReactNode; // Content (image or anything else) to be passed dynamically
};

type TabPaginationProps = {
  button: Tab[]; // Accepts an array of button as props
};

const TabPagination: React.FC<TabPaginationProps> = ({ button }) => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<string>(button[0].id);

  // Handler to change button
  const handleTabClick = (id: string) => {
    setActiveTab(id);
    console.log(`Tab clicked: ${id}`);
  };

  // Get the active tab content
  const activeTabContent = button.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="tab-pagination">
      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-4">
        {button.map((tab) => (
          <button
            key={tab.id}
            className={`w-[180px] border border-black h-[40px] text-[14px] rounded-full text-black font-bold ${
              activeTab === tab.id
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="active-content">{activeTabContent}</div>
    </div>
  );
};

export default TabPagination;
