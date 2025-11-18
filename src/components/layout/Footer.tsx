import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-white border-t mt-8">
    <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-600">
      © {new Date().getFullYear()} Product. All rights reserved.
    </div>
  </footer>
);
