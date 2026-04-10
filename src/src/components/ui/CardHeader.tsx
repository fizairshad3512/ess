import React, { type ReactNode } from 'react';

interface CardHeaderProps {
  title: string;
  action?: ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, action }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      {action && <div>{action}</div>}
    </div>
  );
};

export default CardHeader;
