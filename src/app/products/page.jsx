'use client';

import 'animate.css';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../utils/data';
import ProductCard from '../components/ProductCard';
import { IoIosSunny } from 'react-icons/io';
import Categories from '../components/Categories';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  const filterByCategory = (categoryName) => {
    if (categoryName === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === categoryName
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return <div className='text-center py-20'>Loading...</div>;
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-2'>
      <div className='text-center mb-4'>
        <div className='space-y-4'>
          {/* হট ডিলস - স্পন্দন অ্যানিমেশন */}
          <p className='ml-4 text-lg md:text-2xl font-semibold text-sunset tracking-widest animate__animated animate__pulse animate__infinite'>
            Hot Deals 🔥
          </p>

          {/* টেক্সট - ফেড ইন ডাউন অ্যানিমেশন */}
          <h3 className='text-4xl md:text-7xl font-extrabold text-white drop-shadow-lg animate__animated animate__fadeInDown animate__delay-1s'>
            <span className='bg-gradient-to-r from-wave via-sunset to-yellow-400 bg-clip-text text-transparent'>
              Summer Sale 50% OFF
            </span>
          </h3>
        </div>
      </div>

      <Categories onSelectCategory={filterByCategory} />

      <div className='mt-8 mb-4 text-center'>
        <p className='text-dusk/70'>
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className='text-center py-20 text-gray-500'>
          No products found in this category
        </div>
      )}
    </div>
  );
}
