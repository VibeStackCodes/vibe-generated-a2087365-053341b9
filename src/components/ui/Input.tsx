import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <input className="w-full border border-gray-300 rounded-md px-3 py-2" {...rest} />
    </div>
  );
};
