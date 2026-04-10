import React, { type ReactNode } from 'react';

type BadgeVariant = 'green' | 'amber' | 'red' | 'blue';

interface BadgeProps {
  variant: BadgeVariant;
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';

  const variantClasses: Record<BadgeVariant, string | React.CSSProperties> = {
    green: {
      backgroundColor: 'var(--color-primary-soft)',
      color: 'var(--color-primary)',
    },
    amber: {
      backgroundColor: '#FEF3C7',
      color: '#D97706',
    },
    red: {
      backgroundColor: '#FEE2E2',
      color: '#DC2626',
    },
    blue: {
      backgroundColor: '#DBEAFE',
      color: '#2563EB',
    },
  };

  const variantStyle = variantClasses[variant];

  return (
    <span className={baseClasses} style={variantStyle as React.CSSProperties}>
      {children}
    </span>
  );
};

export default Badge;
