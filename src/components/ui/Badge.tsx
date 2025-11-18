import React from 'react';

type Props = {
  label: string;
  color?: 'green' | 'red' | 'blue' | 'default';
};

export const Badge: React.FC<Props> = ({ label, color = 'default' }) => {
  const colorClass = color === 'green'
    ? 'bg-green-100 text-green-800'
    : color === 'red'
      ? 'bg-red-100 text-red-800'
      : color === 'blue'
        ? 'bg-blue-100 text-blue-800'
        : 'bg-gray-100 text-gray-800';
  return <span className={`px-2 py-1 rounded-full text-xs ${colorClass}`}>{label}</span>;
};
