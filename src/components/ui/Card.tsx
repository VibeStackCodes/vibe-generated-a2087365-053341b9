import React from 'react';

type CardProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, title, className }) => {
  return (
    <section className={`bg-white rounded-lg shadow p-4 ${className ?? ''}`}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </section>
  );
};
