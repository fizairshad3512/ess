import React from 'react';

interface StatBoxProps {
  value: string | number;
  label: string;
  valueClassName?: string;
}

const StatBox: React.FC<StatBoxProps> = ({ value, label, valueClassName = '' }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className={`text-4xl font-bold text-gray-900 dark:text-gray-100 ${valueClassName}`}>
        {value}
      </div>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
};

export default StatBox;
