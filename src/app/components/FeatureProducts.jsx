'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingCart,
  Star,
  Eye,
  Sparkles,
  TrendingUp,
  Flame,
  ArrowDown01,
} from 'lucide-react';

export default function FeatureProducts() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    {
      id: 1,
      name: 'UV Protection Sunglasses',
      brand: 'SunShade',
      price: 15,
      originalPrice: 29.99,
      rating: 4.7,
      stock: 10,
      description:
        'Stylish UV protection sunglasses perfect for summer outings.',
      image: '/products/sunglasses.png',
      category: 'Accessories',
      badge: 'Best Seller',
      badgeIcon: <Flame className='w-3 h-3 mr-1' />,
    },
    {
      id: 2,
      name: 'Beach Flip Flops',
      brand: 'WaveWalk',
      price: 12,
      originalPrice: 24.99,
      rating: 4.5,
      stock: 20,
      description: 'Comfortable flip flops ideal for sandy beaches.',
      image: '/products/flipflop.jpg',
      category: 'Footwear',
      badge: 'Hot Deal',
      badgeIcon: <TrendingUp className='w-3 h-3 mr-1' />,
    },
    {
      id: 3,
      name: 'Summer Hat',
      brand: 'CoolCap',
      price: 18,
      originalPrice: 34.99,
      rating: 4.6,
      stock: 15,
      description: 'Lightweight straw hat to protect from the sun.',
      image: '/products/summer-hat.jpg',
      category: 'Accessories',
      badge: 'Limited',
      badgeIcon: <ArrowDown01 className='w-3 h-3 mr-1' />,
    },
    {
      id: 4,
      name: 'Aloe Vera Gel',
      brand: 'ChillMate',
      price: 25,
      originalPrice: 49.99,
      rating: 4.7,
      stock: 12,
      description: 'Keeps your skins glow and fresh.',
      image: '/products/aloe-vera.png',
      category: 'Outdoor',
      badge: 'New Arrival',
      badgeIcon: <Sparkles className='w-3 h-3 mr-1' />,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className='w-4 h-4 fill-sunset text-sunset' />
        ))}
        {hasHalfStar && (
          <div className='relative'>
            <Star className='w-4 h-4 text-gray-300' />
            <Star className='w-4 h-4 fill-sunset text-sunset absolute top-0 left-0 clip-half' />
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className='w-4 h-4 text-gray-300' />
        ))}
      </>
    );
  };

  return (
    <section
      id='featured-products'
      className='relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-yellow-50 py-10'
    >
      <div className='absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl animate-pulse delay-1000' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-teal-100/20 rounded-full blur-3xl' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full mb-5 shadow-lg'>
            <Sparkles className='w-4 h-4 text-white' />
            <span className='text-white text-sm font-semibold tracking-wide'>
              Summer Collection 2025
            </span>
          </div>
          <h2 className='font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-5'>
            Featured{' '}
            <span className='bg-linear-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent'>
              Products
            </span>
          </h2>
          <p className='text-gray-500 max-w-2xl mx-auto text-lg'>
            Discover our handpicked summer essentials for your perfect beach day
          </p>
          <div className='flex justify-center gap-2 mt-6'>
            <div className='w-16 h-1 bg-sunset rounded-full' />
            <div className='w-8 h-1 bg-mango rounded-full' />
            <div className='w-4 h-1 bg-wave rounded-full' />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                isLoaded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.12}s`,
              }}
            >
              <div className='absolute top-3 left-3 z-20 flex flex-col gap-2'>
                {product.badge && (
                  <span
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg shadow-lg flex items-center gap-1 ${
                      product.badge === 'Best Seller'
                        ? 'bg-linear-to-r from-red-500 to-orange-500 text-white'
                        : product.badge === 'Hot Deal'
                          ? 'bg-linear-to-r from-sunset to-yellow-500 text-white'
                          : product.badge === 'Limited'
                            ? 'bg-linear-to-r from-teal-500 to-cyan-700 text-white'
                            : 'bg-linear-to-r from-sunset to-wave text-white'
                    }`}
                  >
                    {product.badgeIcon}
                    {product.badge}
                  </span>
                )}
              </div>

              {product.originalPrice && (
                <div className='absolute top-3 right-3 z-20'>
                  <div className='relative'>
                    <div className='absolute inset-0 bg-red-500 rounded-full blur-sm opacity-50' />
                    <span className='relative bg-linear-to-r from-cyan-700 to-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg block'>
                      -
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </span>
                  </div>
                </div>
              )}

              <div className='relative overflow-hidden h-68 bg-linear-to-br from-gray-100 to-gray-200'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                  className='object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1'
                />

                <div className='absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                <div className='absolute inset-0 bg-linear-to-br from-black/60 to-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm'>
                  <Link href={`/products/${product.id}`}>
                    <button className='bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-linear-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl'>
                      <Eye className='w-4 h-4' />
                      Quick View
                    </button>
                  </Link>
                </div>
              </div>

              <div className='p-5'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-xs font-semibold text-gray-400 uppercase tracking-wider'>
                    {product.brand}
                  </span>
                  <span className='text-xs font-medium px-2 py-0.5 bg-teal-50 text-teal-600 rounded-full'>
                    {product.category}
                  </span>
                </div>

                <h3 className='font-heading font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300'>
                  {product.name}
                </h3>

                <div className='flex items-center gap-1 mb-3'>
                  {renderStars(product.rating)}
                  <span className='text-xs text-gray-400 ml-2 font-medium'>
                    ({product.rating})
                  </span>
                </div>

                <p className='text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed'>
                  {product.description}
                </p>

                <div className='flex items-center justify-between pt-2 border-t border-gray-100'>
                  <div>
                    <span className='font-heading font-bold text-2xl text-orange-600'>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className='text-gray-400 line-through text-sm ml-2'>
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <button className='flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all duration-300 group/btn'>
                      <ShoppingCart className='w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5' />
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-16'>
          <Link href='/products'>
            <button className='group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-orange-500 text-orange-600 rounded-full font-semibold hover:bg-linear-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1'>
              <span>View All Products</span>
              <svg
                className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
