import type { Product } from '@/types/Product';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Wireless Headphones',
    description: 'High-fidelity Bluetooth headphones with noise cancellation.',
    price: 99.99,
    category: 'Audio',
    image: '🎧'
  },
  {
    id: 'p2',
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with rich bass and 12-hour battery.',
    price: 59.99,
    category: 'Audio',
    image: '🔊'
  },
  {
    id: 'p3',
    name: 'Smartwatch',
    description: 'Track health and notifications on the go.',
    price: 149.99,
    category: 'Wearables',
    image: '⌚'
  },
  {
    id: 'p4',
    name: 'Drone Mini',
    description: 'Compact drone with 4K camera and stability.',
    price: 299.99,
    category: 'Gadgets',
    image: '🛸'
  },
  {
    id: 'p5',
    name: 'Wireless Keyboard',
    description: 'Ergonomic keyboard with silent keys.',
    price: 39.99,
    category: 'Accessories',
    image: '⌨️'
  },
  {
    id: 'p6',
    name: 'Smart Lamp',
    description: 'Voice-controlled RGB smart lamp.',
    price: 29.99,
    category: 'Home',
    image: '💡'
  }
];
