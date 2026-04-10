import React from 'react';
import { type PerformanceProject } from '../../types';
import Icon from '../../icons';

interface PerformanceProjectCardProps {
  project: PerformanceProject;
}

const PerformanceProjectCard: React.FC<PerformanceProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        {/* Left Side: Icon and Project Info */}
        <div className="flex items-start gap-3 flex-1">
          <div className="mt-1 text-gray-400 dark:text-gray-500">
            <Icon name="layers" size={20} />
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {project.code}
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Icon name="clock" size={14} />
                <span>{project.hours}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="clipboard" size={14} />
                <span>{project.task}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Status */}
        <div className="text-right">
          <div
            className="text-sm font-medium px-3 py-1 rounded-full"
            style={{
              backgroundColor:
                project.statusColor === 'green'
                  ? 'rgba(16, 185, 129, 0.1)'
                  : 'rgba(251, 191, 36, 0.1)',
              color: project.statusColor === 'green' ? '#10b981' : '#fbbf24',
            }}
          >
            {project.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceProjectCard;
