'use client';

import { useState } from 'react';
import {
  Heart,
  ShoppingCart,
  Share2,
  Star,
  Truck,
  Shield,
  RotateCcw,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetailsClient({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');

  const productImages = product.images || [product.image];
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  return (
    <div className='min-h-screen bg-background pt-8 pb-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='flex items-center gap-2 text-sm text-gray-500 mb-8'>
          <Link href='/' className='hover:text-primary transition'>
            Home
          </Link>
          <span>/</span>
          <Link href='/products' className='hover:text-primary transition'>
            Products
          </Link>
          <span>/</span>
          <span className='text-foreground'>{product.name}</span>
        </nav>

        <div className='grid lg:grid-cols-2 gap-12'>
          <div className='space-y-4'>
            <div className='aspect-square bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] cursor-zoom-in'>
              <Image
                src={productImages[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                priority
              />
            </div>

            {productImages.length > 1 && (
              <div className='flex gap-3 overflow-x-auto pb-2'>
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary scale-105'
                        : 'border-transparent hover:border-primary/40'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      width={80}
                      height={80}
                      className='w-full h-full object-cover'
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className='space-y-6'>
            <div>
              <h1 className='font-heading text-3xl md:text-4xl font-bold text-foreground mb-2'>
                {product.name}
              </h1>

              <div className='flex items-center gap-4 flex-wrap'>
                <div className='flex items-center gap-1'>
                  {[...Array(5)].map((_, i) => {
                    const ratingValue = product.rating || 0;
                    const isFullStar = i < Math.floor(ratingValue);
                    const isHalfStar = i < ratingValue && !isFullStar;

                    return (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          isFullStar
                            ? 'fill-secondary text-secondary'
                            : isHalfStar
                              ? 'fill-secondary text-secondary opacity-50'
                              : 'text-gray-300'
                        }`}
                      />
                    );
                  })}
                </div>

                <span className='text-gray-500'>
                  ({product.reviews || product.rating?.toFixed(1) || '0'})
                  reviews
                </span>
              </div>
            </div>

            <div className='flex items-baseline gap-3 flex-wrap'>
              <span className='font-heading text-4xl font-bold text-primary'>
                ${product.price}
              </span>

              {product.originalPrice && (
                <>
                  <span className='text-xl text-gray-400 line-through'>
                    ${product.originalPrice}
                  </span>
                  <span className='px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full'>
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            <div className='flex gap-4 text-sm flex-wrap'>
              {product.brand && (
                <div>
                  <span className='text-gray-500'>Brand:</span>
                  <span className='ml-2 text-foreground font-medium'>
                    {product.brand}
                  </span>
                </div>
              )}

              {product.category && (
                <div>
                  <span className='text-gray-500'>Category:</span>
                  <span className='ml-2 text-foreground font-medium'>
                    {product.category}
                  </span>
                </div>
              )}
            </div>

            <p className='text-gray-600 leading-relaxed'>
              {product.description}
            </p>

            <div className='flex items-center gap-2'>
              <div
                className={`w-2 h-2 rounded-full ${
                  product.stock > 0 ? 'bg-green-500' : 'bg-red-500'
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  product.stock > 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {product.stock > 0
                  ? `In Stock (${product.stock} left)`
                  : 'Out of Stock'}
              </span>
            </div>

            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className='font-medium text-foreground mb-3 block'>
                  Select Size
                </label>

                <div className='flex gap-3 flex-wrap'>
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-xl font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-white border-2 border-gray-200 text-foreground hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className='flex flex-wrap gap-4'>
              <div className='flex items-center bg-white rounded-xl border border-gray-200'>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='w-12 h-12 flex items-center justify-center text-foreground hover:bg-gray-50 rounded-l-xl'
                  disabled={product.stock === 0}
                >
                  -
                </button>

                <span className='w-12 text-center font-medium'>{quantity}</span>

                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  className='w-12 h-12 flex items-center justify-center text-foreground hover:bg-gray-50 rounded-r-xl'
                  disabled={product.stock === 0}
                >
                  +
                </button>
              </div>

              <button
                disabled={product.stock === 0}
                className={`flex-1 min-w-[200px] py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-heading font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 ${
                  product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <ShoppingCart className='w-5 h-5' />
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
              </button>

              <button className='w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:border-primary hover:text-primary transition-colors'>
                <Heart className='w-5 h-5' />
              </button>

              <button className='w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:border-primary hover:text-primary transition-colors'>
                <Share2 className='w-5 h-5' />
              </button>
            </div>

            <div className='grid grid-cols-3 gap-4 pt-6 border-t border-gray-100'>
              <div className='flex flex-col items-center gap-2 text-center'>
                <Truck className='w-6 h-6 text-primary' />
                <span className='text-sm text-gray-500'>Free Shipping</span>
              </div>
              <div className='flex flex-col items-center gap-2 text-center'>
                <Shield className='w-6 h-6 text-accent' />
                <span className='text-sm text-gray-500'>1 Year Warranty</span>
              </div>
              <div className='flex flex-col items-center gap-2 text-center'>
                <RotateCcw className='w-6 h-6 text-secondary' />
                <span className='text-sm text-gray-500'>7 Days Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
