import React, { createContext, useContext, useState, useMemo } from 'react';
import type { Product } from '@/types/Product';

type CartItem = { product: Product; quantity: number; };
type CartContextValue = {
  items: CartItem[];
  addProduct: (p: Product) => void;
  removeProduct: (id: string) => void;
  setQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [items, setItems] = useState<CartItem[]>([]);

  const addProduct = (p: Product) => {
    setItems(prev => {
      const found = prev.find(i => i.product.id === p.id);
      if (found) {
        return prev.map(i => i.product.id === p.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { product: p, quantity: 1 }];
    });
  };

  const removeProduct = (id: string) => setItems(prev => prev.filter(i => i.product.id !== id));
  const setQuantity = (id: string, qty: number) => setItems(prev => prev.map(i => i.product.id === id ? { ...i, quantity: Math.max(0, qty) } : i).filter(i => i.quantity > 0));
  const clearCart = () => setItems([]);
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  const value = { items, addProduct, removeProduct, setQuantity, clearCart, total };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export type { CartItem };
