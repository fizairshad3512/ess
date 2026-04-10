import React from 'react';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  initials: string;
  color?: string;
  size?: AvatarSize;
}

const Avatar: React.FC<AvatarProps> = ({ initials, color, size = 'md' }) => {
  const sizeMap: Record<AvatarSize, number> = {
    sm: 27,
    md: 32,
    lg: 68,
  };

  const dimension = sizeMap[size];
  const primaryColor = color || 'var(--color-primary)';

  return (
    <div
      style={{
        width: `${dimension}px`,
        height: `${dimension}px`,
        backgroundColor: primaryColor,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 600,
        fontSize: size === 'lg' ? '24px' : size === 'md' ? '14px' : '12px',
        flexShrink: 0,
      }}
    >
      {initials.toUpperCase()}
    </div>
  );
};

export default Avatar;
