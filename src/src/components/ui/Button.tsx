import React, { type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  variant: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  className = '',
  icon,
  disabled = false,
  type = 'button',
  style,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed';

  let variantClasses = '';
  let defaultStyle: React.CSSProperties = {};

  if (variant === 'primary') {
    variantClasses = 'text-white';
    defaultStyle = {
      backgroundColor: 'var(--color-primary)',
    };
  } else if (variant === 'secondary') {
    variantClasses = 'border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900';
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={style || defaultStyle || undefined}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
