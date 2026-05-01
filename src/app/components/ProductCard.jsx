'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);
  const imageUrl = imgError
    ? 'https://placehold.co/400x300/FFD166/FF7E36?text=SunCart'
    : product.image;

  const fullStars = Math.floor(product.rating || 0);
  const hasHalfStar = (product.rating || 0) % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const isLowStock = product.stock <= 5;
  const isOutOfStock = product.stock === 0;

  return (
    <div className='group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
      <div className='relative overflow-hidden h-64 w-full'>
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover transition-transform duration-500 group-hover:scale-110'
          onError={() => setImgError(true)}
          priority={product.id <= 4}
        />

        {isOutOfStock ? (
          <span className='absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10'>
            Out of Stock
          </span>
        ) : isLowStock ? (
          <span className='absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10'>
            Only {product.stock} left
          </span>
        ) : product.stock > 20 ? (
          <span className='absolute top-3 left-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10'>
            In Stock
          </span>
        ) : null}

        <div className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
          <Link
            href={`/products/${product.id}`}
            className='bg-white text-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors'
          >
            Quick View
          </Link>
        </div>
      </div>

      <div className='p-5'>
        {product.brand && (
          <p className='text-xs text-gray-400 font-body uppercase tracking-wider mb-1'>
            {product.brand}
          </p>
        )}

        <h3 className='font-heading font-semibold text-lg text-foreground line-clamp-1'>
          {product.name}
        </h3>

        {product.category && (
          <p className='text-xs text-gray-400 mt-1'>{product.category}</p>
        )}

        <div className='flex items-center gap-1 mt-3'>
          {[...Array(fullStars)].map((_, i) => (
            <svg
              key={`full-${i}`}
              className='w-4 h-4 text-sunset fill-current'
              viewBox='0 0 24 24'
            >
              <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
            </svg>
          ))}

          {hasHalfStar && (
            <svg className='w-4 h-4' viewBox='0 0 24 24'>
              <defs>
                <linearGradient id={`half-${product.id}`}>
                  <stop offset='50%' stopColor='#FFD166' />
                  <stop offset='50%' stopColor='#E5E7EB' />
                </linearGradient>
              </defs>
              <path
                fill={`url(#half-${product.id})`}
                d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z'
              />
            </svg>
          )}

          {[...Array(emptyStars)].map((_, i) => (
            <svg
              key={`empty-${i}`}
              className='w-4 h-4 text-gray-300'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
            </svg>
          ))}

          <span className='text-xs text-gray-500 ml-2'>({product.rating})</span>
        </div>

        <div className='mt-3 flex items-center justify-between'>
          <div className='flex items-baseline gap-2'>
            <span className='font-heading font-bold text-2xl text-wave'>
              ${product.price}
            </span>
          </div>

          {!isOutOfStock && (
            <span className='text-xs text-green-600 font-medium'>
              {product.stock} left
            </span>
          )}
        </div>

        <div className='mt-4'>
          <Link
            href={`/products/${product.id}`}
            className={`w-full inline-flex items-center justify-center font-body font-semibold py-2.5 rounded-full transition-all duration-300 ${
              isOutOfStock
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'
                : 'bg-linear-to-r from-wave to-cyan-600 text-white hover:bg-primary-dark hover:shadow-lg'
            }`}
          >
            {isOutOfStock ? 'Out of Stock' : 'View Details'}
          </Link>
        </div>
      </div>
    </div>
  );
}
