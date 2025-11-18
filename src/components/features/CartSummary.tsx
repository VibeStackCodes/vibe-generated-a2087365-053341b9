import React from 'react';
import { useCart } from '@/hooks/useCart';

export const CartSummary: React.FC = () => {
  const { items, total } = useCart();
  return (
    <div className="text-sm text-gray-700">
      {items.length} items • Total {total}
    </div>
  );
};
