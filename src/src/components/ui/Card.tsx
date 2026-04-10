import React, { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg ${className}`}
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {children}
    </div>
  );
};

export default Card;
