import React from 'react';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { items, total, setQuantity, removeProduct, clearCart } = useCart();

  if (!open) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 border-l">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="font-semibold">Your Cart</div>
        <Button onClick={onClose} variant="secondary">Close</Button>
      </div>
      <div className="p-4 overflow-auto h-full">
        {items.length === 0 && <div className="text-sm text-gray-500">Your cart is empty.</div>}
        {items.map((ci) => (
          <div key={ci.product.id} className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{ci.product.image ?? '📦'}</span>
              <div>
                <div className="text-sm font-semibold">{ci.product.name}</div>
                <div className="text-xs text-gray-500">{ci.product.category}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 rounded bg-gray-200" onClick={() => setQuantity(ci.product.id, Math.max(0, ci.quantity - 1))}>-</button>
              <span className="px-2">{ci.quantity}</span>
              <button className="px-2 py-1 rounded bg-gray-200" onClick={() => setQuantity(ci.product.id, ci.quantity + 1)}>+</button>
              <span className="w-28 text-right">{formatCurrency(ci.product.price * ci.quantity)}</span>
              <button className="text-red-500" onClick={() => removeProduct(ci.product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center justify-between mb-2">
          <span>Total</span>
          <span className="font-semibold">{formatCurrency(total)}</span>
        </div>
        <Button className="w-full" disabled={items.length === 0} onClick={() => { clearCart(); onClose(); }}>Checkout</Button>
      </div>
    </div>
  );
};
