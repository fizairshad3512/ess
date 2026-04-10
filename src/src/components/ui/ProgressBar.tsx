import React from 'react';

interface ProgressBarProps {
  percentage: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color = 'var(--color-primary)',
}) => {
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div
      className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      style={{ height: '3px' }}
    >
      <div
        style={{
          width: `${clampedPercentage}%`,
          height: '100%',
          backgroundColor: color,
          transition: 'width 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

export default ProgressBar;
