import React, { useState } from 'react';
import { CartProvider } from './hooks/useCart';
import { Layout } from './components/layout/Layout';
import { ProductList } from './components/features/ProductList';
import { CartDrawer } from './components/features/CartDrawer';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <CartProvider>
      <Layout onCartOpen={() => setOpen(true)}>
        <ProductList />
      </Layout>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </CartProvider>
  );
};

export default App;
