import React, { useMemo, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { ProductCard } from './ProductCard';
import { Input } from '@/components/ui/Input';
import { useProducts } from '@/hooks/useProducts';
import type { Product } from '@/types/Product';

export const ProductList: React.FC = () => {
  const products = useProducts();
  const [query, setQuery] = useState<string>('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return products;
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }, [products, query]);

  return (
    <Card title="Available Products" className="mt-4">
      <div className="mb-4">
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filtered.length === 0 && <div className="col-span-full text-sm text-gray-500">No products found.</div>}
      </div>
    </Card>
  );
};
