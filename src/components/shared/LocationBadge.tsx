import React from 'react';
import Icon from '../../icons';

interface LocationBadgeProps {
  location: string | null;
}

const LocationBadge: React.FC<LocationBadgeProps> = ({ location }) => {
  if (!location) {
    return <span className="text-gray-500 dark:text-gray-400">N/A</span>;
  }

  return (
    <div className="flex items-center gap-2">
      <div className="text-green-600 dark:text-green-400">
        <Icon name="location" size={16} />
      </div>
      <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
        {location}
      </span>
    </div>
  );
};

export default LocationBadge;
