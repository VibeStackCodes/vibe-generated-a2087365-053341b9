import React from 'react';
import { Button } from '@/components/ui/Button';
import { Product } from '@/types/Product';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/lib/utils';

type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addProduct } = useCart();

  return (
    <div className="border rounded-lg p-4 bg-white flex flex-col h-full">
      <div className="h-20 w-full flex items-center justify-center bg-gray-100 rounded-md mb-2 text-3xl">
        {product.image ?? '📦'}
      </div>
      <div className="font-semibold text-lg">{product.name}</div>
      <div className="text-sm text-gray-500 mb-2">{product.description}</div>
      <div className="mt-auto flex items-center justify-between">
        <span className="font-semibold">{formatCurrency(product.price)}</span>
        <Button onClick={() => addProduct(product)}>Add</Button>
      </div>
    </div>
  );
};
