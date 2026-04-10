import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  highlighted?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, highlighted = false }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
      <div
        className="text-3xl font-bold mb-2"
        style={highlighted ? { color: 'var(--color-primary)' } : undefined}
      >
        {value}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
