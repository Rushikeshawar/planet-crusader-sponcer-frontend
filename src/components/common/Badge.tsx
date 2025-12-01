import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  bgColor,
  textColor,
  className = ''
}) => {
  const variantStyles = {
    default: 'bg-gray-100 text-gray-700',
    success: 'bg-[#DCFCE7] text-[#008236]',
    warning: 'bg-[#FEF9C2] text-[#A65F00]',
    error: 'bg-red-100 text-red-700',
    info: 'bg-[#DBEAFE] text-[#1447E6]',
    custom: ''
  };
  
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };
  
  const style = bgColor || textColor ? {
    backgroundColor: bgColor,
    color: textColor
  } : undefined;
  
  return (
    <span
      style={style}
      className={`rounded-[10px] font-normal inline-flex items-center ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};