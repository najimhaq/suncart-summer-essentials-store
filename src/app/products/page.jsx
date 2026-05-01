'use client';

import { useEffect, useState } from 'react';
import { getAllProducts } from '../utils/data';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className='text-center py-20 text-gray-500'>
        Loading summer essentials...
      </div>
    );
  }

  if (error) {
    return <div className='text-center py-20 text-red-500'>{error}</div>;
  }

  if (products.length === 0) {
    return (
      <div className='text-center py-20 text-gray-500'>
        No products available right now.
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold text-center mb-12'>Our Collection</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
