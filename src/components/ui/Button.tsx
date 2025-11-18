import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...rest }) => {
  const base = 'px-4 py-2 rounded-md font-semibold focus:outline-none';
  const v = variant === 'secondary'
    ? 'bg-white text-black border border-gray-300 hover:bg-gray-100'
    : 'bg-blue-600 text-white hover:bg-blue-700';
  return (
    <button className={`${base} ${v} ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
};
