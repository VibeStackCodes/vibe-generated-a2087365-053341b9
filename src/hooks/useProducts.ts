import { useMemo } from 'react';
import { products } from '@/data/products';
import type { Product } from '@/types/Product';

export function useProducts(): Product[] {
  const data = useMemo(() => products, []);
  return data;
}
