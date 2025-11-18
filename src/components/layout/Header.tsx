import React from 'react';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';

type HeaderProps = {
  onCartOpen: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onCartOpen }) => {
  const { items } = useCart();
  const count = items.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <header className="bg-white border-b sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">Product</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-700">{count} items</span>
          <Button onClick={onCartOpen}>Cart</Button>
        </div>
      </div>
    </header>
  );
};
