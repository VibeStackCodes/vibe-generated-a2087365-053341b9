import React from 'react';
import { Header } from './Header';

type LayoutProps = {
  children: React.ReactNode;
  onCartOpen: () => void;
};

export const Layout: React.FC<LayoutProps> = ({ children, onCartOpen }) => {
  return (
    <>
      <Header onCartOpen={onCartOpen} />
      <main className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
      {/* Footer can be added later */}
    </>
  );
};
