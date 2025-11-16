import { ReactNode } from 'react';

interface IconWrapperProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'square';
}

export default function IconWrapper({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'square',
}: IconWrapperProps) {
  const variantClasses = {
    primary: 'bg-primary-50 text-primary-600',
    secondary: 'bg-gray-100 text-gray-700',
    success: 'bg-green-50 text-green-600',
    warning: 'bg-orange-50 text-orange-600',
  };

  const sizeClasses = {
    sm: 'w-10 h-10 p-2',
    md: 'w-12 h-12 p-2.5',
    lg: 'w-16 h-16 p-3',
  };

  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-xl',
  };

  return (
    <div
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
        inline-flex items-center justify-center
        transition-all duration-200
      `}
    >
      {children}
    </div>
  );
}
