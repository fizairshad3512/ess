import React from 'react';

interface TabGroupProps {
  tabs: string[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

const TabGroup: React.FC<TabGroupProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-900 rounded-lg w-fit">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(index)}
          className={`px-4 py-2 rounded-md font-medium transition-all ${
            activeTab === index
              ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabGroup;
