import React from 'react';

interface IconWrapperProps {
  children: React.ReactNode;
  bgColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  bgColor = '#F3F4F6',
  size = 'md',
  rounded = 'lg',
  className = ''
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };
  
  const roundedStyles = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-[14px]',
    full: 'rounded-full'
  };
  
  return (
    <div
      className={`${sizeStyles[size]} ${roundedStyles[rounded]} flex items-center justify-center ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};